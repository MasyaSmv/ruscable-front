const dateFormatter = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Moscow",
});

const numberFormatter = new Intl.NumberFormat("ru-RU");
const decimalFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });

/** Форматирует ISO-дату материала в компактном московском времени. */
export function formatArticleDate(value: string): string {
  return dateFormatter.format(new Date(value)).replace(",", "");
}

/** Форматирует целое число с русскими разделителями разрядов. */
export function formatNumber(value: number): string {
  return numberFormatter.format(value);
}

/** Форматирует десятичное число максимум с двумя знаками после запятой. */
export function formatDecimal(value: number): string {
  return decimalFormatter.format(value);
}
