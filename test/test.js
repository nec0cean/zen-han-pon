//入力値をそのまま表示する
function showText() {
  //idがfreewordInputのinput要素を取得
  let str = document.getElementById("InputText");
  //取得したinput要素の入力値を取得。
  let strVal = str.value;

  //idがshowInputのp要素を取得。
  let showInput = document.getElementById("showText");
  showInput.textContent =  strVal;
};

//入力値の英数字を全角→半角へ変換して表示する
function toHalfWidth(){
  let str = document.getElementById("InputText");
  let strVal = str.value;

  let halfVal = strVal.replace(/[！-～]/g,
    function( tmpStr ) {
      // 文字コードをシフト
      return String.fromCharCode( tmpStr.charCodeAt(0) - 0xFEE0 );
    }
  );

  let showInput = document.getElementById("showText");
  showInput.textContent =  halfVal;
}