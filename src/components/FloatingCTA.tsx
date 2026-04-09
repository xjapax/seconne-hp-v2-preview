'use client';

import { useState, useEffect } from 'react';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

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
        href="https://docs.google.com/forms/d/e/1FAIpQLSeLaskWE1NJaClZsN2A_0vGpDQvTrSrVGtxqhgUQYz84ayRPw/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 hidden rounded-full bg-cta px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:bg-cta-dark hover:shadow-2xl md:block"
      >
        無料相談を予約する
      </a>

      {/* Mobile: bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white p-3 md:hidden">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeLaskWE1NJaClZsN2A_0vGpDQvTrSrVGtxqhgUQYz84ayRPw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-lg bg-cta py-3.5 text-center text-base font-semibold text-white"
        >
          無料相談を予約する（30分・売り込みなし）
        </a>
      </div>
    </>
  );
}
