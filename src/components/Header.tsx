'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { label: 'サービス', href: '/#service' },
  { label: 'セコネの強み', href: '/advantage' },
  { label: '導入事例', href: '/interview' },
  { label: '会社情報', href: '/company' },
];

const externalLinks = [
  { label: 'Zenn（技術記事）', href: 'https://zenn.dev/shotakada' },
  { label: 'セコネキャリア（転職相談）', href: 'https://seconne-career.com/lp/' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="container-wide mx-auto flex h-16 items-center justify-between px-5 md:h-20 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/seconne-logo.svg"
            alt="セコネ"
            width={140}
            height={36}
            className="h-8 w-auto md:h-9"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeLaskWE1NJaClZsN2A_0vGpDQvTrSrVGtxqhgUQYz84ayRPw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cta px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-cta-dark"
          >
            無料相談
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base font-medium text-gray-700"
              >
                {item.label}
              </Link>
            ))}
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
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeLaskWE1NJaClZsN2A_0vGpDQvTrSrVGtxqhgUQYz84ayRPw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full rounded-lg bg-cta py-3.5 text-center text-base font-semibold text-white"
            >
              無料相談を予約する
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
