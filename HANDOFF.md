# EDEN LP 実装引き継ぎメモ

作業日: 2026-06-12

## 状態

- 対象サイト: CLUB EDEN 公式LP
- 作業ブランチ: `main`
- 本番反映: 未実施
- デプロイ: 未実行
- commit/push: このメモ作成後に実施予定

## 実装内容

### LP本体

- `index.html` を新規LPとして整備
- 黒、深紫、ゴールドを基調にした高級感のある構成へ変更
- Heroをほぼ全画面表示に近づけ、左側にコピー、CTA、店舗概要を配置
- PC表示では右側に `assets/images/hero.jpg` のキャラクター画像を大きく表示
- スマホ表示では `hero.jpg` を背景的に使い、ロゴ、コピー、CTAを半透明の黒紫フレームに重ねる構成へ調整
- 18歳未満入店不可表記をHeroとFooterに配置

### デザイン

- 角丸カード中心ではなく、細いゴールド罫線、装飾枠、コーナー装飾を追加
- Hero背景に深紫、黒、ゴールドの光、薔薇、ボケ感、シャンデリア風の光をCSSで演出
- セクション間に紫系グラデーションと薄い光を追加
- SPでは縦に単調にならないよう、Heroの画像とテキストを重ねる見せ方へ調整

### 画像

- `assets/images/hero.jpg`
  - Hero右側/背景用画像
  - PCでは右側に大きく表示
  - SPでは全面背景として使用し、暗めのグラデーションで文字視認性を確保

- `assets/images/og-image.jpg`
  - `reference/brand_sample2.png` を参考に作成
  - サイズ: `1200 x 630`
  - OGP/Twitterカードで参照

### SEO / 構造化データ

- `title` / `description` をEDEN公式LP向けに調整
- OGP / Twitter Card を設定
- JSON-LD `NightClub` を更新
- `robots.txt` / `sitemap.xml` を追加

### 店舗情報反映

夜コム掲載情報を参考に以下を反映。

- 店名: `CLUB EDEN(クラブ エデン) / EDEN 〜エデン〜`
- 住所: `岡山県岡山市北区柳町1-9-7`
- 営業時間: `19:00〜LAST`
- 定休日: `毎週月曜日`
- 店舗TEL: `086-223-5788`
- 料金: セット `5,000円`
- 指名料: `1,000円`
- 本指名料: `1,000円`
- 総収容人数: `16人`
- 団体予約: 可能

## 求人情報反映

夜コム掲載情報を参考に以下を反映。

- 体験入店歓迎
- 未経験歓迎
- 時給 `3,500円〜5,000円`
- 日払いOK
- 自由シフト
- 無料送迎
- 求人TEL: `090-8124-5834`
- 日給保証目安: `25,000円〜`

## TODO / 未確定

- 待合、団体予約、総収容人数などを公式LPとして掲載してよいか最終確認
- 寮、託児所、交通費支給など求人詳細条件は店舗側で最終確認
- 夜コム由来の情報は今後変更される可能性があるため、公開前に再確認推奨

## 参考データ

`reference/` をGit管理対象として残す方針。

- `reference/LP.png`
- `reference/brand_sample.jpg`
- `reference/brand_sample2.png`
- `reference/エデンロゴ.pdf`

注意: 現在の `scripts/deploy.sh` は `reference/` や `HANDOFF.md` を除外していない。将来デプロイ時に公開したくない場合は、デプロイ前に除外方針を決めること。

## 確認済み

- PC Hero表示
- SP Hero表示
- `assets/images/hero.jpg` 読み込み
- `assets/images/og-image.jpg` 参照
- 横スクロールなし
- Browser console error/warn なし
- `git diff --check` OK

## 変更ファイル

- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- `assets/images/hero.jpg`
- `assets/images/og-image.jpg`
- `robots.txt`
- `sitemap.xml`
- `reference/`
- `AGENTS.md`
- `HANDOFF.md`

## デプロイ手順

今回は未実行。

実行する場合は、事前に公開対象を確認してから以下を実行する。

```bash
./scripts/deploy.sh
```

確認プロンプトで `EDEN` と入力すると本番反映される。
