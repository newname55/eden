# EDEN 公式サイト

CLUB EDEN(岡山・セクシーキャバクラ)の公式サイトのソース管理リポジトリ。

## 基本情報

| 項目 | 内容 |
|---|---|
| 公式ドメイン | https://clubeden-okayama.com/ |
| GitHub | https://github.com/newname55/eden.git |
| 本番公開先 | Xserver `/home/kubokuboben/clubeden-okayama.com/public_html/` |

## SSH Host(~/.ssh/config)

| Host | 用途 |
|---|---|
| `eden-site` | 本番 public_html への直接接続用 |
| `eden-deploy` | rsync デプロイ用 |

## デプロイ方法

本番反映は必ずデプロイスクリプト経由で行う:

```bash
./scripts/deploy.sh
```

- 実行すると `Type EDEN to continue:` と確認を求められる。`EDEN` と入力した場合のみ続行。
- `rsync -avz --delete` でリポジトリの内容を public_html に同期する(リポジトリにないファイルは本番から削除される点に注意)。
- `.git` / `.DS_Store` / `scripts/` / `.env` / `README.md` / `CLAUDE.md` などの運用ファイルは除外され、本番には公開されない。

## 運用方針

1. **本番 public_html を直接編集しない。** 変更は必ずこのリポジトリで行う。
2. 変更の流れ: ローカルで編集 → `git commit` → `git push` → `./scripts/deploy.sh` で本番反映。
3. 本番反映は必ず `./scripts/deploy.sh` 経由(手動 rsync / FTP / サーバー上での直接編集は禁止)。
4. デプロイ前に `git status` がクリーンであることを確認する。
