# 클로저의 개념
내부함수에서 외부함수 범위에 대한 접근을 제공한다.
클로저가 생성된 시점의 유효범위 내에있는 모든 지역변수로 구성된다.

## 렉시컬스코프 (Lexical scoping)
함수를 어디에 선언했는지에 따라 결정한다. (우선암기)

## var let const 범위지정
* es6 이전 javascript는 함수스코프와 전역스코프 두가지만 존재
* 블록은 var로 선언한변수에 스코프생성 x, 전역변수 생성
* es6 이후 블록스코프 생성을위해 let과 const 도입
* 블록은 스코프취급, 단 let과 const로 변수생성할때만 가능