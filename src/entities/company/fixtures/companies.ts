import { companiesSchema } from "../model/schema";

export const companies = companiesSchema.parse([
  { slug: "segmentenergo", name: "СегментЭнерго", city: "Москва", score: 10, rank: 1 },
  { slug: "cvetlit", name: "КЗ Цветлит", city: "Саранск", score: 10, rank: 2 },
  { slug: "speckabel", name: "НПП Спецкабель", city: "Москва", score: 10, rank: 3 },
  { slug: "moskabelmet", name: "Москабельмет", city: "Москва", score: 9.8, rank: 4 },
  { slug: "rybinskkabel", name: "Рыбинсккабель", city: "Рыбинск", score: 9.4, rank: 5 },
]);
