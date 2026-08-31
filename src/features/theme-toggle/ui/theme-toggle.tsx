"use client";

import { Moon, Sun } from "lucide-react";

import { logger } from "@/shared/lib/logger";

import { THEME_STORAGE_KEY } from "../model/theme";

/** Переключает цветовую тему и сохраняет выбор пользователя между визитами. */
export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const useDarkTheme = !root.classList.contains("dark");

    root.classList.toggle("dark", useDarkTheme);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, useDarkTheme ? "dark" : "light");
    } catch (error) {
      logger.error("Не удалось сохранить цветовую тему", error, { feature: "theme-toggle" });
    }
  }

  return (
    <button
      aria-label="Переключить цветовую тему"
      className="text-ink-soft hover:border-brand hover:text-brand ml-auto grid size-10 place-items-center rounded-sm border sm:ml-0"
      onClick={toggleTheme}
      title="Переключить цветовую тему"
      type="button"
    >
      <Moon aria-hidden="true" className="size-5 dark:hidden" />
      <Sun aria-hidden="true" className="hidden size-5 dark:block" />
    </button>
  );
}
