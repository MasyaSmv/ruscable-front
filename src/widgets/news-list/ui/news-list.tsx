import type { Article } from "@/entities/article/model/types";
import { ArticleMeta } from "@/entities/article/ui/article-meta";
import { RubricBadge } from "@/entities/article/ui/rubric-badge";
import { Panel } from "@/shared/ui/panel";

/** Плотный список отраслевых новостей, не выполняющий получение или сортировку данных. */
export function NewsList({ articles }: { articles: Article[] }) {
  return (
    <Panel linkLabel="Все новости" title="Новости отрасли">
      <div>
        {articles.map((article) => (
          <article
            className="border-line-soft grid grid-cols-[4.5rem_1fr] gap-3 border-t p-3 first:border-t-0 sm:grid-cols-[5.75rem_1fr] sm:gap-4 sm:p-4"
            key={article.slug}
          >
            <div aria-hidden="true" className="bg-surface aspect-4/3 rounded-sm" />
            <div>
              <RubricBadge premium={article.isPremium} title={article.rubric} />
              <h3 className="mt-2 text-sm leading-snug font-semibold sm:text-base">
                {article.title}
              </h3>
              <p className="text-ink-soft mt-1 hidden text-sm leading-relaxed sm:block">
                {article.lead}
              </p>
              <ArticleMeta
                className="text-ink-faint mt-2 text-xs"
                publishedAt={article.publishedAt}
                views={article.views}
              />
            </div>
          </article>
        ))}
      </div>
    </Panel>
  );
}
