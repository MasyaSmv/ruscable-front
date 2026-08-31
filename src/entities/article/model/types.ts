import type { z } from "zod";

import type { articleSchema } from "./schema";

/** Валидированный материал редакции, используемый новостными виджетами. */
export type Article = z.infer<typeof articleSchema>;
