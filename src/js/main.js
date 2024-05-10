/*================================================== 
    クラス付与
        イベント発生時のコールバック
==================================================*/

const addClass = (target, addition) => {
    target.classList.contains(addition)
        ? target.classList.remove(addition)
        : target.classList.add(addition)
    ;
};

/*---------------------------------------- 
    ドロワー
----------------------------------------*/
const configDrowerEvent = () => {
    const toggleBtn = document.querySelector('.l-header__toggle-btn');
    const nav = document.querySelector('.l-header__nav');
    const overlay = document.querySelector('.l-header__overlay');
    const targets = [toggleBtn, nav, overlay];
        
    toggleBtn.addEventListener('click', () => {
        targets.forEach(target => addClass(target, 'js-open'));
    })

    overlay.addEventListener('click', () => {
        targets.forEach(target => addClass(target,'js-open'))
    })
}


/*================================================== 
    イベントリスナー登録
==================================================*/

configDrowerEvent();

