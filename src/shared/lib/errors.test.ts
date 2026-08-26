import { describe, expect, it } from "vitest";

import { DataContractError, isAppError, NotFoundError } from "@/shared/lib/errors";

describe("ошибки приложения", () => {
  it("несёт код на самом классе, а не в общем реестре", () => {
    const error = new NotFoundError("Product", "vvgng-3x2.5");

    expect(error.errorCode).toBe(NotFoundError.CODE);
    expect(error.errorCode).toBe("NOT_FOUND");
  });

  it("сохраняет контекст, пригодный для лога", () => {
    const error = new DataContractError("catalog-fixtures", { field: "price" });

    expect(error.context).toEqual({ source: "catalog-fixtures", field: "price" });
  });

  it("сообщение содержит идентификатор, по которому искали", () => {
    const error = new NotFoundError("Product", "vvgng-3x2.5");

    expect(error.message).toContain("vvgng-3x2.5");
  });

  it("отличает свои ошибки от чужих", () => {
    expect(isAppError(new NotFoundError("Product", "x"))).toBe(true);
    expect(isAppError(new Error("boom"))).toBe(false);
  });

  it("проставляет имя класса-наследника", () => {
    expect(new NotFoundError("Product", "x").name).toBe("NotFoundError");
  });
});
