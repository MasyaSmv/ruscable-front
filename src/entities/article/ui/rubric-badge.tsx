import { cn } from "@/lib/utils";

type RubricBadgeProps = {
  title: string;
  premium?: boolean;
};

/** Семантически выделяет рубрику, резервируя оранжевый только для премиум-материалов. */
export function RubricBadge({ title, premium = false }: RubricBadgeProps) {
  return (
    <span
      className={cn(
        "text-primary-foreground w-fit rounded-xs px-2 py-1 text-xs font-bold tracking-wide uppercase",
        premium ? "bg-rubric" : "bg-brand",
      )}
    >
      {title}
    </span>
  );
}
