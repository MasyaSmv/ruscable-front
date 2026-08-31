import { expect, test } from "@playwright/test";

test.describe("главная страница", () => {
  test("отдаётся сервером с готовым HTML, а не пустым контейнером", async ({ request }) => {
    const response = await request.get("/");

    expect(response.status()).toBe(200);
    // SEO-инвариант проекта: контент должен быть в исходном HTML,
    // до того как в браузере выполнится хоть строка JavaScript.
    expect(await response.text()).toContain("<h1");
  });

  test("открывается в браузере и содержит заголовок", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("на мобильном шторка разделов открывается и закрывается по Escape", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await page.getByRole("button", { name: "Разделы" }).click();
    await expect(page.getByRole("dialog", { name: "Мобильное меню" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Разделы портала" })).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog", { name: "Мобильное меню" })).toBeHidden();
    await expect(page.getByRole("button", { name: "Разделы" })).toBeFocused();
  });

  test("на ширине 390px страница не создаёт горизонтальный скролл", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );

    expect(hasHorizontalOverflow).toBe(false);
  });

  test("переключатель темы сохраняет выбор без поломки раскладки", async ({ page }) => {
    await page.goto("/");
    const themeButton = page.getByRole("button", { name: "Переключить цветовую тему" });

    await themeButton.click();
    await expect(page.locator("html")).toHaveClass(/dark/);
    expect(await page.evaluate(() => localStorage.getItem("ruscable-color-theme"))).toBe("dark");

    await page.reload();
    await expect(page.locator("html")).toHaveClass(/dark/);
    expect(
      await page
        .getByRole("heading", { level: 1 })
        .evaluate((element) => getComputedStyle(element).color),
    ).toBe("rgb(255, 255, 255)");
    expect(
      await page
        .getByRole("contentinfo")
        .getByRole("heading", { name: "RusCable.Ru" })
        .evaluate((element) => getComputedStyle(element).color),
    ).toBe("rgb(255, 255, 255)");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      ),
    ).toBe(false);
  });
});
