import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Собирает самодостаточный сервер с только нужными файлами из node_modules.
  // Без этого docker-образ тащит все зависимости и раздувается в разы.
  output: "standalone",

  // Ошибки типов не должны молча просачиваться в production-сборку.
  // Линт в Next 16 из build убран и живёт отдельной командой (bun run lint).
  typescript: { ignoreBuildErrors: false },

  poweredByHeader: false,
};

export default nextConfig;
