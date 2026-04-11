import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '無料相談のお申し込み',
  description: 'セコネへのお問い合わせ・無料相談のお申し込みはこちら。セキュリティ人材の採用でお悩みなら、まずは30分の無料相談から。',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
