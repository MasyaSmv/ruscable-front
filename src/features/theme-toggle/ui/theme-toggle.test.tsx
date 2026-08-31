import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { THEME_STORAGE_KEY } from "../model/theme";
import { ThemeToggle } from "./theme-toggle";

describe("ThemeToggle", () => {
  it("переключает тему и сохраняет выбор пользователя", () => {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem(THEME_STORAGE_KEY);
    render(<ThemeToggle />);

    fireEvent.click(screen.getByRole("button", { name: "Переключить цветовую тему" }));

    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");

    fireEvent.click(screen.getByRole("button", { name: "Переключить цветовую тему" }));

    expect(document.documentElement).not.toHaveClass("dark");
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
  });
});
