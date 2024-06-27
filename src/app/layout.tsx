import type { Metadata } from 'next';
import './globals.scss';

import Footer from '@/components/footer';
import Scoreboard from '@/components/scoreboard';
import ThemeSwitcherButton from '@/components/theme-switcher-button';
import { cn } from '@/lib/utils';
import { roboto } from '@/utils/fonts';

import { ThemeProvider } from './ThemeProvider';

export const metadata: Metadata = {
  title: 'OneSports.PH',
  description: 'Sports is way more than just the final score.',
  icons: {
    icon: '/assets/images/onesports-ph-logo.png',
  },
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
            <div className="flex-1 bg-light-000">
              <div className="mb-4">
                <Scoreboard />
              </div>
              <main>{children}</main>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
