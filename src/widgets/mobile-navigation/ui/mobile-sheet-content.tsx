import type { Rubric } from "@/entities/rubric/model/types";
import { holdingProjects, mainNavigation, services } from "@/shared/config/navigation";

import type { MobileSheetName } from "../model/types";

type MobileSheetContentProps = {
  sheet: MobileSheetName;
  rubrics: Rubric[];
};

function LinkList({ links }: { links: readonly string[] }) {
  return (
    <div>
      {links.map((link) => (
        <a
          className="border-line-soft flex items-center justify-between border-t px-5 py-3 text-base font-semibold"
          href="#"
          key={link}
        >
          {link}
          <span aria-hidden="true" className="text-ink-faint">
            ›
          </span>
        </a>
      ))}
    </div>
  );
}

function SheetHeading({ children }: { children: string }) {
  return (
    <h2 className="text-ink-faint px-5 py-3 text-xs font-semibold tracking-wider uppercase">
      {children}
    </h2>
  );
}

/** Выбирает серверно подготовленное содержимое для активной вкладки шторки. */
export function MobileSheetContent({ sheet, rubrics }: MobileSheetContentProps) {
  if (sheet === "sections") {
    return (
      <>
        <SheetHeading>Разделы портала</SheetHeading>
        <LinkList
          links={mainNavigation.filter((item) => item !== "Объявления" && item !== "Сервисы")}
        />
        <SheetHeading>Рубрики новостей</SheetHeading>
        <div className="flex flex-wrap gap-2 px-5 pb-4">
          {rubrics.map((rubric) => (
            <a
              className="bg-line-soft text-ink-soft rounded-full px-3 py-2 text-sm"
              href="#"
              key={rubric.slug}
            >
              {rubric.title}
            </a>
          ))}
        </div>
      </>
    );
  }

  if (sheet === "services") {
    return (
      <>
        <SheetHeading>Сервисы</SheetHeading>
        <LinkList links={services.map(({ title, description }) => `${title} — ${description}`)} />
        <SheetHeading>Проекты холдинга</SheetHeading>
        <div className="flex flex-wrap gap-2 px-5 pb-4">
          {holdingProjects.map((project) => (
            <a
              className="bg-line-soft text-ink-soft rounded-full px-3 py-2 text-sm"
              href="#"
              key={project}
            >
              {project}
            </a>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <SheetHeading>Кабинет</SheetHeading>
      <div className="grid grid-cols-2 gap-2 px-5 pb-4">
        <a
          className="bg-brand text-primary-foreground rounded-sm px-4 py-3 text-center font-semibold"
          href="#"
        >
          Войти
        </a>
        <a
          className="border-brand text-brand rounded-sm border px-4 py-3 text-center font-semibold"
          href="#"
        >
          Регистрация
        </a>
      </div>
      <LinkList links={["Мои подписки", "Закладки", "Мои объявления", "Настройки рассылок"]} />
    </>
  );
}
