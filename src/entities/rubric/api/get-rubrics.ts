import { rubrics } from "../fixtures/rubrics";
import type { Rubric } from "../model/types";

/** @returns Рубрики портала через заменяемую границу репозитория. */
export async function getRubrics(): Promise<Rubric[]> {
  return rubrics;
}
