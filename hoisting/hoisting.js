// 호이스팅 때문에 선언이 끌어올려져서 오류 안남.
console.log(text); // (선언 + 초기화 된 상태)
text = "varShow!"; // (선언 + 초기화 + 할당 된 상태)
var text;
console.log(text);

// 호이스팅 하지만 let 키워드는 선언과 초기화된후에 할당된 변수에서만 오류가 안남
console.log(showLet); // (선언된 상태 , 초기화안됨)  reference 오류-> tdz존 걸림
showLet = "letShow!"; // (선언 + 초기화 + 할당 된 상태)
let showLet;
console.log(showLet);
