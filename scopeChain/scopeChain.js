var var1 = 1;
var var2 = 3;

function func() {
  var var1 = 10;
  var var2 = 20;

  console.log(var1); //출력값 10
  console.log(var2); //출력값 20
}

func();
console.log(var1); //출력값 1
console.log(var2); //출력값 3

// 스코프체인 각합수는 자기만의 지역스코프를 가진다
// 이런 지역 스코프가 연결된것이 스코프체인이라한다
