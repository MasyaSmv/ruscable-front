import { quotesSchema } from "../model/schema";

export const quotes = quotesSchema.parse([
  { metal: "Медь", priceUsd: 9842.5, changePercent: 1.24, updatedAt: "2026-08-26T15:00:00.000Z" },
  { metal: "Алюминий", priceUsd: 2611, changePercent: 0.38, updatedAt: "2026-08-26T15:00:00.000Z" },
  {
    metal: "Свинец",
    priceUsd: 1998.25,
    changePercent: -0.61,
    updatedAt: "2026-08-26T15:00:00.000Z",
  },
  { metal: "Никель", priceUsd: 15340, changePercent: -0.92, updatedAt: "2026-08-26T15:00:00.000Z" },
  { metal: "Цинк", priceUsd: 2794, changePercent: 0.15, updatedAt: "2026-08-26T15:00:00.000Z" },
]);
