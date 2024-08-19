// 1. 렉시컬스코프

function init() {
    var name = "Mozilla";   //name은 init에 의해 생성된 지역변수이다.
    function displayName() {
        // displayName() 은 내부함수이며, 클로저다.
        console.log(name);  //부모함수에서 선언된 변수를 사용한다.
    }
    displayName();
}
init();

/** 
 * closure는 ? 내부함수이면서 외부함에게 접그근을 제공한다.
 * displayName()내부에는 자신만의 지역변수가 없다. 그러나, 클로저의 기능으로 
 * 내부함수에서 외부함수 접근가능하다.
 */

// 2. let과 const를 사용한 범위지정

if (Math.random() > 0.5) {
    var varX = 1;
}else {
    var varX = 2;
}
console.log(varX)

if (Math.random() > 0.5) {
    const constX = 1;
}else {
    const constX = 2;
}
console.log(constX)

/**
 * 블록함수를 벗어난 변수는 const는 reference error 발생 
 */

// 3. 클로저
function makeFunc() {
    const name ="Mozilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

/** 
 * 내부함수인 displayName이 실행되기전에 외부함수에서 반환한다!!
 * 왜이렇게 썻을까? 다시보면 내부함수가 접근을 허용하기때문에 
 * myFunc은 makeFunc이 실행될때 생성된 displayName함수의 인스턴스에대한 참조이다.
*/

// 4. 클로저예제 
function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12

  /** 
   * add5 와 add10은 클로저다. 같은 함수 makeAdder를 공유하지만
   * 서로다른 렉시컬스코프을 가지고있다.
  */
