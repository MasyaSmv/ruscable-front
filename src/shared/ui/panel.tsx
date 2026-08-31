import type { ReactNode } from "react";

type PanelProps = {
  title: string;
  linkLabel?: string;
  children: ReactNode;
  className?: string;
};

/** Унифицированная нейтральная панель с заголовком для плотных портальных блоков. */
export function Panel({ title, linkLabel, children, className }: PanelProps) {
  return (
    <section className={`bg-panel overflow-hidden rounded-sm border ${className ?? ""}`}>
      <header className="border-line-soft flex items-center gap-2 border-b px-4 py-3">
        <h2 className="text-ink-soft text-xs font-semibold tracking-wider uppercase">{title}</h2>
        {linkLabel ? (
          <a className="text-brand ml-auto text-xs font-medium hover:underline" href="#">
            {linkLabel}
          </a>
        ) : null}
      </header>
      {children}
    </section>
  );
}
