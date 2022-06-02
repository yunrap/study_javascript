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

// var add = function (x, y) {
//   return x + y;
// };

// add(3, 4);

/****************************************/
// 4-8
// function add(x, y) {
//   return x + y;
// }

// add.result = add(3, 2);
// add.status = "OK";

// console.log(add.result); //5
// console.log(add.status); //OK

/****************************************/
// 4-9
// 변수에 함수 할당
// var foo = 100;
// var bar = function () {
//   return 100;
// };
// console.log(bar());

// 프로퍼티에 함수 할당
// var obj = {};
// obj.baz = function () {
//   //객체.프로퍼티에 함수할당, 값참조가능
//   //왜그럴까?? 함수도 객체이므로 프로퍼티가 객체를 참조할수있으므로 가능
//   return 200;
// };
// console.log(obj.baz);

/****************************************/
// 4-10 함수 인자로 전달

//함수 표현식으로 foo() 함수 생성
// var foo = function (func) {
//   //익명함수를 func 인자로 넘겼다.
//   //인자로 받은 func 함수
//   func();
// };

// //foo()함수 실행
// foo(function () {
//   console.log("hello");
// });

//4-11 리턴값으로 활용
// var foo = function () {
//   return function () {
//     //익명함수를
//     console.log("hello");
//   };
// };

// var bar = foo();
// bar();

//4-12 add() 함수 객체 프로퍼티를 출력하는 코드
// function add(x, y) {
//   return x + y;
// }

// console.dir(add);

//4/16 즉시실행함수 예제 코드
// (function (name) {
//   console.log("this function -> ' + name");
// })("foo");

//4-18 내부 함수 예제 코드
//parent() 함수 정의
// function parent() {
//   var a = 100;
//   var b = 200;

//   //child() 내부 함수 정의
//   function child() {
//     var b = 300;

//     console.log(a);
//     console.log(b);
//   }
//   child();
// }
// parent();

//4-19 함수 스코프 외부에서 내부함수 호출하는 예제코드
// function parent() {
//   var a = 100;
//   //child() 내부 함수
//   var child = function () {
//     console.log(a);
//   };

//   return child;
// }

// var inner = parent();
// inner();

//4-20 자신을 재정의하는 함수 예제 코드
//self() 함수
// var self = function () {
//   console.log("a");
//   return function () {
//     console.log("b");
//   };
// };

// self = self();
// self();

//처음에는 self = self()가 실행되면 a,b둘다 찍여햐하나생각
//하지만 self변수에 return 이라는 역활을 다시생각해보니 self에 b가 들어가겠구나

//4-21 함수형식에 맞춰 인자를 넘기지않더라도 함수 호출이 가능함
// function func(arg1, arg2) {
//   console.log(arg1, arg2);
// }
// func();
// func(1);
// func(1, 2);
// func(1, 2, 3);

//4-22 arguments 객체 예제 코드
//add() 함수
// function add(a, b) {
//   //arguments객체 출력
//   console.dir(arguments);
//   return a + b;
// }

// console.log(add(1));
// console.log(add(1, 2));
// console.log(add(1, 2, 3));

//4-23

//myObject 객체 생성
// var myObject = {
//   name: "foo",
//   sayName: function () {
//     console.log(this.name);
//   },
// };

//otherObject 객체 생성
// var otherObject = {
//   name: "bar",
// };

// // otherObaject.sayName() 메서드
// otherObject.sayName = myObject.sayName;

// // sayName() 메서드 호출
// myObject.sayName();
// otherObject.sayName();

//4-24
// 전역 객체와 전역 변수의 관계를 보여주는 예제코드
// var foo = "i'm foo";

// console.log(foo);
// console.log(window.foo);

//4-25
//함수를 호출할 때 this바인딩을 보여주는 예제 코드
// var test = "this is test";
// console.log(window.test); //window에서 가능

// //sayFoo() 함수
// var sayFoo = function () {
//   console.log(this.test);
// };
// sayFoo();

//4-26
//내부 함수의 this 바인딩 동작을 보여주는 예제 코드
//전역 변수 value 의 정의
// var value = 100;

// //myObject 객체 생성
// var myObject = {
//   value: 1,
//   func1: function () {
//     this.value += 1;
//     console.log("func1() called" + this.value); //2
//     //func2() 내부 함수
//     func2 = function () {
//       this.value += 1;
//       console.log("func2() called" + this.value); //3

//       func3 = function () {
//         this.value += 1;
//         console.log("func3() called" + this.value); //4
//       };

//       func3(); //func3() 함수 호출
//     };

//     func2(); //func2() 함수 호출
//   },
// };

// myObject.func1(); //func1() 메서드 호출

//4-27 내부 함수의 this바인딩 문제를 해결한 코드

var value = 100;

var myObject = {
  value: 1,
  func1: function () {
    console.log(this);
    var that = this;

    that.value += 1;
    console.log("func1() caleed" + that.value); // 2 출력

    (func2 = function () {
      that.value += 1;
      console.log("func2() caleed" + that.value);

      func3 = function () {
        that.value += 1;
        console.log("func3() caleed" + that.value);
      };
      func3();
    }),
      func2();
  },
};

myObject.func1();

//refenrece를 사용한 호출시 this 문제 해결
