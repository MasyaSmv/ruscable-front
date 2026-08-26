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
});
