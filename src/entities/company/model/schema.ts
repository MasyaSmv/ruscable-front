import { z } from "zod";

/** Исполняемый контракт участника отраслевого рейтинга. */
export const companySchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  city: z.string().min(1),
  score: z.number().min(0).max(10),
  rank: z.number().int().positive(),
});

export const companiesSchema = z.array(companySchema);
