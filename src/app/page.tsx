import type { Metadata } from "next";

import { getLatestArticles } from "@/entities/article/api/get-latest-articles";
import { getTopCompanies } from "@/entities/company/api/get-top-companies";
import { getQuotes } from "@/entities/quote/api/get-quotes";
import { siteConfig } from "@/shared/config/site";
import { ArticlePair } from "@/widgets/article-pair/ui/article-pair";
import { CompanyRating } from "@/widgets/company-rating/ui/company-rating";
import { HeroArticle } from "@/widgets/hero-article/ui/hero-article";
import { MarketPanel } from "@/widgets/market-panel/ui/market-panel";
import { NewsList } from "@/widgets/news-list/ui/news-list";
import { NewsTicker } from "@/widgets/news-ticker/ui/news-ticker";
import { ServicesGrid } from "@/widgets/services-grid/ui/services-grid";

/** Формирует метаданные главной без зависимости от браузерного рендеринга. */
export function generateMetadata(): Metadata {
  return {
    title: "Кабельная промышленность России",
    description: siteConfig.description,
    openGraph: {
      title: `${siteConfig.name} — кабельная промышленность России`,
      description: siteConfig.description,
      url: siteConfig.url,
    },
  };
}

/** Серверная композиция главной: данные загружаются параллельно до рендера виджетов. */
export default async function HomePage() {
  const [articles, quotes, companies] = await Promise.all([
    getLatestArticles(),
    getQuotes(),
    getTopCompanies(5),
  ]);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  // articlesSchema гарантирует минимум двенадцать элементов до входа данных в UI.
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-4">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="min-w-0 flex-1 space-y-4">
          <HeroArticle article={articles[0]!} />
          <ArticlePair articles={[articles[1]!, articles[2]!]} />
          <NewsList articles={articles.slice(3, 7)} />
          <ServicesGrid />
        </div>
        <aside className="flex flex-col gap-4 lg:w-80 lg:shrink-0">
          <NewsTicker articles={articles.slice(7, 12)} />
          <MarketPanel quotes={quotes} />
          <CompanyRating companies={companies} />
        </aside>
      </div>
    </main>
  );
}
