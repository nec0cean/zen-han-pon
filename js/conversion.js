function onConversionButtonClick() {
  //idがfreewordInputのinput要素を取得
  let Str = document.getElementById("InputText");
  //取得したinput要素の入力値を取得。
  let StrValue = Str.value;

  //idがshowInputのp要素を取得。
  let showInput = document.getElementById("showInput");
  showInput.textContent = "入力された値：" + StrValue;
};