import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Sora } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { GlobalUX } from '@/components/global-ux';
import { PageLoader } from '@/components/page-loader';
import { StructuredData } from '@/components/structured-data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const display = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const SITE_URL = 'https://tushargangurde.dev';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Tushar Gangurde — Associate Software Engineer',
    template: '%s · Tushar Gangurde',
  },
  description:
    'Associate Software Engineer at BNP Paribas. Building scalable software, solving complex problems, and transforming ideas into intuitive digital experiences.',
  keywords: [
    'Tushar Gangurde',
    'Software Engineer',
    'BNP Paribas',
    'React',
    'Angular',
    'Node.js',
    'LeetCode',
    'System Design',
    'Portfolio',
  ],
  authors: [{ name: 'Tushar Gangurde' }],
  creator: 'Tushar Gangurde',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Tushar Gangurde — Associate Software Engineer',
    description:
      'Building scalable software, solving complex problems, and transforming ideas into intuitive digital experiences.',
    siteName: 'Tushar Gangurde',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Tushar Gangurde — Associate Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tushar Gangurde — Associate Software Engineer',
    description:
      'Building scalable software, solving complex problems, and transforming ideas into intuitive digital experiences.',
    creator: '@tushu282002',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f0f2f8' },
    { media: '(prefers-color-scheme: dark)', color: '#080c18' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} ${display.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StructuredData />
          <PageLoader />
          <GlobalUX>{children}</GlobalUX>
        </ThemeProvider>
      </body>
    </html>
  );
}
