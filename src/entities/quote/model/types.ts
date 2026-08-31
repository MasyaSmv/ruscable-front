import type { z } from "zod";

import type { quoteSchema } from "./schema";

/** Снимок биржевой котировки металла на определённый момент. */
export type Quote = z.infer<typeof quoteSchema>;
