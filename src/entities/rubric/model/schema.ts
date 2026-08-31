import { z } from "zod";

/** Исполняемый контракт редакционной рубрики. */
export const rubricSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  kind: z.enum(["news", "article"]),
});

export const rubricsSchema = z.array(rubricSchema);
