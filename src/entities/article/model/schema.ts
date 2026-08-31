import { z } from "zod";

/** Исполняемый контракт материала на границе источника данных. */
export const articleSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  lead: z.string().min(1),
  rubric: z.string().min(1),
  publishedAt: z.iso.datetime(),
  views: z.number().int().nonnegative(),
  readingMinutes: z.number().int().positive(),
  imageUrl: z.string().min(1).optional(),
  isPremium: z.boolean(),
});

/** Главная требует минимум двенадцать валидных материалов для всех редакционных блоков. */
export const articlesSchema = z.array(articleSchema).min(12);
