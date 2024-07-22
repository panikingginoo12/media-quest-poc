import type { Metadata } from 'next';
import './globals.scss';

import Footer from '@/components/footer';
import ThemeSwitcherButton from '@/components/theme-switcher-button';
import { cn } from '@/lib/utils';
import { roboto } from '@/utils/fonts';

import { ThemeProvider } from './ThemeProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          roboto.className,
          'bg-light-000 text-dark-main antialiased'
        )}
      >
        <ThemeProvider>
          <div className="flex h-dvh flex-col">
            <header>
              <ThemeSwitcherButton />
            </header>
            <main className="flex-1 bg-light-000 p-4">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
