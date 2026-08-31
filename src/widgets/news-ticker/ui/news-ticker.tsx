import type { Article } from "@/entities/article/model/types";
import { Panel } from "@/shared/ui/panel";

const timeFormatter = new Intl.DateTimeFormat("ru-RU", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Moscow",
});

/** Оперативная лента коротких заголовков без изображений. */
export function NewsTicker({ articles }: { articles: Article[] }) {
  return (
    <Panel linkLabel="Вся лента" title="Лента">
      <div>
        {articles.map((article) => (
          <a
            className="border-line-soft hover:text-brand flex gap-3 border-t px-4 py-2 first:border-t-0"
            href="#"
            key={article.slug}
          >
            <time
              className="text-ink-faint w-11 shrink-0 text-xs tabular-nums"
              dateTime={article.publishedAt}
            >
              {timeFormatter.format(new Date(article.publishedAt))}
            </time>
            <span className="text-sm leading-snug">{article.title}</span>
          </a>
        ))}
      </div>
    </Panel>
  );
}
