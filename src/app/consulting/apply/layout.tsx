import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お申込み・ご相談｜セキュリティコンサルティング',
  description: 'セコネ セキュリティコンサルティングのお申込み・ご相談フォーム。フォーム回答¥20,000から、スポット相談・アドバイザリーまで。',
};

export default function ConsultingApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
