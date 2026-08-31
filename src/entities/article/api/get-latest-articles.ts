import { articles } from "../fixtures/articles";
import type { Article } from "../model/types";

/**
 * Возвращает последние материалы через заменяемую границу репозитория.
 * @param limit Максимальное число материалов в результате.
 * @returns Материалы в редакционном порядке фикстуры.
 */
export async function getLatestArticles(limit = articles.length): Promise<Article[]> {
  return articles.slice(0, limit);
}
