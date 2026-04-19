import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'セキュリティコンサルティング',
  description: 'セキュリティ分野の専門家による相談サービス。代表が内容を精査し、案件ごとに最適な専門家をアサイン。フォーム回答¥20,000から、スポット相談・月次/週次アドバイザリーまで柔軟に対応。',
};

export default function ConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
