# Сборка ведётся на bun (он же менеджер пакетов), а запуск - на Node:
# Next 16 официально поддерживается именно на Node, и рантайм-эксперименты
# в production неоправданны.

FROM oven/bun:1.3.5-alpine AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# Сборку запускает Node, а не bun: bun 1.3.5 под alpine (musl) падает с SIGILL
# внутри next build. bun остаётся только на установку зависимостей.
RUN ./node_modules/.bin/next build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Процесс не должен работать от root: компрометация приложения не должна
# автоматически означать компрометацию контейнера.
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 --ingroup nodejs nextjs

# standalone уже содержит нужный срез node_modules, ставить зависимости заново не требуется.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/').then((r) => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"

CMD ["node", "server.js"]
