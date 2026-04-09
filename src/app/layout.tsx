import './globals.css';
import Script from 'next/script';
import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';

const GA_ID = 'G-WVPMRH50EC';

export const metadata: Metadata = {
  title: {
    default: 'セコネ｜セキュリティ人材の採用を、業界経験者が変える',
    template: '%s｜セコネ',
  },
  description:
    'セキュリティ実務経験者による採用コンサルティング。スカウト返信率10%超の実績で、脆弱性診断・SOC・セキュリティコンサル人材の採用を支援します。',
  openGraph: {
    title: 'セコネ｜セキュリティ人材の採用を、業界経験者が変える',
    description:
      'セキュリティ実務経験者による採用コンサルティング。スカウト返信率10%超の実績。',
    url: 'https://seconne.co.jp',
    siteName: 'セコネ',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: 'https://seconne.co.jp/og-image.png',
        width: 1200,
        height: 630,
        alt: 'セコネ｜セキュリティ人材 採用コンサルティング',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'セコネ｜セキュリティ人材の採用を、業界経験者が変える',
    description:
      'セキュリティ実務経験者による採用コンサルティング。スカウト返信率10%超の実績。',
    images: ['https://seconne.co.jp/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
