# 卒業制作 Myariad Notebook 

## 更新履歴

1.  2024/02/24 プロジェクトスタート。下記の Vercel Next.js Supabase Starter Templateを使用。
    - https://vercel.com/templates/next.js/supabase
        -  ログイン・ユーザー認証機能作成済み（Sign Up / Sign in、ページ分けていないので後で分ける）
        - Vercelデプロイ済み
        https://myariad-note.vercel.app/ 

2. 2024/02/25 Global CSS　更新。
    - ライトモード/ダークモード設定（システム依存なのでボタンで変更できるように修正予定）
    - バックグラウンド背景をTailwind CSS の Mesh Gradation で作成

3. 2024/02/26 UIコンポーネントライブラリ、Three.jsライブラリ導入。UI作り込み中
    - UIコンポーネントライブラリはDaisy UIをインストール
        - Shadcn ui はGlobal CSSを書き換えてしまうのでremove (Git Revert済み)
    - React Three Fiber (Three.jsライブラリ)をTypeScriptバージョンで導入 
        - app/three フォルダへ練習用ファイル作成