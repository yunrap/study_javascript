var initText;
(function (number) {
  var textList = ["is Odd Text", "is Even Text"];
  if (number % 2 == 0) {
    initText = textList[1];
  } else {
    initText = textList[0];
  }
})(5);
console.log(initText);
console.log(textList);
