'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'サービス', href: '/#service' },
  { label: 'セコネの強み', href: '/advantage' },
  { label: '導入事例', href: '/interview' },
  { label: '会社情報', href: '/company' },
  { label: 'コラム', href: '/blog' },
];

const consultingNavItems = [
  { label: '採用コンサルティング', href: '/advantage' },
  { label: 'セコネキャリア（転職相談）', href: 'https://seconne-career.com/lp/', external: true },
];

const externalLinks = [
  { label: 'Zenn（技術記事）', href: 'https://zenn.dev/shotakada' },
  { label: 'セコネキャリア（転職相談）', href: 'https://seconne-career.com/lp/' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isConsulting = pathname?.startsWith('/consulting') ?? false;
  const currentNavItems = isConsulting ? consultingNavItems : navItems;
  const tagline = isConsulting ? 'セキュリティコンサルティング' : '法人向け 採用コンサルティング';
  const ctaHref = isConsulting ? '/consulting/apply' : '/contact';
  const ctaLabel = isConsulting ? 'お申込み・ご相談' : '無料相談';

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="container-wide mx-auto flex h-12 items-center justify-between px-5 md:h-20 md:px-8">
        {/* Logo + Tagline */}
        <Link href="/" onClick={handleLogoClick} className="flex flex-shrink-0 items-center gap-3">
          <Image
            src="/seconne-logo.svg"
            alt="セコネ"
            width={140}
            height={36}
            className="h-8 w-auto md:h-9"
          />
          <span className="hidden text-sm text-gray-400 sm:inline">{tagline}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {currentNavItems.map((item) => {
            const isExternal = 'external' in item && item.external;
            return isExternal ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href={ctaHref}
            className={`rounded-lg px-6 py-3 text-base font-semibold text-white transition-colors ${isConsulting ? 'bg-coral hover:bg-coral-dark' : 'bg-cta hover:bg-cta-dark'}`}
          >
            {ctaLabel}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label="メニュー"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-gray-700 transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-700 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-700 transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <nav className="container-wide mx-auto px-5 py-4">
            {currentNavItems.map((item) => {
              const isExternal = 'external' in item && item.external;
              return isExternal ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-base font-medium text-gray-700"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-base font-medium text-gray-700"
                >
                  {item.label}
                </Link>
              );
            })}
            {!isConsulting && (
              <div className="border-t border-gray-100 pt-3">
                {externalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-sm text-gray-600"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
            <a
              href={ctaHref}
              className={`mt-4 block w-full rounded-lg py-3.5 text-center text-base font-semibold text-white ${isConsulting ? 'bg-coral' : 'bg-cta'}`}
            >
              {isConsulting ? ctaLabel : '無料相談を予約する'}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
