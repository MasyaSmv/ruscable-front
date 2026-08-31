import { Search } from "lucide-react";
import Link from "next/link";

import { ThemeToggle } from "@/features/theme-toggle/ui/theme-toggle";

/** Шапка портала с брендом, позиционированием и адаптивным поиском. */
export function SiteHeader() {
  return (
    <header className="bg-panel border-b">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-5 px-4">
        <Link className="text-xl font-extrabold tracking-tight" href="/">
          RusCable<span className="text-brand">.Ru</span>
        </Link>
        <p className="text-ink-faint hidden border-l pl-4 text-xs leading-snug sm:block">
          Энергетика · Электротехника · Связь
          <br />
          Первое отраслевое электронное СМИ
        </p>
        <form action="/search" className="ml-auto hidden sm:flex" role="search">
          <label className="sr-only" htmlFor="site-search">
            Поиск по порталу
          </label>
          <input
            className="bg-background focus:border-brand w-56 rounded-l-sm border px-3 py-2 text-sm outline-none"
            id="site-search"
            name="query"
            placeholder="Поиск по порталу"
            type="search"
          />
          <button
            className="bg-brand text-primary-foreground rounded-r-sm px-4 text-sm font-semibold"
            type="submit"
          >
            Найти
          </button>
        </form>
        <ThemeToggle />
        <a
          aria-label="Поиск"
          className="text-ink-soft grid size-10 place-items-center rounded-sm border sm:hidden"
          href="/search"
        >
          <Search aria-hidden="true" className="size-5" />
        </a>
      </div>
    </header>
  );
}
