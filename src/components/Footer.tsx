import Link from 'next/link';
import Image from 'next/image';

const footerNav = [
  { label: 'サービス', href: '/#service' },
  { label: 'セコネの強み', href: '/advantage' },
  { label: '導入事例', href: '/interview' },
  { label: '会社情報', href: '/company' },
  { label: 'プライバシーポリシー', href: '/privacy' },
  { label: '利用規約', href: '/terms' },
];

const externalLinks = [
  { label: 'Zenn（技術記事）', href: 'https://zenn.dev/shotakada' },
  { label: 'セコネキャリア（転職相談）', href: 'https://seconne-career.com/lp/' },
  { label: 'Udemy（教育コンテンツ）', href: 'https://www.udemy.com/course/it-tenshoku/?referralCode=EE7103487C8B5D304C70' },
  { label: 'YouTube', href: 'https://www.youtube.com/@tenshokutakada' },
  { label: 'X', href: 'https://x.com/tenshokutakada' },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 pb-16 text-gray-300 md:pb-0">
      <div className="container-wide mx-auto px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Company info */}
          <div>
            <Image
              src="/seconne-logo.svg"
              alt="セコネ"
              width={120}
              height={30}
              className="mb-4 h-7 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              株式会社セコネ
              <br />
              東京都中央区日本橋室町1-11-12
              <br />
              日本橋水野ビル7階
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">ナビゲーション</h3>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External & Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">関連リンク</h3>
            <ul className="mb-6 space-y-2">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="mb-4 text-center text-sm text-gray-400">
            転職相談はこちら →{' '}
            <a
              href="https://seconne-career.com/lp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 underline underline-offset-2 hover:text-white"
            >
              セコネキャリア
            </a>
          </p>
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} 株式会社セコネ All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
