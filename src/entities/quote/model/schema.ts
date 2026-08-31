import { z } from "zod";

/** Исполняемый контракт биржевой котировки. */
export const quoteSchema = z.object({
  metal: z.string().min(1),
  priceUsd: z.number().positive(),
  changePercent: z.number(),
  updatedAt: z.iso.datetime(),
});

export const quotesSchema = z.array(quoteSchema);
