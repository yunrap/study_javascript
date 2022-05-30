//4-2
// var add = function (x, y) {
//   return x + y;
// };

// var plus = add;

// console.log(add(3, 5));
// console.log(plus(1, 7));

/****************************************/
//4-3
// var add = function sum(x, y) {
//   return x + y;
// };
// console.log(add(3, 4));
// console.log(sum(2, 6));

/****************************************/
//4-4
// var factorialVar = function factorial(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// };

// console.log(factorialVar(3));
// console.log(factorial(3));  err.

/****************************************/
//4-6
// console.log(add(3, 4));

// function add(x, y) {
//   return x + y;
// }

// console.log(add(3, 4));

/****************************************/
// 4-7
//add(2, 3);    err.

var add = function (x, y) {
  return x + y;
};

add(3, 4);

/****************************************/
// 4-8
function add(x, y) {
  return x + y;
}

add.result = add(3, 2);
add.status = "OK";

console.log(add.result); //5
console.log(add.status); //OK

/****************************************/
// 4-9
// 변수에 함수 할당
var foo = 100;
var bar = function () {
  return 100;
};
console.log(bar());

//프로퍼티에 함수 할당
var obj = {};
obj.baz = function () {
  return 200;
};
console.log(obj.baz);
