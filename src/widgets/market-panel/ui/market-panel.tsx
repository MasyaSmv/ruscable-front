import type { Quote } from "@/entities/quote/model/types";
import { cn } from "@/lib/utils";
import { formatDecimal } from "@/shared/lib/format";
import { Panel } from "@/shared/ui/panel";

/** Таблица котировок LME с семантическим цветом направления изменения. */
export function MarketPanel({ quotes }: { quotes: Quote[] }) {
  return (
    <Panel linkLabel="Графики" title="Котировки LME">
      <table className="w-full text-sm tabular-nums">
        <thead className="text-ink-faint text-xs tracking-wide uppercase">
          <tr>
            <th className="px-4 py-2 text-left font-semibold" scope="col">
              Металл
            </th>
            <th className="px-4 py-2 text-right font-semibold" scope="col">
              USD/т
            </th>
            <th className="px-4 py-2 text-right font-semibold" scope="col">
              Изм.
            </th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr className="border-line-soft border-t" key={quote.metal}>
              <th className="px-4 py-2 text-left font-normal" scope="row">
                {quote.metal}
              </th>
              <td className="px-4 py-2 text-right">{formatDecimal(quote.priceUsd)}</td>
              <td
                className={cn(
                  "px-4 py-2 text-right font-semibold",
                  quote.changePercent >= 0 ? "text-quote-up" : "text-quote-down",
                )}
              >
                {quote.changePercent >= 0 ? "+" : "−"}
                {formatDecimal(Math.abs(quote.changePercent))}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}
