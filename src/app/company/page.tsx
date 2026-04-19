import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '会社情報',
  description: '株式会社セコネの会社概要・代表紹介。セキュリティ人材の採用に特化したコンサルティング会社です。',
};

const companyInfo = [
  { label: '会社名', value: '株式会社セコネ' },
  { label: '代表者', value: '高田 祥' },
  { label: '設立', value: '2023年11月2日' },
  { label: '所在地', value: '東京都中央区日本橋室町1-11-12 日本橋水野ビル7階' },
  { label: '事業内容', value: 'セキュリティ人材の採用コンサルティング' },
  { label: 'Webサイト', value: 'seconne.co.jp' },
  { label: '適格請求書発行事業者登録番号', value: 'T2010001239873' },
];

const career = [
  { role: 'ソフトバンク株式会社', detail: 'セキュリティエンジニアとして脆弱性診断・SOC運用に従事' },
  { role: '株式会社リクルートテクノロジーズ', detail: 'セキュリティコンサルタントとして社内セキュリティ強化を推進' },
  { role: '両面型転職エージェント', detail: 'IT特化の転職エージェント。数千名のIT人材を支援' },
  { role: '株式会社セコネ 設立', detail: 'セキュリティ人材採用に特化したコンサルティング会社を設立' },
];

export default function CompanyPage() {
  return (
    <div className="pt-20 md:pt-20">
      {/* Hero */}
      <section className="bg-navy-950 px-5 py-16 md:px-8 md:py-24">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">会社情報</h1>
          <p className="mt-4 text-gray-400">Company</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto text-center">
          <h2 className="section-title">ミッション</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            セキュリティ業界の採用課題を解決し、
            <br className="hidden sm:block" />
            企業と人材の双方にとってより良い出会いを支援する。
          </p>
        </div>
      </section>

      {/* About Seconne name */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow mx-auto">
          <div className="md:flex md:items-center md:gap-12">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <Image
                src="/company/message.jpeg"
                alt="セコネについて"
                width={600}
                height={400}
                className="rounded-2xl"
                priority
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="section-title">セコネの名前の由来</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
                「Sec+Conne」「セキュリティ＆コネクション」
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600 md:text-base">
                <li><span className="font-semibold text-navy-900">Connection</span>：結びつき、輪を大切にしたいという思い</li>
                <li><span className="font-semibold text-navy-900">Seconne</span>：フランス語で「2番」セキュリティは常に事業の裏側を支えるもの</li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                というような思いから来ています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <h2 className="section-title text-center">設立の背景</h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
            セキュリティ人材の不足は、もはや業界の常識です。しかし、採用現場では「セキュリティを理解していない人が、セキュリティ人材を探している」という矛盾が起きています。
            エージェントにニーズを伝えても正しく理解されない。スカウトを送っても反応がない。その根本原因は、セキュリティの現場を知らないまま採用活動を行っていることにあります。
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
            代表の高田は、セキュリティエンジニア → 転職エージェントという異色のキャリアを歩んできました。
            「セキュリティの現場を知る人間が、採用を変える」。その確信から、セコネを設立しました。
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
            最後は自社で採用を回せるようになる。そこまでの伴走が、セコネの目指す支援です。
          </p>
        </div>
      </section>

      {/* CEO Profile */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow mx-auto">
          <h2 className="section-title text-center">代表紹介</h2>
          <div className="mt-12 rounded-2xl border border-gray-100 bg-white p-8 md:flex md:gap-10">
            <div className="mb-6 flex flex-shrink-0 justify-center md:mb-0">
              <div className="relative h-48 w-48 overflow-hidden rounded-2xl">
                <Image src="/company/photo.jpg" alt="高田 祥" fill className="object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-3">
                <h3 className="text-2xl font-bold text-navy-900">高田 祥</h3>
                <span className="text-sm text-gray-500">Sho Takada</span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">代表取締役</p>

              <div className="mt-6 space-y-3">
                {career.map((item) => (
                  <div key={item.role}>
                    <p className="text-sm font-medium text-navy-900">{item.role}</p>
                    <p className="text-xs text-gray-500">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['情報処理安全確保支援士', 'CompTIA Security+', '上級個人情報保護士', '個人情報保護監査人'].map((q) => (
                  <span key={q} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600">
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company info table */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <h2 className="section-title text-center">会社概要</h2>
          <div className="mt-10 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full">
              <tbody>
                {companyInfo.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <th className="w-1/4 px-6 py-4 text-left text-sm font-semibold text-navy-900">
                      {row.label}
                    </th>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 px-5 py-16 md:px-8 md:py-20">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">お気軽にご相談ください</h2>
          <a
            href="/contact"
            className="btn-primary mt-8 inline-flex"
          >
            無料相談を予約する
          </a>
        </div>
      </section>
    </div>
  );
}
