import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'セコネの強み',
  description: 'セコネの強み。セキュリティ採用コンサルティング、スポットコンサルティング、AI活用支援。',
};

const comparisonData = [
  {
    category: 'セキュリティ業界知識',
    direct: '自社次第',
    agent: '△',
    rpo: '△',
    seconne: '◎',
  },
  {
    category: '候補者心理の理解',
    direct: '自社次第',
    agent: '○',
    rpo: '△',
    seconne: '◎',
  },
  {
    category: 'スカウト手法',
    direct: '自社で実施',
    agent: '紹介のみ',
    rpo: '量重視',
    seconne: 'ピンポイント1to1',
  },
  {
    category: '採用戦略設計',
    direct: '自社で実施',
    agent: '—',
    rpo: '○',
    seconne: '◎（セキュリティ特化）',
  },
  {
    category: 'カジュアル面談対応',
    direct: '自社で実施',
    agent: '—',
    rpo: '代行のみ',
    seconne: '同席・グリップまで',
  },
  {
    category: '面接支援・研修',
    direct: '—',
    agent: '—',
    rpo: '一部あり',
    seconne: '◎',
  },
  {
    category: 'ノウハウの蓄積',
    direct: '—',
    agent: '残りにくい',
    rpo: '残りにくい',
    seconne: '社内に蓄積',
  },
  {
    category: '料金体系',
    direct: '工数のみ',
    agent: '成功報酬型',
    rpo: '月額固定',
    seconne: '月額固定',
  },
  {
    category: 'セキュリティ専門相談',
    direct: '—',
    agent: '—',
    rpo: '—',
    seconne: '◎（スポットコンサル）',
  },
  {
    category: 'AI活用支援',
    direct: '—',
    agent: '—',
    rpo: '—',
    seconne: '◎',
  },
  {
    category: '研修（単体受講）',
    direct: '—',
    agent: '—',
    rpo: '—',
    seconne: '◎',
  },
];

export default function AdvantagePage() {
  return (
    <div className="pt-20 md:pt-20">
      {/* Hero */}
      <section className="bg-navy-950 px-5 py-16 md:px-8 md:py-24">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">セコネの強み</h1>
          <p className="mt-4 text-lg text-gray-400">Advantage</p>
        </div>
      </section>

      {/* Key message */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <div className="md:flex md:items-center md:gap-12">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <Image
                src="/company/AdobeStock_477398955.jpeg"
                alt="セキュリティ人材採用"
                width={600}
                height={400}
                className="rounded-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="section-title">
                スカウト媒体内に
                <br />
                即戦力はわずか<span className="text-accent">約1%</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                スカウト媒体の登録者数百万人中、
                セキュリティ即戦力のターゲットはわずか数百名。
                セキュリティ求人倍率は42.6倍（IT全体の約4倍）。
              </p>
              <p className="mt-3 text-base leading-relaxed text-gray-600 md:text-lg">
                この1%にアプローチするには、
                セキュリティの現場を知り、
                候補者心理を理解した専門家による
                精密なアプローチが不可欠です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seconne's approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow mx-auto">
          <h2 className="section-title text-center">セコネのアプローチ</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy-900">セキュリティ特化</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                セキュリティの実務経験者が対応。
                技術要件をそのまま理解し、
                候補者に「自分の経歴を理解してくれている」と
                感じてもらえるスカウトを作成します。
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy-900">ピンポイント1to1</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                経歴を一人ひとり精読し、
                ピンポイントでスカウト。
                返信率は平均10%超、
                案件によっては30%を超えることもあります。
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy-900">戦略から実行まで一貫</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                採用戦略の設計から、
                スカウト・面接支援・研修まで一貫対応。
                ノウハウを社内に蓄積し、
                採用力そのものを高めます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <h2 className="section-title text-center">セコネと他サービスの比較</h2>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-gray-200 px-4 py-4 text-left text-sm font-semibold text-gray-400">
                    比較項目
                  </th>
                  <th className="border-b-2 border-gray-200 px-4 py-4 text-center text-sm font-semibold text-gray-400">
                    ダイレクト
                    <br />
                    リクルーティング
                  </th>
                  <th className="border-b-2 border-gray-200 px-4 py-4 text-center text-sm font-semibold text-gray-400">
                    人材紹介
                  </th>
                  <th className="border-b-2 border-gray-200 px-4 py-4 text-center text-sm font-semibold text-gray-400">
                    RPO
                  </th>
                  <th className="border-b-2 border-accent bg-accent/5 px-4 py-4 text-center text-sm font-bold text-accent">
                    セコネ
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.category}>
                    <td className="border-b border-gray-100 px-4 py-4 text-base font-medium text-navy-900">
                      {row.category}
                    </td>
                    <td className="border-b border-gray-100 px-4 py-4 text-center text-sm text-gray-500">
                      {row.direct}
                    </td>
                    <td className="border-b border-gray-100 px-4 py-4 text-center text-sm text-gray-500">
                      {row.agent}
                    </td>
                    <td className="border-b border-gray-100 px-4 py-4 text-center text-sm text-gray-500">
                      {row.rpo}
                    </td>
                    <td className="border-b border-gray-100 bg-accent/5 px-4 py-4 text-center text-sm font-semibold text-accent">
                      {row.seconne}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* EXPERTISE 詳細版 */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow mx-auto">
          <h2 className="section-title text-center">セキュリティの専門性を、採用以外にも</h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-gray-600 md:text-lg">
            セコネの強みは、採用コンサルティングだけではありません。
            セキュリティの現場経験、個人情報保護の専門資格、
            採用支援で培った企業課題への理解を活かし、
            以下のサービスも提供しています。
          </p>

          <div className="mt-12 space-y-8">
            {/* スポットコンサル - 左画像 */}
            <div id="spot-consulting" className="scroll-mt-24 overflow-hidden rounded-2xl border border-gray-100 bg-white md:flex">
              <div className="relative h-56 w-full flex-shrink-0 md:h-auto md:w-80">
                <Image src="/company/AdobeStock_214466664.jpeg" alt="スポットコンサルティング" fill className="object-cover" />
              </div>
              <div className="p-8 md:p-10">
              <h3 className="text-xl font-bold text-navy-900 md:text-2xl">セキュリティ スポットコンサルティング</h3>
              <p className="mt-1 text-base text-accent">必要な時だけ、現場を知る専門家に聞ける</p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                AI検索で出る情報は、もう誰でも手に入ります。
                セコネがお届けするのは、ネットには載らない「今まさに現場にいる専門家の生の声」です。
              </p>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                弊社がハブとなり、代表が直接目利きした領域ごとのスペシャリストを
                複数コンサルタントとして抱えています。
                ご相談内容に応じて最適な専門家をアサインします。
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-400">こんな場面で使われています</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2 text-base text-gray-700"><span className="mt-1 text-accent">&#8226;</span>他社のセキュリティ体制を知りたい（競合比較、CISO向け報告の根拠）</li>
                  <li className="flex items-start gap-2 text-base text-gray-700"><span className="mt-1 text-accent">&#8226;</span>ベンダー提案を受けたが、第三者に妥当性を評価してほしい</li>
                  <li className="flex items-start gap-2 text-base text-gray-700"><span className="mt-1 text-accent">&#8226;</span>ISMS/SOC2取得に向けて、何から手をつけるべきか相談したい</li>
                </ul>
              </div>
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-400">相談の流れ</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-4">
                  {['① ヒアリング（課題の整理・専門家の選定）', '② 専門家マッチング（領域に応じてアサイン）', '③ レポート納品 or オンライン相談', '④ フォローアップ（追加質問対応）'].map((step) => (
                    <div key={step} className="rounded-lg bg-gray-50 p-3 text-sm text-gray-700">{step}</div>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-400">対応形式：レポート納品 / オンライン相談 / 月次アドバイザリー</p>
              </div>
            </div>

            {/* AI活用支援 - 右画像 */}
            <div id="ai-support" className="scroll-mt-24 overflow-hidden rounded-2xl border border-gray-100 bg-white md:flex md:flex-row-reverse">
              <div className="relative h-56 w-full flex-shrink-0 md:h-auto md:w-80">
                <Image src="/company/AdobeStock_625979046.jpeg" alt="AI活用支援" fill className="object-cover" />
              </div>
              <div className="p-8 md:p-10">
              <h3 className="text-xl font-bold text-navy-900 md:text-2xl">採用業務の適切なAI活用支援</h3>
              <p className="mt-1 text-base text-accent">個人情報のスペシャリストが、安全な導入を設計する</p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                「AIにどこまで入力して良いか分からない」「怖いから使えない」──
                採用においてもAIは適切に活用すべきです。
              </p>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                弊社はセキュリティ×採用×個人情報のスペシャリストとして、
                AIエージェント（Claude Code等）を日常業務で活用しつつ
                個人情報管理も徹底しています。
                その手法をあますことなく教え、
                貴社の状況に適したAIエージェント導入を支援しています。
              </p>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                「ChatGPTの使い方を教えます」で終わるコンサルではありません。
                <strong className="text-navy-900">情報処理安全確保支援士</strong>・
                <strong className="text-navy-900">上級個人情報保護士</strong>・
                <strong className="text-navy-900">個人情報保護監査人</strong>の資格を持ち、
                「何をどこまでAIに入れていいか」のラインを引いたうえで、
                最大限に活用する方法を設計できます。
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-400">導入ステップ</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-4">
                  {['① AI活用診断（90分）── 現状把握とリスク評価', '② 利用ルール策定 ── 個人情報の取り扱い基準を整備', '③ 研修（半日）── 実践型ワークショップ、プロンプト演習付き', '④ 月次フォロー ── 新ツール情報共有、運用定着支援'].map((step) => (
                    <div key={step} className="rounded-lg bg-gray-50 p-3 text-sm text-gray-700">{step}</div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-400">こんな場面で使われています</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2 text-base text-gray-700"><span className="mt-1 text-accent">&#8226;</span>採用チームにAIを導入したいが、個人情報の扱いが不安</li>
                  <li className="flex items-start gap-2 text-base text-gray-700"><span className="mt-1 text-accent">&#8226;</span>ChatGPTやCopilotを使っているが、ルールが未整備</li>
                  <li className="flex items-start gap-2 text-base text-gray-700"><span className="mt-1 text-accent">&#8226;</span>AIエージェント（Claude Code等）を業務に本格導入したい</li>
                  <li className="flex items-start gap-2 text-base text-gray-700"><span className="mt-1 text-accent">&#8226;</span>経営層からAI活用推進を指示されたが、現場が動けていない</li>
                </ul>
              </div>
              </div>
            </div>

            {/* 研修 - 左画像 */}
            <div id="training" className="scroll-mt-24 overflow-hidden rounded-2xl border border-gray-100 bg-white md:flex">
              <div className="relative h-56 w-full flex-shrink-0 md:h-auto md:w-80">
                <Image src="/company/AdobeStock_567289259.jpeg" alt="研修プログラム" fill className="object-cover" />
              </div>
              <div className="p-8 md:p-10">
              <h3 className="text-xl font-bold text-navy-900 md:text-2xl">セキュリティ採用力を底上げする研修</h3>
              <p className="mt-1 text-base text-accent">単発受講OK。コンサル契約なしでもご利用いただけます</p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                セキュリティ人材の採用には、人事・面接官にも最低限の専門知識が必要です。
                「セキュリティって何をする人？」から始まる採用では、候補者に見透かされます。
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-gray-50 p-5">
                  <h4 className="text-lg font-bold text-navy-900">人事向け｜セキュリティ基礎知識研修</h4>
                  <p className="mt-2 text-base text-gray-600">セキュリティの職種体系・スキルマップ・市場動向を半日で理解。「要件定義がエージェントに伝わらない」を解消します。</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-5">
                  <h4 className="text-lg font-bold text-navy-900">面接官向け｜実践型面接研修</h4>
                  <p className="mt-2 text-base text-gray-600">セキュリティ人材を正しく評価するための質問設計と見極めポイント。技術がわからなくても、候補者の実力を判断できるようになります。</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-5">
                  <h4 className="text-lg font-bold text-navy-900">AI活用研修</h4>
                  <p className="mt-2 text-base text-gray-600">採用業務でAIを安全に使うための実践型ワークショップ。プロンプト演習付き。助成金（人材開発支援助成金）の対象になる場合があります。</p>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeLaskWE1NJaClZsN2A_0vGpDQvTrSrVGtxqhgUQYz84ayRPw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              無料相談を予約する
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 px-5 py-16 md:px-8 md:py-20">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            セコネの強みを直接お話しします
          </h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeLaskWE1NJaClZsN2A_0vGpDQvTrSrVGtxqhgUQYz84ayRPw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            無料相談を予約する
          </a>
        </div>
      </section>
    </div>
  );
}
