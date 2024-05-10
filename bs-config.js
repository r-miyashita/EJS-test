module.exports = {
    // 監視対象のファイル
    "files": [
        "dist/assets/**/*.css",
        "dist/assets/**/*.js",
        "dist/assets/img/**/*",
        "dist/**/index.html",
    ],
    // プロジェクトのカレントディレクトリをルートディレクトリに設定
    "server": "dist",
    // プロキシを使用しない
    "proxy": false,
    // ポート番号を4000に設定
    "port": 8000,
    // コマンド実行後にブラウザを自動で開かない
    "open": "local",
};