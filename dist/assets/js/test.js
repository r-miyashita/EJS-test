/*================================================== 
    JSONデータ作成
==================================================*/
const fs = require('fs');
const imgFiles = fs.readdirSync('src/img/products');
const imgFilesSorted = imgFiles.sort(fileCompare);
const jsonrcProducts = createJsonrcProducts(imgFilesSorted);
const jsonrcHeaderMenu = ["PRODUCTS", "ABOUT", "COMPANY", "CONTACT"];
const jsonrc = {
    "headerMenu": jsonrcHeaderMenu,
    "products": jsonrcProducts
};

/*================================================== 
    JSON書き出し
==================================================*/

fs.writeFileSync( "src/js/data.json" ,  JSON.stringify(jsonrc));

/*================================================== 
    Functions
==================================================*/

/*---------------------------------------- 
    データ作成系
----------------------------------------*/

/*.............................. 
    products
..............................*/

function createJsonrcProducts(imgFilesArr) {
    const results = [];
    const distDir = 'assets/img/products/';

    imgFilesArr.forEach(file => {
        const data = {
            title: "プロダクトタイトルプロダクトタイトル",
            price: "¥99,999 +tax",
            img: `${distDir}${file}`,
            description1: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
            description2: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
            size: "W999 × D999 × H999",
            color: "テキスト",
            material: "テキストテキストテキスト"
        };

        results.push(data);
    });

    return results;
}

/*---------------------------------------- 
    ソート系
----------------------------------------*/
/*.............................. 
    文字数字列混合ソート用
        ・数字を基準に並べ替え
..............................*/

function fileCompare(a, b) {
    const index = 0;
    const ma = Number(a.match(/([0-9]+|[^0-9]+)/g)[1]);
    const mb = Number(b.match(/([0-9]+|[^0-9]+)/g)[1]);

    if (ma < mb) return -1;
    if (ma > mb) return 1;
    return 0;
}
