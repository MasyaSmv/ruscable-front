import type { Company } from "@/entities/company/model/types";
import { formatDecimal } from "@/shared/lib/format";
import { Panel } from "@/shared/ui/panel";

/** Компактный рейтинг производителей с устойчивыми табличными цифрами. */
export function CompanyRating({ companies }: { companies: Company[] }) {
  return (
    <Panel linkLabel="Рейтинг" title="Топ производителей">
      <ol>
        {companies.map((company) => (
          <li
            className="border-line-soft flex items-center gap-3 border-t px-4 py-2 first:border-t-0"
            key={company.slug}
          >
            <span className="text-ink-faint w-4 text-xs tabular-nums">{company.rank}</span>
            <span>
              <strong className="block text-sm">{company.name}</strong>
              <span className="text-ink-faint text-xs">Россия, {company.city}</span>
            </span>
            <strong className="text-quote-up ml-auto text-sm tabular-nums">
              {formatDecimal(company.score)}
            </strong>
          </li>
        ))}
      </ol>
    </Panel>
  );
}
