import type { z } from "zod";

import type { rubricSchema } from "./schema";

/** Редакционная рубрика и вид материала, к которому она относится. */
export type Rubric = z.infer<typeof rubricSchema>;
