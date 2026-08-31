import type { Article } from "@/entities/article/model/types";
import { ArticleMeta } from "@/entities/article/ui/article-meta";
import { RubricBadge } from "@/entities/article/ui/rubric-badge";

/** Две вторичные карточки, поддерживающие главный редакционный материал. */
export function ArticlePair({ articles }: { articles: readonly [Article, Article] }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:gap-4">
      {articles.map((article) => (
        <article
          className="bg-panel flex flex-col gap-2 rounded-sm border p-4 transition hover:-translate-y-px hover:shadow-md"
          key={article.slug}
        >
          <RubricBadge premium={article.isPremium} title={article.rubric} />
          <h2 className="text-base leading-snug font-semibold tracking-tight">{article.title}</h2>
          <ArticleMeta
            className="text-ink-faint mt-auto text-xs"
            publishedAt={article.publishedAt}
            views={article.views}
          />
        </article>
      ))}
    </div>
  );
}
