# 実装メモ: WebP化 / 夜コムバナー追加 / Heroの金線修正

作業日: 2026-06-12

## 概要

- Hero(PC/タブレット)で、キャラクター画像にかかっていた金色の装飾線を短縮
- 主要画像(hero / hall / yorucom_bn)をWebPに変換し、`<picture>` + 元画像フォールバックで配信
- Recruitセクションに「夜コム」掲載ページへのリンクバナーを追加

## 変更内容

### 1. Heroの金色装飾線をタブレットで短縮

- `assets/css/style.css` の `.hero__content::before`
- `width: min(560px, 78vw)` → `width: min(560px, 40vw)`
- 768px以上では常に78vw側が560pxにクランプされ、実質固定560pxになっていたため、
  タブレット幅でキャラクター画像にかかっていた。40vwに変更してタブレットで縮小し、
  デスクトップ(560px側でクランプ)は変更なし。

### 2. 画像のWebP化

- `cwebp` で以下を変換(元ファイルは保持し `<picture>` でフォールバック):
  - `assets/images/hero.jpg` (423KB) → `assets/images/hero.webp` (125KB)
  - `assets/images/hall.jpg` (284KB) → `assets/images/hall.webp` (44KB)
  - `assets/images/yorucom_bn.png` (1.7MB) → `assets/images/yorucom_bn.webp` (127KB)
- `index.html` の該当 `<img>` を `<picture><source type="image/webp">...<img>...</picture>` に変更
  - Hero PC画像 (`.hero__image`)
  - Hero モバイル背景画像 (`.hero__mobile-portrait img`)
  - Gallery 画像 (`hall.jpg`)
  - Recruit 新規バナー (`yorucom_bn`)
- `assets/css/style.css` に `picture { display: contents; }` を追加し、
  既存の `img` のサイズ指定(width/height/object-fit)に影響しないようにした
- `og-image.jpg`(OGP/Twitterカード用)はSNSクローラーの互換性を優先し対象外

### 3. 夜コムバナーをRecruitセクションに追加

- `assets/images/yorucom_bn.png` を新規配置(WebP版と併用)
- `index.html` の `.recruit__cta` の直後にリンクバナーを追加
  - `<a href="https://www.yorucom.com/mshop/63157392/" class="recruit__banner" target="_blank" rel="noopener noreferrer">`
  - `target="_blank"` + `rel="noopener noreferrer"` で外部サイトへ
- `assets/css/style.css` に `.recruit__banner` を追加
  - サイト共通のゴールド罫線(`var(--color-border)`)で囲み、ホバー時に
    わずかに浮き上がる(`translateY(-2px)`)+ 罫線を強調(`var(--color-border-strong)`)

## 変更ファイル

- `index.html`
- `assets/css/style.css`
- `assets/images/hero.webp` (新規)
- `assets/images/hall.webp` (新規)
- `assets/images/yorucom_bn.png` (新規)
- `assets/images/yorucom_bn.webp` (新規)

## 確認済み

- `bash -n scripts/deploy.sh`
- `git diff --check`
- `git status --short`
