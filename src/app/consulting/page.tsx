import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'セキュリティコンサルティング',
  description: '現場のセキュリティプロに、必要な時だけ。セコネが内容を精査し、案件ごとに最適な専門家を紐付けます。フォーム回答¥20,000から、スポット相談・月次/週次アドバイザリーまで柔軟に対応。',
};

const pains = [
  {
    title: '規程・ポリシー／ISMS・SOC2の整備で、実運用に即した助言が欲しい',
    desc: '認証取得や委託先管理で、教科書的な書き方ではなく現場の運用実態を知る人に相談したい。',
  },
  {
    title: '急成長フェーズで、セキュリティ体制が事業スピードに追いついていない',
    desc: '顧客情報・機密情報の取扱量が急増。現体制で本当に大丈夫か、外部の目で判断してほしい。',
  },
  {
    title: '脆弱性診断・SOC・EDRなどを導入したいが、どこに依頼すべきか・何をやるべきか判断しきれない',
    desc: '実際に運用してきた視点で、依頼先選びと取り組む範囲を整理したい。',
  },
  {
    title: 'ベンダー提案・製品選定の妥当性を、現場を知る第三者に評価してほしい',
    desc: '営業トークでは分からない実運用負荷・サポート品質を、使った経験のある人に聞きたい。',
  },
  {
    title: '経営層・CISOに「他社はどうしている」を根拠付きで報告したい',
    desc: '稟議・取締役会の説明資料に、ネットでは出てこない他社の実態を添えたい。',
  },
];

const services = [
  {
    title: 'フォーム回答',
    tier: 'ENTRY',
    price: '¥20,000',
    unit: '/ 1テーマ',
    desc: '1テーマ（最大800字程度）を文書回答。入金確認後2営業日以内。セコネのレビュー付き。',
    target: '「ちょっと聞きたい」レベル。コストを抑えて他社事例を1問だけ確認したい方。',
    featured: false,
  },
  {
    title: 'スポット相談 60分',
    tier: 'SPOT',
    price: '¥100,000',
    unit: '/ 回',
    desc: 'オンラインでセコネが対応。深掘り・壁打ち向け。',
    target: '意思決定前の助言、経営層への説明材料、ベンダー提案の第三者評価。',
    featured: false,
  },
  {
    title: 'スポット相談 90分',
    tier: 'SPOT',
    price: '¥150,000',
    unit: '/ 回',
    desc: 'オンラインでセコネが対応。複数の論点を1回でまとめて相談したい場合に。',
    target: '複数の論点を一度に整理したい、複数ステークホルダー同席の場で意思決定したい。',
    featured: false,
  },
  {
    title: '月次アドバイザリー',
    tier: 'ADVISORY',
    price: '¥300,000',
    unit: '/ 月〜',
    desc: '月1回定例＋チャット相談（2営業日以内返信）。案件ごとに担当コンサルを割り当てて継続支援。最低3ヶ月契約。',
    target: '継続的な相談相手が欲しい、セキュリティ方針の定期レビュー、規程整備の伴走。',
    featured: true,
  },
  {
    title: '週次アドバイザリー',
    tier: 'ADVISORY',
    price: '¥500,000',
    unit: '/ 月〜',
    desc: '月4回定例＋チャット相談(1営業日以内返信)。案件ごとに担当コンサルを割り当てて継続支援。最低3ヶ月契約。',
    target: '急拡大期・IPO準備で体制を作りたい、週次定例で戦略〜実行まで伴走してほしい。',
    featured: false,
  },
  {
    title: 'プロジェクト支援',
    tier: 'PROJECT',
    price: '個別見積',
    unit: '',
    desc: 'CSIRT構築支援、セキュリティ規程整備、ベンダー選定伴走など。',
    target: '特定プロジェクトにセコネ専門チームを紐付けたい。',
    featured: false,
  },
];

const advisoryValues = [
  { title: '継続関係で即答', desc: '貴社の事情を理解した状態で即回答。毎回ゼロから説明不要。' },
  { title: 'チャット相談 無制限', desc: '「ちょっと聞きたい」をMTGを待たずに即解決。セコネが即日一次対応。' },
  { title: '優先対応・枠確保', desc: '緊急の相談でもスポットより先に日程・枠を確保。' },
  { title: '第三者レビュー付き', desc: '規程・ベンダー提案・セキュリティ各種判断をセコネ専門チームでクロスチェック。' },
];

const themes = [
  'ISMS / SOC2 / Pマーク 取得方針',
  'セキュリティ規程・ポリシー策定',
  '立ち上げ期セキュリティ戦略（何から手をつけるか）',
  'ベンダー選定・製品評価（SIEM・EDR等）',
  '脆弱性診断の依頼先選定・運用設計',
  '他社SOC運用の比較・自社体制の整理',
  'セキュリティ人材の要件定義・採用連携',
  'AI活用におけるセキュリティ設計',
  '領域選定（自社が強みを出せる領域はどこか）',
  'CNAPP 導入・運用方針',
  'ASM（Attack Surface Management）導入・運用方針',
  'CTEM（Continuous Threat Exposure Management）導入・運用方針',
];

const scenarios = [
  {
    label: 'Case A',
    title: 'セキュリティ部門の立ち上げ期、何から手をつけるべきか',
    profile: '想定：セキュリティ部門立ち上げ中の事業会社',
    situation: '全社の優先順位が見えない。ASM・CTEM・脆弱性診断等の導入順序、体制構築のロードマップを整理したい。',
    recommendation: 'スポット相談60分 ¥100,000 または 月次アドバイザリー ¥300,000/月',
    output: '立ち上げ期のロードマップとクイックウィンをご提示。人材採用の論点はセコネの採用コンサルとも連携可能。',
  },
  {
    label: 'Case B',
    title: '脆弱性診断サービスを自社で立ち上げたい',
    profile: '想定：SIer・セキュリティベンダー',
    situation: '診断メニューを新規事業として立ち上げたいが、人材・機材・価格設定・他社サービスとの差別化が不明。',
    recommendation: '月次アドバイザリー ¥300,000/月（最低3ヶ月）',
    output: '診断サービス運営の経験を踏まえて立ち上げ戦略を伴走。人材要件定義はセコネの採用コンサルと連携。',
  },
  {
    label: 'Case C',
    title: 'セキュリティ規程・ポリシー整備で、実運用に合う形に固めたい',
    profile: '想定：成長フェーズの事業会社・SaaS',
    situation: '既存の規程が形骸化・過剰で、現場運用と乖離している。他社の規程例・運用の実態を踏まえて自社仕様に落とし込みたい。',
    recommendation: '月次アドバイザリー ¥300,000/月（最低3ヶ月）または スポット相談 ¥150,000（90分）',
    output: 'ISMS・SOC2取得経験のある専門家が、規程骨子・運用フロー・証跡設計までを伴走整備。IPO準備やISMS取得への移行も視野。',
  },
];

const steps = [
  { num: '01', title: '申込フォーム', desc: 'ご希望のサービスと相談内容を入力' },
  { num: '02', title: '料金案内メール', desc: '2営業日以内に料金・振込先を連絡' },
  { num: '03', title: 'ご入金', desc: '銀行振込でお支払い（振込手数料はお客様負担）' },
  { num: '04', title: '業務開始', desc: '入金確認後、セコネが対応開始（必要時に専門コンサルを紐付け）' },
  { num: '05', title: '納品・実施', desc: 'フォーム回答は2営業日以内、相談は個別日程で実施' },
];

const faqs = [
  {
    q: '一般的なスポットコンサルサービスとの違いは？',
    a: 'セコネはセキュリティ領域に特化した専門家集団です。一般的なスポットコンサルは全業界のアドバイザーをオープンに検索・マッチングする仕組みですが、セキュリティ領域は現職の守秘義務・競業避止義務の壁が厚く、現場のトップ層はほとんど登録していません。セコネは代表が17年のセキュリティ人材の転職支援、および専門カンファレンス・業界イベントでの交流を通じて築いた独自のネットワークから、案件ごとに最適な専門家を個別招聘します。専門家とお客様の間はセコネが必ず窓口として介在します。',
  },
  {
    q: '契約書は締結しますか？',
    a: 'フォーム回答・スポット相談は利用規約への同意をもって契約成立とし、別途の契約書締結は不要です。月次・週次アドバイザリー、プロジェクト支援は別途業務委託契約書を締結します。',
  },
  {
    q: '秘密保持はどうなっていますか？',
    a: 'セコネはコンサルタントに対して匿名化した情報のみを共有し、お客様の企業名・個人情報は事前の同意なく開示しません。コンサルタントにも同等の秘密保持義務を課しています。',
  },
  {
    q: '専門家の実名・所属企業は開示されますか？',
    a: '経歴・資格・専門領域はお伝えしますが、実名・現職企業名は原則非開示で運用しています。セキュリティ領域の専門家は現職の守秘義務・競業避止義務への配慮が不可欠なため、匿名運用を前提に招聘しており、これがセコネに他サービスでは確保できないトップ層が集まる理由です。身元・経歴・資格はセコネ代表（情報処理安全確保支援士・上級個人情報保護士）が事前確認し、品質を保証します。ご相談内容により、専門家本人の同意のもと実名開示する場合もあります。',
  },
  {
    q: 'キャンセル・返金はできますか？',
    a: 'フォーム回答は入金後、業務着手前であれば全額返金可能です。スポット相談は実施日の3営業日前までのキャンセルは無料で日程変更可能、以降は料金の100%を申し受けます。アドバイザリーは最低契約期間中のキャンセル不可です。',
  },
  {
    q: 'オンライン相談の録画はできますか？',
    a: '弊社で録画し、要点をまとめた議事録と一緒に後日納品します（AI議事録ツールを活用）。お客様側での録画は原則お控えください。録画・議事録は社内共有用途のみ、第三者への公開・転載は規約により禁止しています。研修・アドバイザリーも同じ運用です。',
  },
  {
    q: 'どのような企業が対象ですか？',
    a: 'セキュリティに関する意思決定・体制構築を検討されている事業会社・SaaS企業・SIer・セキュリティベンダーを主な対象としています。従業員規模は問いません。',
  },
  {
    q: '「インシデント対応してほしい」は対応範囲ですか？',
    a: 'インシデント発生時の現地対応・フォレンジック・24/365対応は含みません。事前のインシデント対応方針の整理、事後レビュー、CSIRT構築支援等はプロジェクト支援で個別見積もりにてご相談ください。',
  },
];

export default function ConsultingPage() {
  return (
    <div className="pt-20 md:pt-20">
      {/* Hero */}
      <section className="bg-teal-950 px-5 py-20 md:px-8 md:py-28 lg:py-32">
        <div className="container-narrow mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-coral md:text-sm">
            SECURITY CONSULTING — セコネ
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white md:mt-8 md:text-7xl lg:text-8xl">
            必要な時だけ、
            <br />
            現場のセキュリティプロに聞ける。
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-300 md:mt-12 md:text-lg">
            セコネが内容を精査し、案件ごとに最適な専門家を紐付けます。<br className="hidden md:block" />
            スポット相談から継続アドバイザリーまで柔軟に対応します。
          </p>

          {/* KPI */}
          <div className="mt-14 grid max-w-4xl gap-8 md:mt-20 md:grid-cols-3 md:gap-10">
            <div className="border-t-2 border-coral pt-5">
              <p className="text-3xl font-bold tabular-nums text-white md:text-4xl lg:text-5xl">¥20,000〜</p>
              <p className="mt-3 text-xs text-gray-400 md:text-sm">1テーマ・フォーム回答から</p>
            </div>
            <div className="border-t-2 border-coral pt-5">
              <p className="text-3xl font-bold tabular-nums text-white md:text-4xl lg:text-5xl">2営業日</p>
              <p className="mt-3 text-xs text-gray-400 md:text-sm">入金確認後の納期目安</p>
            </div>
            <div className="border-t-2 border-coral pt-5">
              <p className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">セキュリティ特化</p>
              <p className="mt-3 text-xs text-gray-400 md:text-sm">代表自ら審査の専門家集団</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-start gap-3 md:mt-16">
            <Link href="/consulting/apply" className="inline-flex items-center justify-center rounded-lg bg-coral px-6 py-3 font-semibold text-white transition-colors hover:bg-coral-dark inline-flex px-8 py-4 text-base md:text-lg">
              お申込み・ご相談フォームへ →
            </Link>
            <p className="text-xs text-gray-400">※利用規約同意ベース。振込後2営業日以内に対応開始</p>
          </div>
        </div>
      </section>

      {/* 課題セクション */}
      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="container-narrow mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-teal-600 md:text-sm">
            02 / PAIN POINTS
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-teal-900 md:text-4xl">
            こんな状況ではありませんか？
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            AI検索で出てくる情報は、もう誰でも手に入ります。セコネがお届けするのは、ネットには載らない「今まさに現場にいる専門家の生の声」です。
          </p>
          <ol className="mt-12 divide-y divide-gray-200 border-t border-gray-200 md:mt-16">
            {pains.map((p, i) => (
              <li key={p.title} className="flex gap-6 py-6 md:gap-12 md:py-8">
                <span className="flex-shrink-0 font-light tabular-nums text-gray-300 text-3xl md:text-5xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-teal-900 md:text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 解決アプローチ（セキュリティ特化） */}
      <section className="bg-gray-50 px-5 py-20 md:px-8 md:py-28">
        <div className="container-narrow mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-teal-600 md:text-sm">
            03 / APPROACH
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-teal-900 md:text-4xl">
            セキュリティ特化の専門家集団
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            一般的なスポットコンサルは全業界のコンサルタントから個別に選ぶ形式。
            セコネは<span className="font-semibold text-teal-900">セキュリティ領域のみ</span>に特化し、
            <span className="font-semibold text-teal-900">代表自らが審査</span>した在籍コンサルタントで構成しています。案件内容に応じて、セコネが最適な専門家を紐付けます。
          </p>

          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
            <div className="border-t-2 border-teal-900 bg-white p-8">
              <p className="text-xs font-semibold tracking-widest text-teal-600">CONSULTANCY</p>
              <div className="mt-4 flex items-start gap-4">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full md:h-24 md:w-24">
                  <Image
                    src="/company/photo.jpg"
                    alt="セコネ代表 高田祥"
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-teal-900">セコネ</h3>
                  <p className="mt-1 text-xs text-gray-500 md:text-sm">代表 高田祥<br />情報処理安全確保支援士 / 上級個人情報保護士 / 個人情報保護監査人</p>
                </div>
              </div>
              <ul className="mt-6 space-y-2 text-sm leading-relaxed text-gray-700">
                <li>・お客様との窓口（契約・日程・相談）</li>
                <li>・案件内容に応じた専門家の紐付け判断</li>
                <li>・回答内容のレビュー・品質保証</li>
                <li>・セキュリティ戦略・立ち上げの相談対応</li>
              </ul>
            </div>
            <div className="border-t-2 border-teal-900 bg-white p-8">
              <p className="text-xs font-semibold tracking-widest text-teal-600">SPECIALISTS</p>
              <h3 className="mt-2 text-xl font-bold text-teal-900">在籍コンサルタント</h3>
              <p className="mt-1 text-sm text-gray-500">CISSP / CISM / CISA / OSCP 保有者 等</p>
              <ul className="mt-6 space-y-2 text-sm leading-relaxed text-gray-700">
                <li>・代表が身元・経歴・資格を事前確認のうえ登録</li>
                <li>・深い専門領域の文書回答（レポート）</li>
                <li>・SOC・CSIRT・ペネトレ・ISMS 等</li>
                <li>・アドバイザリー契約の定例参加（案件により）</li>
              </ul>
            </div>
          </div>

          <p className="mt-10 text-sm text-gray-600">
            ※専門コンサルタントへのご依頼は<span className="font-semibold">匿名化した情報のみ共有</span>。お客様の企業名・個人情報は事前同意なく開示しません。現職守秘義務のある専門家のため、<span className="font-semibold">お客様への開示範囲は案件ごとに調整</span>します。
          </p>
        </div>
      </section>

      {/* WHY SECONNE — 差別化ストーリー */}
      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="container-narrow mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-teal-600 md:text-sm">
            04 / WHY SECONNE
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-teal-900 md:text-4xl">
            他では出会えない、<br className="hidden md:block" />
            現場のセキュリティプロを。
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            セキュリティ領域は、需要に対して供給が圧倒的に少ない分野です。現職の守秘義務・競業避止義務の壁が厚く、<span className="font-semibold text-teal-900">オープンなスポットコンサルには、現場のトップ層はほとんど登録していません</span>。
          </p>

          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
            <div className="border-t-2 border-teal-900 bg-gray-50 p-8">
              <p className="text-xs font-semibold tracking-widest text-teal-600">CHALLENGE</p>
              <h3 className="mt-2 text-lg font-bold text-teal-900 md:text-xl">なぜ、他では見つからないのか</h3>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-gray-700">
                <li>・セキュリティ担当は機密情報の管理を社内でリードする立場。副業・登録自体が利益相反として避けられやすい</li>
                <li>・対策ノウハウ・アーキテクチャ設計がそのまま競争優位性になるため、同業他社支援は強く忌避される</li>
                <li>・金融・通信・情報サービスなどセキュリティ意識の高い業種ほど副業制限が厳格</li>
                <li>・経産省の検討会でも、登録セキスペは依然として不足と指摘（2025年5月 最終取りまとめ）</li>
              </ul>
            </div>
            <div className="border-t-2 border-coral bg-teal-50 p-8">
              <p className="text-xs font-semibold tracking-widest text-coral">OUR APPROACH</p>
              <h3 className="mt-2 text-lg font-bold text-teal-900 md:text-xl">セコネの確保ルート</h3>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-gray-700">
                <li>・代表のセキュリティ人材の<span className="font-semibold">転職支援 17年</span>で築いた人脈</li>
                <li>・<span className="font-semibold">Security Days・Interop Tokyo</span> 等のサイバーセキュリティ関連カンファレンス・業界イベントでの交流</li>
                <li>・既存コンサルタントからの推薦・紹介</li>
                <li>・代表（情報処理安全確保支援士・上級個人情報保護士）が<span className="font-semibold">全員の身元・経歴・資格を事前確認</span>し品質保証</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t-2 border-teal-900 pt-8 md:mt-16">
            <h3 className="text-lg font-bold text-teal-900 md:text-xl">
              匿名運用を前提にすることで、トップ層を確保
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-700 md:text-base">
              ご紹介時、専門家の<span className="font-semibold">経歴・資格・専門領域</span>はお伝えしますが、<span className="font-semibold">実名・現職企業名は原則非開示</span>で運用しています。現職の守秘義務・競業避止義務への配慮を前提にしているため、他サービスには登録していない現場のトップ層にもご対応いただけます。身元・経歴・資格はセコネ代表が事前確認し、品質を保証します。
            </p>
          </div>
        </div>
      </section>

      {/* サービスメニュー */}
      <section id="services" className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="container-narrow mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-teal-600 md:text-sm">
            05 / SERVICE MENU
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-teal-900 md:text-4xl">
            サービスメニュー
          </h2>
          <p className="mt-6 text-sm text-gray-600">
            価格はすべて税込表示。月次・週次は最低3ヶ月契約。
          </p>

          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className={
                  s.featured
                    ? 'border-t-2 border-coral bg-teal-50 p-6 md:p-8'
                    : 'border-t-2 border-teal-900 bg-white p-6 md:p-8'
                }
              >
                <p className={`text-xs font-semibold tracking-widest ${s.featured ? 'text-coral' : 'text-teal-600'}`}>
                  {s.tier}{s.featured ? ' · 推奨' : ''}
                </p>
                <h3 className="mt-2 text-lg font-bold text-teal-900 md:text-xl">{s.title}</h3>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-teal-900 md:text-4xl">{s.price}</span>
                  <span className="text-sm text-gray-600">{s.unit}</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-700">{s.desc}</p>
                <p className="mt-4 border-t border-gray-200 pt-4 text-xs leading-relaxed text-gray-600">
                  <span className="font-semibold">こんな方に：</span>
                  {s.target}
                </p>
              </div>
            ))}
          </div>

          {/* アドバイザリー価値 */}
          <div className="mt-16 border-t-2 border-teal-900 pt-10 md:mt-20">
            <h3 className="text-lg font-bold text-teal-900 md:text-2xl">
              アドバイザリー契約ならではの価値
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              スポットを重ねるだけでは得られない、継続関係ならではの4つ。
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {advisoryValues.map((v) => (
                <div key={v.title}>
                  <p className="text-base font-bold text-teal-900">{v.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 対応テーマ一覧 */}
      <section className="bg-gray-50 px-5 py-20 md:px-8 md:py-28">
        <div className="container-narrow mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-teal-600 md:text-sm">
            06 / THEMES
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-teal-900 md:text-4xl">
            対応可能なテーマ
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            下記以外のテーマもご相談ください。内容を拝見し、最適な専門家を紐付けます。
          </p>
          <ul className="mt-12 grid gap-x-8 gap-y-3 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {themes.map((t, i) => (
              <li key={t} className="flex gap-4 border-t border-gray-200 pt-3 text-sm text-teal-900 md:text-base">
                <span className="flex-shrink-0 tabular-nums text-gray-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-gray-500">
            ※セキュリティ人材の<span className="font-semibold">採用</span>に関するご相談は、セコネの
            <Link href="/advantage" className="mx-1 font-semibold text-teal-600 underline">採用コンサルティング</Link>
            をご検討ください。
          </p>
        </div>
      </section>

      {/* よくある相談シナリオ */}
      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="container-narrow mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-teal-600 md:text-sm">
            07 / SCENARIOS
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-teal-900 md:text-4xl">
            よくある相談シナリオ
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            セキュリティ戦略・立ち上げ・製品選定など、こんな相談によくお応えしています。
          </p>
          <div className="mt-12 divide-y divide-gray-200 border-t border-gray-200 md:mt-16">
            {scenarios.map((s) => (
              <div key={s.label} className="flex flex-col gap-6 py-8 md:flex-row md:gap-12 md:py-12">
                <div className="md:w-40 md:flex-shrink-0">
                  <p className="text-xs font-semibold tracking-widest text-teal-600">
                    {s.label.toUpperCase()}
                  </p>
                  <p className="mt-2 text-xs text-gray-500">{s.profile}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-teal-900 md:text-xl">{s.title}</h3>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700 md:text-base">
                    <p><span className="font-semibold text-teal-900">状況：</span>{s.situation}</p>
                    <p><span className="font-semibold text-teal-900">推奨プラン：</span><span className="text-coral">{s.recommendation}</span></p>
                    <p><span className="font-semibold text-teal-900">提供内容：</span>{s.output}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 利用の流れ */}
      <section className="bg-gray-50 px-5 py-20 md:px-8 md:py-28">
        <div className="container-narrow mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-teal-600 md:text-sm">
            08 / PROCESS
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-teal-900 md:text-4xl">
            ご利用の流れ
          </h2>
          <ol className="mt-12 divide-y divide-gray-200 border-t border-gray-200 md:mt-16">
            {steps.map((s) => (
              <li key={s.num} className="flex gap-6 py-6 md:gap-12 md:py-8">
                <span className="flex-shrink-0 font-light tabular-nums text-gray-300 text-3xl md:text-5xl">
                  {s.num}
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-teal-900 md:text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-sm text-gray-500">
            ※特急対応（1週間以内）は料金1.5倍で承ります（アドバイザリー除く）。
          </p>
        </div>
      </section>

      {/* Contract Structure（派遣法・SES誤認防止） */}
      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="container-narrow mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-teal-600 md:text-sm">
            09 / CONTRACT STRUCTURE
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-teal-900 md:text-4xl">
            契約形態と運用の建付け
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            セコネのサービスは、すべて業務委託・準委任ベース。成果物は「助言・レポート」です。個別の指示命令はセコネを経由し、お客様からコンサル個人への直接指示は行いません。完全リモート、常駐はありません。
          </p>
          <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-12">
            <div className="border-t-2 border-teal-900 pt-6">
              <p className="text-xs font-semibold tracking-widest text-teal-600">CONTRACT</p>
              <h3 className="mt-2 text-lg font-bold text-teal-900 md:text-xl">業務委託・準委任</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                成果物は助言・レポート。人材紹介・派遣ではありません。
              </p>
            </div>
            <div className="border-t-2 border-teal-900 pt-6">
              <p className="text-xs font-semibold tracking-widest text-teal-600">DELIVERY</p>
              <h3 className="mt-2 text-lg font-bold text-teal-900 md:text-xl">完全リモート</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                オンラインMTGとチャット。常駐・オンサイト対応はありません。
              </p>
            </div>
            <div className="border-t-2 border-teal-900 pt-6">
              <p className="text-xs font-semibold tracking-widest text-teal-600">CHAIN OF COMMAND</p>
              <h3 className="mt-2 text-lg font-bold text-teal-900 md:text-xl">指示命令はセコネ経由</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                お客様から専門コンサル個人への直接指示は行いません。
              </p>
            </div>
            <div className="border-t-2 border-teal-900 pt-6">
              <p className="text-xs font-semibold tracking-widest text-teal-600">CONFIDENTIALITY</p>
              <h3 className="mt-2 text-lg font-bold text-teal-900 md:text-xl">匿名化・NDA準拠</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                企業名・個人情報は事前同意なく開示せず、同等の秘密保持義務を専門家にも課します。
              </p>
            </div>
            <div className="border-t-2 border-teal-900 pt-6 md:col-span-2">
              <p className="text-xs font-semibold tracking-widest text-teal-600">EXPERT PRIVACY</p>
              <h3 className="mt-2 text-lg font-bold text-teal-900 md:text-xl">専門家側の守秘義務・現職制約も尊重し、開示範囲を調整</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                専門家の実名・現職企業名は原則非開示で運用します。経歴・資格・専門領域はお伝えし、身元・経歴・資格はセコネ代表が事前確認・品質保証します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="container-narrow mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-teal-600 md:text-sm">
            10 / FAQ
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-teal-900 md:text-4xl">
            よくある質問
          </h2>
          <div className="mt-12 divide-y divide-gray-200 border-t border-gray-200 md:mt-16">
            {faqs.map((f, i) => (
              <details key={f.q} className="group py-6 md:py-8">
                <summary className="flex cursor-pointer items-start gap-6 text-base font-semibold text-teal-900 md:gap-12 md:text-lg">
                  <span className="flex-shrink-0 font-light tabular-nums text-gray-300 text-xl md:text-3xl">
                    Q.{String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 pt-1 md:pt-2">{f.q}</span>
                  <span className="flex-shrink-0 pt-1 text-gray-400 transition-transform group-open:rotate-180 md:pt-2">▼</span>
                </summary>
                <p className="mt-4 flex gap-6 text-sm leading-relaxed text-gray-700 md:gap-12 md:pl-0 md:text-base">
                  <span className="flex-shrink-0 w-12 md:w-20" aria-hidden></span>
                  <span className="flex-1">{f.a}</span>
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* クロージング CTA */}
      <section className="bg-teal-950 px-5 py-20 md:px-8 md:py-28">
        <div className="container-narrow mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-coral md:text-sm">
            11 / GET STARTED
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-5xl">
            ¥20,000 から。
            <br className="hidden md:block" />
            まずは1テーマ、現場の声を。
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            フォーム回答（¥20,000）なら、1テーマから気軽にお試しいただけます。ご相談内容を拝見し、セコネから最適なプランをご提案します。
          </p>
          <div className="mt-10 flex flex-col items-start gap-4">
            <Link href="/consulting/apply" className="inline-flex items-center justify-center rounded-lg bg-coral px-6 py-3 font-semibold text-white transition-colors hover:bg-coral-dark inline-flex px-8 py-4 text-base md:text-lg">
              お申込み・ご相談フォームへ →
            </Link>
            <Link href="/consulting/terms" className="text-sm text-gray-400 underline hover:text-white">
              利用規約を確認する
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
