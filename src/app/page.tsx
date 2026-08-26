import { siteConfig } from "@/shared/config/site";

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-6 px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-balance">{siteConfig.name}</h1>
      <p className="text-muted-foreground text-lg leading-relaxed">{siteConfig.description}</p>
      <p className="text-muted-foreground text-sm">
        Проект в разработке. Каталог, карточка товара и подбор по параметрам появятся здесь.
      </p>
    </main>
  );
}
