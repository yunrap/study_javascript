// 변수선언에는 크게 3가지가 있다
// const var let

/**
 * Example 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// undefined 값을 반환함.
var myvar = "my value";

(function () {
  console.log(myvar); // undefined
  var myvar = "local value";
})();
