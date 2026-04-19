'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isConsulting = pathname?.startsWith('/consulting') ?? false;

  const ctaHref = isConsulting ? '/consulting/apply' : '/contact';
  const ctaLabelDesktop = isConsulting ? 'お申込み・ご相談' : '無料相談を予約する';
  const ctaLabelMobile = isConsulting ? 'お申込み・ご相談' : '無料相談を予約する（30分・売り込みなし）';

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Desktop: bottom-right button */}
      <a
        href={ctaHref}
        className={`fixed bottom-6 right-6 z-40 hidden rounded-full px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:shadow-2xl md:block ${isConsulting ? 'bg-coral hover:bg-coral-dark' : 'bg-cta hover:bg-cta-dark'}`}
      >
        {ctaLabelDesktop}
      </a>

      {/* Mobile: bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white px-3 py-1.5 md:hidden">
        <a
          href={ctaHref}
          className={`block w-full rounded-lg py-2.5 text-center text-sm font-semibold text-white ${isConsulting ? 'bg-coral' : 'bg-cta'}`}
        >
          {ctaLabelMobile}
        </a>
      </div>
    </>
  );
}
