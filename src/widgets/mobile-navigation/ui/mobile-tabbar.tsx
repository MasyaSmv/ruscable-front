import { Grid2X2, Home, Search, UserRound, Wrench } from "lucide-react";
import Link from "next/link";
import type { MobileSheetName } from "../model/types";

type MobileTabbarProps = {
  activeSheet: MobileSheetName | null;
  onOpen: (sheet: MobileSheetName, trigger: HTMLButtonElement) => void;
};

const buttonClass = "flex flex-col items-center gap-1 py-2 text-xs font-semibold";

/** Нижняя панель с пятью постоянными мобильными точками входа. */
export function MobileTabbar({ activeSheet, onOpen }: MobileTabbarProps) {
  return (
    <nav
      aria-label="Мобильная навигация"
      className="bg-panel/95 fixed inset-x-0 bottom-0 z-40 border-t pb-[env(safe-area-inset-bottom)] backdrop-blur-lg lg:hidden"
    >
      <div className="grid grid-cols-5">
        <Link className={`${buttonClass} text-brand`} href="/">
          <Home aria-hidden="true" className="size-5" />
          Главная
        </Link>
        <button
          aria-expanded={activeSheet === "sections"}
          className={`${buttonClass} ${activeSheet === "sections" ? "text-brand" : "text-ink-faint"}`}
          onClick={(event) => onOpen("sections", event.currentTarget)}
          type="button"
        >
          <Grid2X2 aria-hidden="true" className="size-5" />
          Разделы
        </button>
        <a className={`${buttonClass} text-ink-faint`} href="/search">
          <Search aria-hidden="true" className="size-5" />
          Поиск
        </a>
        <button
          aria-expanded={activeSheet === "services"}
          className={`${buttonClass} ${activeSheet === "services" ? "text-brand" : "text-ink-faint"}`}
          onClick={(event) => onOpen("services", event.currentTarget)}
          type="button"
        >
          <Wrench aria-hidden="true" className="size-5" />
          Сервисы
        </button>
        <button
          aria-expanded={activeSheet === "account"}
          className={`${buttonClass} ${activeSheet === "account" ? "text-brand" : "text-ink-faint"}`}
          onClick={(event) => onOpen("account", event.currentTarget)}
          type="button"
        >
          <UserRound aria-hidden="true" className="size-5" />
          Кабинет
        </button>
      </div>
    </nav>
  );
}
