import { isAppError } from "@/shared/lib/errors";

type LogContext = Readonly<Record<string, unknown>>;

/**
 * Единая точка логирования.
 *
 * Правило проекта: любой `catch`, который не пробрасывает ошибку дальше, обязан её
 * залогировать здесь — с кодом ошибки и контекстом. Молча проглоченная ошибка считается багом.
 *
 * Сейчас пишет в консоль. Когда появится бэкенд, транспорт заменится здесь же,
 * без правок в местах вызова.
 */
export const logger = {
  warn(message: string, context: LogContext = {}): void {
    console.warn(JSON.stringify({ level: "warn", message, ...context }));
  },

  error(message: string, error: unknown, context: LogContext = {}): void {
    console.error(
      JSON.stringify({
        level: "error",
        message,
        errorCode: isAppError(error) ? error.errorCode : "UNKNOWN",
        errorMessage: error instanceof Error ? error.message : String(error),
        errorContext: isAppError(error) ? error.context : {},
        ...context,
      }),
    );
  },
} as const;
