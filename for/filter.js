// chapter1
let array1 = ["치킨", "피자", "운동"];
let filter1 = array1.filter((item) => item === "치킨");
console.log(filter1);

///////////////////////////////////////////////////////////////////////////

// chapter2
let array2 = [
  { food: "치킨", category: "food", price: 16000 },
  { food: "피자", category: "food", price: 30000 },
  { food: "운동", category: "exercise", price: 0 },
];

let filter2 = array2.filter((item) => item.food === "치킨");
console.log(filter2);
// 결과 [ { food: '치킨', category: 'food', price: 16000 } ]
///////////////////////////////////////////////////////////////////////////

//capter3 만약 filter후 추가속성을 넣는다면?

let filter3 = array2.filter((item) => item.category === "food");

var filter31 = filter3.map((item) => {
  return {
    food: item.food,
    price: item.price,
    kcal: "200kcal",
  };
});

console.log(filter31);
//결과
// [
//   { food: '치킨', price: 16000, kcal: '200kcal' },
//   { food: '피자', price: 30000, kcal: '200kcal' }
// ]
