import type { Metadata } from "next";
import Script from "next/script";

import { themeInitializationScript } from "@/features/theme-toggle/model/theme";
import { siteConfig } from "@/shared/config/site";
import { getRubrics } from "@/entities/rubric/api/get-rubrics";
import { MobileNavigation } from "@/widgets/mobile-navigation/ui/mobile-navigation";
import { SiteFooter } from "@/widgets/site-footer/ui/site-footer";
import { SiteHeader } from "@/widgets/site-header/ui/site-header";
import { SiteNav } from "@/widgets/site-nav/ui/site-nav";
import { TopLinks } from "@/widgets/top-links/ui/top-links";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    // Шаблон применяется к title дочерних страниц: SEO-требование проекта.
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: siteConfig.name,
  },
};

/** Корневой серверный каркас, общий для всех будущих маршрутов портала. */
export default async function RootLayout({ children }: LayoutProps<"/">) {
  const rubrics = await getRubrics();

  return (
    <html lang="ru" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col pb-16 lg:pb-0">
        <Script id="color-theme" strategy="beforeInteractive">
          {themeInitializationScript}
        </Script>
        <TopLinks />
        <SiteHeader />
        <SiteNav />
        {children}
        <SiteFooter />
        <MobileNavigation rubrics={rubrics} />
      </body>
    </html>
  );
}
