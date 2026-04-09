import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約',
  description: '株式会社セコネのWebサイト利用規約',
};

export default function TermsPage() {
  return (
    <div className="pt-20 md:pt-20">
      <section className="bg-navy-950 px-5 py-16 md:px-8 md:py-24">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">利用規約</h1>
          <p className="mt-4 text-gray-400">Terms of Service</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <article className="prose prose-gray max-w-none prose-headings:text-navy-900 prose-h2:text-xl prose-h2:font-bold prose-h3:text-lg prose-p:text-sm prose-p:leading-relaxed">
            <p>
              この利用規約（以下「本規約」といいます）は、株式会社セコネ（以下「当社」といいます）が
              提供するWebサイトおよびサービス（以下「本サービス」といいます）の利用条件を定めるものです。
            </p>

            <h2>第1条（適用）</h2>
            <p>
              本規約は、本サービスの利用に関わる一切の関係に適用されるものとします。
            </p>

            <h2>第2条（利用者の責任）</h2>
            <p>
              利用者は、自己の責任において本サービスを利用するものとします。
              本サービスの利用によって生じた損害について、当社は一切の責任を負いません。
            </p>

            <h2>第3条（機密保持）</h2>
            <p>
              当社のサービスを通じて知り得た情報について、利用者は第三者に開示・漏洩しないものとします。
            </p>

            <h2>第4条（個人情報の取り扱い）</h2>
            <p>
              当社は、利用者の個人情報を当社プライバシーポリシーに基づき適切に取り扱います。
            </p>

            <h2>第5条（禁止事項）</h2>
            <p>利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-600">
              <li>法令または公序良俗に反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社のサーバーまたはネットワークの機能を破壊・妨害する行為</li>
              <li>当社のサービスの運営を妨害するおそれのある行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>不正アクセスをし、またはこれを試みる行為</li>
              <li>他のユーザーに成りすます行為</li>
              <li>当社のサービスに関連して、反社会的勢力に対して利益を供与する行為</li>
              <li>当社の著作権、商標権その他の知的財産権を侵害する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>

            <h2>第6条（本サービスの変更・中断・停止）</h2>
            <p>
              当社は、利用者に事前に通知することなく、本サービスの内容を変更し、
              または本サービスの提供を中断・停止することができるものとします。
            </p>

            <h2>第7条（利用規約の変更）</h2>
            <p>
              当社は、必要と判断した場合には、利用者に通知することなく本規約を変更できるものとします。
              変更後の利用規約は、当社Webサイトに掲載された時点から効力を生じるものとします。
            </p>

            <h2>第8条（免責事項）</h2>
            <p>
              当社は、本サービスに事実上または法律上の瑕疵がないことを明示的にも黙示的にも保証しておりません。
              当社は、本サービスに起因して利用者に生じたあらゆる損害について一切の責任を負いません。
            </p>

            <h2>第9条（著作権）</h2>
            <p>
              本サービスおよびWebサイトに掲載されているコンテンツの著作権は、
              当社または正当な権利を有する第三者に帰属します。無断での複製・転載を禁じます。
            </p>

            <h2>第10条（損害賠償）</h2>
            <p>
              利用者が本規約に違反し、当社に損害を与えた場合、利用者は当社に対して損害を賠償するものとします。
            </p>

            <h2>第11条（反社会的勢力の排除）</h2>
            <p>
              利用者は、自己が反社会的勢力に該当しないことを表明し、保証するものとします。
            </p>

            <h2>第12条（管轄裁判所）</h2>
            <p>
              本規約に関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>

            <h2>第13条（準拠法）</h2>
            <p>本規約の解釈にあたっては、日本法を準拠法とします。</p>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="text-xs text-gray-400">
                制定日：2023年11月2日
                <br />
                株式会社セコネ
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
