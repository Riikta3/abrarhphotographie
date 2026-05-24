import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { UIProviders } from "@/components/providers/UIProviders";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Dancing_Script, Lato, Playfair_Display } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Abrar H Photographie | Photographe Seine-et-Marne",
  description:
    "Photographe professionnelle spécialisée en mariages, couples et familles en Île-de-France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='fr'
      suppressHydrationWarning
    >
      <body
        className={`${lato.variable} ${playfair.variable} ${dancingScript.variable} antialiased`}
        suppressHydrationWarning
      >
        <QueryProvider>
          <UIProviders>
            <div className='min-h-screen bg-background'>
              <Navigation />
              <main role='main'>{children}</main>
              <Footer />
              <ScrollToTop />
              <CookieBanner />
            </div>
            <Toaster />
          </UIProviders>
        </QueryProvider>
      </body>
    </html>
  );
}
