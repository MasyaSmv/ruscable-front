import { holdingProjects } from "@/shared/config/navigation";

/** Десктопная полоса быстрых ссылок на проекты медиахолдинга. */
export function TopLinks() {
  return (
    <div className="bg-brand-dark text-footer-muted hidden text-xs lg:block">
      <div className="mx-auto flex h-8 max-w-7xl items-center gap-4 px-4">
        {holdingProjects.map((project) => (
          <a className="hover:text-on-brand whitespace-nowrap" href="#" key={project}>
            {project}
          </a>
        ))}
        <a className="hover:text-on-brand ml-auto" href="#">
          Войти
        </a>
        <a className="hover:text-on-brand" href="#">
          Регистрация
        </a>
      </div>
    </div>
  );
}
