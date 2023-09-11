const array = [1, 2, 3];

console.log(Symbol.iterator in array);

for (let i of array) {
  console.log(i);
}

// Array는 이터러블 프로토콜을 준수.
// array가 안에 이터레이터 프로토콜 속성을 포함함

console.log(" ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

//만약 객체라면
/* 
const obj = { a: 1, b: 2 };
console.log(Symbol.iterator in obj);

for (let i of obj) {
  console.log(i);
}
*/
// 일반 객체는 이터러블 프로토콜을 준수x

console.log(" ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

const array1 = [1, 2, 3];
const iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//next, return, throw 메서드를통해 값을 반환할수있다.
