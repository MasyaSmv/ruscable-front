/**
 * Базовый класс ошибок приложения.
 *
 * Код ошибки объявляется на самом классе-наследнике (`static readonly CODE`), а не в общем
 * реестре: реестр — это единая точка, которую приходится править при каждой новой ошибке,
 * что нарушает принцип открытости/закрытости.
 */
export abstract class AppError extends Error {
  abstract readonly errorCode: string;

  protected constructor(
    message: string,
    readonly context: Readonly<Record<string, unknown>> = {},
  ) {
    super(message);
    this.name = new.target.name;
  }
}

/** Ошибка нарушенного контракта данных: пришло не то, что объявлено типом. */
export class DataContractError extends AppError {
  static readonly CODE = "DATA_CONTRACT_VIOLATION";
  readonly errorCode = DataContractError.CODE;

  constructor(source: string, details: Readonly<Record<string, unknown>> = {}) {
    super(`Data contract violated by source: ${source}`, { source, ...details });
  }
}

/** Ошибка отсутствия запрошенной сущности. */
export class NotFoundError extends AppError {
  static readonly CODE = "NOT_FOUND";
  readonly errorCode = NotFoundError.CODE;

  constructor(entity: string, identifier: string) {
    super(`${entity} not found: ${identifier}`, { entity, identifier });
  }
}

export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError;
}
