import { formatArticleDate, formatNumber } from "@/shared/lib/format";

type ArticleMetaProps = {
  publishedAt: string;
  views: number;
  readingMinutes?: number;
  className?: string;
};

/** Отображает единообразный набор пользовательских метаданных материала. */
export function ArticleMeta({ publishedAt, views, readingMinutes, className }: ArticleMetaProps) {
  return (
    <p className={`flex flex-wrap gap-x-2 tabular-nums ${className ?? ""}`}>
      <time dateTime={publishedAt}>{formatArticleDate(publishedAt)}</time>
      <span aria-hidden="true">·</span>
      <span>{formatNumber(views)} просмотров</span>
      {readingMinutes ? (
        <>
          <span aria-hidden="true">·</span>
          <span>{readingMinutes} минут чтения</span>
        </>
      ) : null}
    </p>
  );
}
