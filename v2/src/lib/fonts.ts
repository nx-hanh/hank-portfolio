import { Inter, JetBrains_Mono, Bungee } from 'next/font/google';
import localFont from 'next/font/local';

export const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  fallback: ['system-ui', 'arial'],
});

export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  fallback: ['system-ui', 'arial'],
});

export const fontBungeeOutline = localFont({
  src: '../fonts/BungeeOutline-Regular.otf',
});

export const fontBungee = Bungee({
  subsets: ['latin'],
  variable: '--font-bungee',
  fallback: ['system-ui', 'arial'],
  weight: '400',
});

export const fonts = [fontSans.variable, fontMono.variable];
