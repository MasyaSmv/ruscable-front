import { companies } from "../fixtures/companies";
import type { Company } from "../model/types";

/**
 * Возвращает верхнюю часть рейтинга через заменяемую границу репозитория.
 * @param limit Максимальное число компаний в результате.
 * @returns Компании в порядке места рейтинга.
 */
export async function getTopCompanies(limit = companies.length): Promise<Company[]> {
  return companies.slice(0, limit);
}
