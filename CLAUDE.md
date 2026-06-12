# CLAUDE.md

## このリポジトリの目的

CLUB EDEN 公式サイト(https://clubeden-okayama.com/)のソース管理・デプロイ用リポジトリ。
ローカル(~/webproject/eden_website)で編集し、GitHub(https://github.com/newname55/eden.git)で管理、
Xserver の `/home/kubokuboben/clubeden-okayama.com/public_html/` に rsync でデプロイする。

## 店舗情報

| 項目 | 内容 |
|---|---|
| 店名 | CLUB EDEN / エデン |
| 業種 | セクシーキャバクラ |
| 所在地 | 岡山市北区柳町周辺 |
| 営業時間 | 19:00〜LAST |
| セット料金 | 5,000円 |
| 指名料 | 1,000円 |
| 公式ドメイン | clubeden-okayama.com |

## デプロイ手順

```bash
./scripts/deploy.sh
```

- 確認プロンプトで `EDEN` と入力すると実行される。それ以外の入力ではキャンセル。
- `rsync -avz --delete` を使用するため、**リポジトリに存在しないファイルは本番から削除される**。
- 除外対象: `.git/` `.DS_Store` `scripts/` `.env` `.gitignore` `.claude/` `README.md` `CLAUDE.md`
- デプロイ先: `eden-deploy:/home/kubokuboben/clubeden-okayama.com/public_html/`(SSH Host は ~/.ssh/config で定義)

## 作業時の注意点

- **本番 public_html を直接編集しない。** SSH(eden-site)で本番に入って書き換えることは禁止。すべての変更はこのリポジトリで行う。
- **本番反映は必ず `./scripts/deploy.sh` 経由。** 手動 rsync や FTP での反映はしない。
- public_html のファイルを手動で削除しない。削除が必要な場合もリポジトリから削除して deploy.sh で同期する。
- デプロイは明示的に依頼されたときのみ実行する。勝手に本番反映しない。
- `git push` は commit 内容を確認してから行う。
- `--delete` 付き rsync のため、デプロイ前に `git status` と作業ツリーの内容を必ず確認する。
