import type { z } from "zod";

import type { companySchema } from "./schema";

/** Компания в отраслевом рейтинге производителей. */
export type Company = z.infer<typeof companySchema>;
