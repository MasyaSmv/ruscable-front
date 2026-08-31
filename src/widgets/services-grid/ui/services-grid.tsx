import { services } from "@/shared/config/navigation";
import { Panel } from "@/shared/ui/panel";

/** Навигационная сетка ключевых прикладных сервисов портала. */
export function ServicesGrid() {
  return (
    <Panel linkLabel="Все сервисы" title="Сервисы портала">
      <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3">
        {services.map((service) => (
          <a
            className="hover:border-brand hover:bg-line-soft rounded-sm border p-3"
            href="#"
            key={service.title}
          >
            <strong className="block text-sm">{service.title}</strong>
            <span className="text-ink-faint text-xs">{service.description}</span>
          </a>
        ))}
      </div>
    </Panel>
  );
}
