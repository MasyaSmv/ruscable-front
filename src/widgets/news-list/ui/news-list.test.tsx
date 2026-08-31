import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { articles } from "@/entities/article/fixtures/articles";

import { NewsList } from "./news-list";

describe("NewsList", () => {
  it("показывает переданные реальные материалы и пользовательские метаданные", () => {
    const news = articles.slice(3, 5);

    render(<NewsList articles={news} />);

    expect(screen.getByRole("heading", { name: "Новости отрасли" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: news[0]!.title })).toBeInTheDocument();
    expect(screen.getByText(news[1]!.lead)).toBeInTheDocument();
    expect(screen.getByText("640 просмотров")).toBeInTheDocument();
  });
});
