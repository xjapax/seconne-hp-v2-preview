import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'セキュリティコンサルティング利用規約',
  description: 'セコネ セキュリティコンサルティングサービスの利用規約。',
};

export default function ConsultingTermsPage() {
  return (
    <div className="pt-20 md:pt-20">
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold text-teal-900 md:text-3xl">
            セコネ セキュリティコンサルティングサービス 利用規約
          </h1>
          <div className="mt-2 text-sm text-gray-500">
            制定日：2026年4月17日　｜　株式会社セコネ
          </div>

          <div className="mt-8 space-y-8 text-base leading-relaxed text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-teal-900">第1条（適用範囲）</h2>
              <p className="mt-2">
                本規約は、株式会社セコネ（以下「当社」）が提供する「セコネ セキュリティコンサルティングサービス」（以下「本サービス」）の利用について、当社と本サービスの申込者・利用者（以下「お客様」）との間に適用される。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-900">第2条（サービス内容）</h2>
              <p className="mt-2">
                本サービスは、セキュリティ分野の専門家（以下「コンサルタント」）の知見を、お客様に以下のメニューで提供するものとする（料金はすべて税込表示）。
              </p>
              <div className="mt-3 overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-200">
                    <tr><td className="bg-gray-50 px-4 py-2 font-semibold text-teal-900">フォーム回答</td><td className="px-4 py-2">20,000円／1テーマ</td></tr>
                    <tr><td className="bg-gray-50 px-4 py-2 font-semibold text-teal-900">スポット相談 60分</td><td className="px-4 py-2">100,000円／回</td></tr>
                    <tr><td className="bg-gray-50 px-4 py-2 font-semibold text-teal-900">スポット相談 90分</td><td className="px-4 py-2">150,000円／回</td></tr>
                    <tr><td className="bg-gray-50 px-4 py-2 font-semibold text-teal-900">月次アドバイザリー</td><td className="px-4 py-2">300,000円／月（最低3ヶ月契約）</td></tr>
                    <tr><td className="bg-gray-50 px-4 py-2 font-semibold text-teal-900">週次アドバイザリー</td><td className="px-4 py-2">500,000円／月（最低3ヶ月契約）</td></tr>
                    <tr><td className="bg-gray-50 px-4 py-2 font-semibold text-teal-900">プロジェクト支援</td><td className="px-4 py-2">個別見積</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-900">第3条（契約の成立・契約形態）</h2>
              <ol className="mt-2 list-decimal space-y-1 pl-5">
                <li>お客様は本規約に同意の上、当社所定の申込フォームから本サービスを申し込むものとする。</li>
                <li><strong>フォーム回答・スポット相談（60分・90分）</strong>は、当社が申込内容を確認し、お客様宛てに料金案内・振込先通知を行った時点で、<strong>本規約への同意をもって利用契約が成立</strong>する。別途の契約書締結は要しない。</li>
                <li><strong>月次アドバイザリー・週次アドバイザリー・プロジェクト支援</strong>は、当社とお客様との間で<strong>別途の業務委託契約書の締結</strong>をもって契約成立とする。本規約は当該業務委託契約を補完するものとして適用される。</li>
                <li>フォーム回答サービスは、<strong>お客様からの入金確認をもって業務を開始する</strong>。スポット相談は実施日時を個別に合意するものとする。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-900">第4条（料金の支払い）</h2>
              <ol className="mt-2 list-decimal space-y-1 pl-5">
                <li>料金は、当社が指定する銀行口座への振込払いとする。振込手数料はお客様の負担とする。</li>
                <li>原則として、業務開始前の事前入金とする。</li>
                <li>請求書は当社所定の書式で発行する。</li>
                <li>特急対応（1週間以内の納品）を希望する場合、料金は通常の1.5倍とする（アドバイザリーを除く）。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-900">第5条（納期・提供方法）</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li><strong>フォーム回答：</strong>入金確認後、原則<strong>2営業日以内</strong>に文書（PDFまたはメール本文）で回答を納品する。</li>
                <li><strong>スポット相談：</strong>お客様と個別に合意した日時にオンライン会議（Teams／Zoom等）で実施する。</li>
                <li><strong>アドバイザリー：</strong>個別の契約条件に従う。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-900">第6条（秘密保持）</h2>
              <ol className="mt-2 list-decimal space-y-1 pl-5">
                <li>当社およびお客様は、本サービスに関連して知り得た相手方の秘密情報を、第三者に開示・漏洩してはならない。本条に基づく秘密保持義務は、本サービスの利用終了後3年間存続する。</li>
                <li>当社は、コンサルタントに対して<strong>匿名化した情報のみ</strong>を共有し、お客様の企業名・個人情報は事前の同意なく開示しない。</li>
                <li>当社は、コンサルタントに対しても当社と同等の秘密保持義務を課すものとする。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-900">第7条（回答内容の扱い）</h2>
              <ol className="mt-2 list-decimal space-y-1 pl-5">
                <li>本サービスで提供される回答は、コンサルタントの知見・経験に基づく<strong>参考情報</strong>であり、特定の事実・結果・成果を保証するものではない。</li>
                <li>お客様が回答内容に基づいて行う意思決定および実施について、当社およびコンサルタントは一切の責任を負わない。</li>
                <li>回答内容の著作権は当社に帰属し、お客様はお客様の社内における業務利用に限り使用できる。第三者への転載・提供・再配布は禁止する。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-900">第8条（禁止事項）</h2>
              <p className="mt-2">お客様は、以下の行為を行わないものとする。</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5">
                <li>本サービスで得た情報を第三者に転売・転用すること</li>
                <li>当社の承諾なく、コンサルタントと直接交渉または契約を行うこと</li>
                <li>法令・公序良俗に反する目的で本サービスを利用すること</li>
                <li>当社または第三者の知的財産権・プライバシーを侵害する行為</li>
                <li>本サービスの運営を妨害する行為</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-900">第9条（コンサルタントへの直接接触の禁止）</h2>
              <p className="mt-2">
                お客様は、本サービスを通じて知り得たコンサルタントと、<strong>当社を介さずに直接取引を行わない</strong>ものとする（お客様が本サービス以前から当該コンサルタントと独立に取引関係を有していた場合を除く）。本条の義務は、本サービスの利用終了後2年間存続する。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-900">第10条（キャンセル・返金）</h2>
              <ol className="mt-2 list-decimal space-y-1 pl-5">
                <li><strong>フォーム回答：</strong>入金後、当社が業務に着手する前であればキャンセル可能（全額返金）。業務着手後のキャンセルは返金不可。</li>
                <li><strong>スポット相談：</strong>実施日の3営業日前までのキャンセルは無料で日程変更可能。実施日の3営業日前を過ぎたキャンセルは、料金の100%を申し受ける。</li>
                <li><strong>アドバイザリー：</strong>最低契約期間中のキャンセルは、未消化分を含めた契約期間分の料金を申し受ける。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-900">第11条（免責）</h2>
              <ol className="mt-2 list-decimal space-y-1 pl-5">
                <li>当社は、本サービスの提供にあたり善良なる管理者の注意義務をもって対応するが、本サービスの中断・遅延・障害等により生じたお客様の損害について責任を負わない（当社の故意または重過失による場合を除く）。</li>
                <li>当社の損害賠償責任は、当該サービスに係る料金額を上限とする。</li>
                <li>天災地変、戦争、法令の制定・改廃、その他の不可抗力により本サービスの履行が困難となった場合、当社はその履行義務を免れるものとする。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-900">第12条（個人情報の取扱い）</h2>
              <p className="mt-2">
                当社は、お客様から取得した個人情報を、当社
                <Link href="/privacy" className="text-teal-600 underline">プライバシーポリシー</Link>
                に従って適切に取り扱う。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-900">第13条（本規約の変更）</h2>
              <p className="mt-2">
                当社は、必要に応じて本規約を変更できるものとし、変更後の規約は当社ウェブサイトに掲載した時点から効力を発するものとする。お客様は、変更後に本サービスを利用することで、変更後の規約に同意したものとみなす。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-900">第14条（準拠法・管轄）</h2>
              <p className="mt-2">
                本規約の準拠法は日本法とし、本サービスに関する紛争は、東京地方裁判所を第一審の専属的合意管轄裁判所とする。
              </p>
            </section>

            <section className="border-t border-gray-200 pt-6 text-sm text-gray-600">
              <p className="font-semibold text-teal-900">株式会社セコネ</p>
              <p className="mt-1">〒103-0022 東京都中央区日本橋室町1-11-12 日本橋水野ビル7階</p>
              <p>代表取締役 高田 祥</p>
              <p>メール：info@seconne.co.jp</p>
              <p>Web：https://seconne.co.jp</p>
            </section>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 text-base font-medium text-teal-600 hover:underline"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              セキュリティコンサルティングのお申込みに戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
