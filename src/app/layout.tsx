import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Preloader from "@/components/Preloader";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ghost = Inter({ subsets: ["latin"], weight: "800", variable: "--font-ghost" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  metadataBase: new URL("https://korekodes-portfolio.netlify.app"),
  title: `${site.name} — ${site.role}`,
  description: site.intro,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${fraunces.variable} ${mono.variable} ${ghost.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!sessionStorage.getItem('preloaded')&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.dataset.loading='1'}catch(e){}",
          }}
        />
      </head>
      <body>
        <Preloader />
        <noscript>
          <style>{".reveal,.rise,.timeline-line,.dot{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
