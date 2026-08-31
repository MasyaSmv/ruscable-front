import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { quotes } from "@/entities/quote/fixtures/quotes";

import { MarketPanel } from "./market-panel";

describe("MarketPanel", () => {
  it("показывает реальные котировки и направление изменения", () => {
    render(<MarketPanel quotes={quotes} />);

    const copperRow = screen.getByRole("row", { name: /Медь/ });
    const leadRow = screen.getByRole("row", { name: /Свинец/ });

    expect(within(copperRow).getByText("9 842,5")).toBeInTheDocument();
    expect(within(copperRow).getByText("+1,24%")).toHaveClass("text-quote-up");
    expect(within(leadRow).getByText("−0,61%")).toHaveClass("text-quote-down");
  });
});
