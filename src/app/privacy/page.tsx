import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '株式会社セコネのプライバシーポリシー（個人情報保護方針）',
};

export default function PrivacyPage() {
  return (
    <div className="pt-20 md:pt-20">
      <section className="bg-navy-950 px-5 py-16 md:px-8 md:py-24">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">プライバシーポリシー</h1>
          <p className="mt-4 text-gray-400">Privacy Policy</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <article className="prose prose-gray max-w-none prose-headings:text-navy-900 prose-h2:text-xl prose-h2:font-bold prose-h3:text-lg prose-p:text-sm prose-p:leading-relaxed">
            <p>
              株式会社セコネ（以下「当社」といいます）は、個人情報の重要性を認識し、
              個人情報の保護に関する法律および関連法令を遵守し、以下のとおり個人情報の取り扱いに関する方針を定めます。
            </p>

            <h2>1. 個人情報の利用目的</h2>
            <p>当社は、取得した個人情報を以下の目的で利用いたします。</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-600">
              <li>当社サービスの提供・運営のため</li>
              <li>お問い合わせに対する回答のため</li>
              <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
              <li>利用規約に違反した行為への対応のため</li>
              <li>当社サービスの改善・新サービスの開発のため</li>
              <li>上記の利用目的に付随する目的のため</li>
            </ul>

            <h2>2. 個人情報の提供について</h2>
            <p>
              個人情報のご提供は任意です。ただし、必要な情報をいただけない場合は、
              サービスの一部をご利用いただけない場合がございます。
            </p>

            <h2>3. 個人情報の返却・消去について</h2>
            <p>
              お預かりした個人情報は、利用目的の達成後、合理的な期間内に消去いたします。
              ご本人から消去のご依頼があった場合は、合理的な範囲で速やかに対応いたします。
            </p>

            <h2>4. セキュリティについて</h2>
            <p>
              当社Webサイトでは、SSL/TLS暗号化通信を使用し、個人情報の保護に努めています。
            </p>

            <h2>5. Cookieおよびアクセス解析ツールについて</h2>
            <p>
              当社Webサイトでは、利用状況の把握やサービス改善を目的として、
              Cookieおよびアクセス解析ツールを使用する場合があります。
              これらは個人を特定するものではありません。
            </p>

            <h2>6. 第三者への提供</h2>
            <p>
              当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供いたしません。
            </p>

            <h2>7. 個人情報の開示・訂正・削除</h2>
            <p>
              ご本人から個人情報の開示・訂正・削除のご請求があった場合は、
              ご本人であることを確認のうえ、合理的な範囲で速やかに対応いたします。
            </p>

            <h2>8. 個人情報の安全管理</h2>
            <p>
              当社は、個人情報の漏えい、滅失またはき損の防止のため、
              適切な安全管理措置を講じます。
            </p>

            <h2>9. 免責事項</h2>
            <p>
              当社Webサイトからリンクされた第三者のWebサイトにおける個人情報の取り扱いについて、
              当社は一切の責任を負いません。
            </p>

            <h2>10. プライバシーポリシーの変更</h2>
            <p>
              当社は、必要に応じてプライバシーポリシーを変更することがあります。
              変更後のポリシーは、当社Webサイトに掲載した時点で効力を生じます。
            </p>

            <h2>お問い合わせ先</h2>
            <p>
              株式会社セコネ
              <br />
              東京都中央区日本橋室町1-11-12 日本橋水野ビル7階
              <br />
              代表者：高田 祥
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
