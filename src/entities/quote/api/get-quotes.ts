import { quotes } from "../fixtures/quotes";
import type { Quote } from "../model/types";

/** @returns Последние доступные котировки металлов через границу репозитория. */
export async function getQuotes(): Promise<Quote[]> {
  return quotes;
}
