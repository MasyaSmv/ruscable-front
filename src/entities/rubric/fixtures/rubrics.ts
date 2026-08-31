import { rubricsSchema } from "../model/schema";

export const rubrics = rubricsSchema.parse([
  { slug: "plus", title: "Плюс", kind: "news" },
  { slug: "exclusive", title: "Эксклюзив", kind: "article" },
  { slug: "incidents", title: "Происшествия", kind: "news" },
  { slug: "companies", title: "Компании", kind: "news" },
  { slug: "law", title: "Законотворчество", kind: "news" },
  { slug: "contracts", title: "Контракты", kind: "news" },
  { slug: "innovation", title: "Инновации", kind: "news" },
  { slug: "investment", title: "Инвестиции", kind: "news" },
  { slug: "science", title: "Наука", kind: "article" },
  { slug: "people", title: "Персоны", kind: "article" },
  { slug: "world", title: "За рубежом", kind: "news" },
]);
