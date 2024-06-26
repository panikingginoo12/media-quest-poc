import type { Metadata } from "next";
import './globals.scss';

import { Roboto } from 'next/font/google';

import Footer from '@/components/footer';
import ThemeSwitcherButton from '@/components/theme-switcher-button';
import { cn } from '@/lib/utils';

import { ThemeProvider } from './ThemeProvider';

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(roboto.className, 'bg-light-000 antialiased text-dark-main')}>
        <ThemeProvider>
          <div className="flex flex-col h-dvh">
            <header>
              <ThemeSwitcherButton />

            </header>
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
