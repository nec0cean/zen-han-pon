function onConversionButtonClick() {
  //idがfreewordInputのinput要素を取得
  let freewordInput = document.getElementById("freewordInput");
  //取得したinput要素の入力値を取得。
  let freewordInputValue = freewordInput.value;

  //idがshowInputのp要素を取得。
  let showInput = document.getElementById("showInput");
  showInput.textContent = "入力された値：" + freewordInputValue;
};