foo(); //선언문은 호이스팅이 가능
foo2(); //표현식은 호이스팅이 불가능 (error)

function foo() {
  // 함수선언문
  console.log("hello");
}
var foo2 = function () {
  // 함수표현식
  console.log("hello2");
};
