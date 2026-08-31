import type { Article } from "@/entities/article/model/types";
import { ArticleMeta } from "@/entities/article/ui/article-meta";

/** Главная редакционная доминанта страницы с готовыми данными материала. */
export function HeroArticle({ article }: { article: Article }) {
  return (
    <article className="from-brand-bright to-brand-dark text-on-brand relative flex min-h-72 overflow-hidden rounded-lg bg-linear-to-br p-6 lg:min-h-96 lg:p-8">
      <div aria-hidden="true" className="absolute inset-0 bg-[image:var(--hero-overlay)]" />
      <div className="relative mt-auto">
        <span className="bg-on-brand-muted inline-block rounded-full px-3 py-1.5 text-xs font-bold tracking-wide uppercase backdrop-blur-sm">
          {article.rubric}
        </span>
        <h1 className="mt-4 max-w-3xl text-2xl leading-tight font-bold tracking-tight text-balance sm:text-3xl lg:text-4xl">
          {article.title}
        </h1>
        <p className="text-on-brand-soft mt-3 max-w-4xl text-sm leading-relaxed sm:text-base">
          {article.lead}
        </p>
        <ArticleMeta
          className="text-on-brand-faint mt-4 text-xs sm:text-sm"
          publishedAt={article.publishedAt}
          readingMinutes={article.readingMinutes}
          views={article.views}
        />
      </div>
    </article>
  );
}
