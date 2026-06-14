# EDEN 求人ページ・LINE相談導線 実装メモ

作業日: 2026-06-14

## 状態

- 対象サイト: CLUB EDEN 公式サイト
- 作業ブランチ: `main`
- 本番反映: 実施済み
- commit/push: これから実施

## 実装内容

### 求人ページ

- `recruit.html` を新規追加
- 求人漫画を主役にした求人ページを作成
- 初めての人でも問い合わせしやすいよう、安心感のある見出しと説明文を追加
- 体験入店、未経験歓迎、日払いOK、自由シフト、無料送迎を整理して表示
- 求人条件として `体験入店 3,500円〜5,000円` と `日給25,000円〜` を掲載

### 画像

- `assets/images/kyujin.png` を `assets/images/kyujin.webp` に変換
- `assets/images/line-qr.png` を `assets/images/line-qr.webp` に変換
- 求人ページでは WebP 優先、PNG フォールバックの `picture` 構成に変更

### LINE相談導線

- LINE ID `reohana302` を求人ページとトップページの求人枠に追加
- 「LINEでお気軽に相談してください」という文言を追加
- QRコード画像を求人ページ下部に配置し、すぐ友だち追加できる導線に整理
- LINE相談のボタンを追加し、電話だけでなくLINEでも問い合わせできる構成に変更

### 既存ページ調整

- `index.html` の RECRUIT 導線を求人ページへ変更
- トップの求人枠に求人ページへのリンク、LINE ID 表示、漫画バナーを追加
- `sitemap.xml` に `recruit.html` を追加

### デザイン

- 既存サイトの黒、深紫、ゴールドの世界観を維持
- 求人ページは漫画を大きく見せつつ、説明・条件・連絡手段の順で読みやすく構成
- スマホでも横スクロールが出ないようレイアウトを調整

## 確認済み

- `git diff --check` OK
- HTML の参照切れなし
- ブラウザで PC / スマホ幅を確認済み
- 求人ページへの遷移確認済み
- WebP 画像の読み込み確認済み
- 本番デプロイ済み

## 変更ファイル

- `recruit.html`
- `index.html`
- `assets/css/style.css`
- `assets/images/kyujin.webp`
- `assets/images/line-qr.webp`
- `sitemap.xml`

## 補足

- `assets/images/kyujin.png` と `assets/images/line-qr.png` はフォールバックとして残している
- 本番反映は `./scripts/deploy.sh` 経由で実施済み
