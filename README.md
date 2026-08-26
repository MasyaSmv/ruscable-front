# ruscable-front

Витрина-каталог кабельно-проводниковой продукции.

## Стек

- Next.js 16 (App Router), React 19, TypeScript 5 (strict)
- Tailwind CSS 4, shadcn/ui (Radix)
- Vitest + Testing Library, Playwright
- Bun как менеджер пакетов, Node 20.9+ как рантайм

## Запуск

```bash
bun install
bun run dev
```

Приложение поднимется на `http://localhost:3000`.

## Команды

| Команда              | Что делает                                              |
| -------------------- | ------------------------------------------------------- |
| `bun run dev`        | дев-сервер                                              |
| `bun run build`      | production-сборка                                       |
| `bun run verify`     | typecheck + lint + проверка форматирования + unit-тесты |
| `bun run test:watch` | тесты в watch-режиме                                    |
| `bun run e2e`        | e2e-тесты против production-сборки                      |
| `bun run format`     | форматирование Prettier                                 |

Перед коммитом автоматически прогоняются lint-staged и typecheck, перед пушем — lint и тесты.

## Структура

```
src/app/       маршруты, страницы, метаданные
src/widgets/   крупные блоки страницы
src/features/  пользовательские сценарии
src/entities/  доменные сущности и доступ к данным
src/shared/    переиспользуемое без домена
e2e/           Playwright-тесты
```

Зависимости направлены только вниз: `app → widgets → features → entities → shared`.

## Docker

Production-образ (multi-stage, standalone-сборка Next, запуск от non-root):

```bash
docker compose up --build
```

Для повседневной разработки Docker не нужен — используй `bun run dev`.

## Ветвление

Одна долгоживущая ветка `main`, каждая задача — отдельная короткая ветка
(`feat/*`, `fix/*`, `refactor/*`, `chore/*`) и PR. Прямые коммиты в `main` запрещены.

## Переменные окружения

Скопируй `.env.example` в `.env.local` и заполни значения.
