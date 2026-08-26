import { defineConfig, devices } from "@playwright/test";

const PORT = Number(process.env.E2E_PORT ?? 3100);
const BASE_URL = process.env.E2E_BASE_URL ?? `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  ...(process.env.CI ? { workers: 1 } : {}),
  reporter: [
    // HTML-отчёт с trace viewer: главный инструмент разбора падений.
    ["html", { open: "never", outputFolder: "playwright-report" }],
    ["junit", { outputFile: "test-results/e2e-junit.xml" }],
    process.env.CI ? ["github"] : ["list"],
  ],
  use: {
    baseURL: BASE_URL,
    // Трейс пишется на первой перепроверке, скриншот и видео - только на падении:
    // полная запись каждого прогона раздувает артефакты без пользы.
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  // e2e гоняются против того же standalone-сервера, который уезжает в docker-образ,
  // а не против dev-сервера: тесты должны подтверждать поведение production.
  webServer: {
    command: "bun run build:standalone && bun run start",
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    env: {
      PORT: String(PORT),
      HOSTNAME: "127.0.0.1",
    },
  },
});
