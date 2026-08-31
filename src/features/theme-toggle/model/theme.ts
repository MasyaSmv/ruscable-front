/** Ключ пользовательского выбора темы в браузерном хранилище. */
export const THEME_STORAGE_KEY = "ruscable-color-theme";

/**
 * Применяет сохранённую или системную тему до гидратации React.
 * Раннее выполнение исключает вспышку светлой палитры у пользователей тёмной темы.
 */
export const themeInitializationScript = `
  const storedTheme = localStorage.getItem("${THEME_STORAGE_KEY}");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDarkTheme = storedTheme === "dark" || (storedTheme === null && prefersDark);
  document.documentElement.classList.toggle("dark", useDarkTheme);
`;
