## 🐝 EJS-Sassで静的サイト制作
タスクランナーでホットリロードしながら作業できる環境を模索。
EJS-Sassの連携は　「 FLOCSS 」　を基に考える。

### [ 構成 ]

開発管理： src</br>
コンパイル先(成果物)： dist</br>
タスクランナー: npm scripts</br>

<pre>

.
├── package.json .................npm script でタスクを動かす。
│
├── dist
│   ├── assets
│   │   ├── css
│   │   │   └── style.css
│   │   ├── img
│   │   └── js
│   │       └── main.js
│   ├── index.html
│   └── products
│       └── index.html
│
└── src
    ├── ejs
    │   ├── include ................FLOCSS の { layout, object }くらいの粒度。Sass側と対応しやすいように。
    │   │   ├── l-footer.ejs
    │   │   ├── l-header.ejs
    │   │   └── p-index.ejs
    │   ├── products ...............多階層の場合はページ名でディレクトリを切る 
    │   │   └── index.ejs
    │   └── index.ejs
    ├── img
    ├── js
    │   ├── data.json ...............ビルド時にejs側で参照するデータ。
    │   ├── main.js .................クラス付与するなどブラウザで動かすメインファイル
  　　　　│   └── data.js .................参照用のJSON作成用のファイル。node.jsでファイル取得などしながらデータ作る。
    └── sass
        ├── foundation
        │   ├── _app.scss
        │   └── _variable.scss
        ├── layout
        │   ├── _app.scss
        │   ├── _footer.scss　..........EJSの 「　include/l-*.ejs　」 と対応
        │   └── _header.scss　..........EJSの 「　include/l-*.ejs 」 と対応
        ├── lib
        ├── object
        │   ├── component
        │   ├── project
        │   │   ├── _app.scss
        │   │   └── _index.scss　........EJSの 「　include/p-*.ejs　」 と対応
        │   └── utility
        └── style.scss .................各階層のファイルを「 _app 」でまとめているのでそれを読み込む。
  
</pre>
