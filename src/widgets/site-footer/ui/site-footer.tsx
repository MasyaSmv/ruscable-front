const columns = [
  { title: "О портале", links: ["Команда", "Реклама", "Контакты", "Вакансии"] },
  { title: "Медиахолдинг", links: ["Инсайдер", "Кабель.ФМ", "Переменка", "Видик"] },
  {
    title: "Партнёры",
    links: ["Ассоциация «Электрокабель»", "Алюминиевая Ассоциация", "РНК СИГРЭ"],
  },
] as const;

/** Общий информационный футер портала с адаптивной сеткой ссылок. */
export function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-footer-muted mt-4 py-8 text-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-7 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-on-brand mb-2 text-xs font-semibold tracking-wider uppercase">
              RusCable.Ru
            </h2>
            <p>
              Первое отраслевое электронное СМИ. Энергетика, электротехника, связь.
              <br />
              ЭЛ № ФС77-70160, с 1999 года.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-on-brand mb-2 text-xs font-semibold tracking-wider uppercase">
                {column.title}
              </h2>
              <ul className="space-y-1">
                {column.links.map((link) => (
                  <li key={link}>
                    <a className="hover:text-on-brand" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="border-footer-line mt-6 border-t pt-4 text-xs">© RusCable.Ru, 1999–2026</p>
      </div>
    </footer>
  );
}
