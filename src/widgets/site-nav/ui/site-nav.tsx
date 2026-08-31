import { mainNavigation } from "@/shared/config/navigation";

/** Основная десктопная навигация, полностью заменяемая таб-баром на мобильных. */
export function SiteNav() {
  return (
    <nav
      aria-label="Основная навигация"
      className="border-brand bg-panel sticky top-0 z-30 hidden border-b-2 lg:block"
    >
      <div className="mx-auto flex max-w-7xl px-4">
        {mainNavigation.map((item, index) => (
          <a
            aria-current={index === 0 ? "page" : undefined}
            className={
              index === 0
                ? "bg-brand text-primary-foreground rounded-t-sm px-3 py-2.5 text-sm font-semibold"
                : "hover:bg-line-soft rounded-t-sm px-3 py-2.5 text-sm font-semibold"
            }
            href="#"
            key={item}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
