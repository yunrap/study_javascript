// chapter1
let array1 = ["크러쉬", "뷔", "태민"];

let arrayList1 = array1.map(function (item) {
  return item + "가수";
});

console.log(arrayList1);

//결과 [ '크러쉬가수', '뷔가수', '태민가수' ]

///////////////////////////////////////////////////////////////////////////

// chapter2
let array2 = [
  { name: "크러쉬", age: "31살" },
  { name: "뷔", age: "28살" },
  { name: "태민", age: "30살" },
];

let arrayList2 = array2.map(function (item) {
  return { realName: item.name, realAge: item.age };
});

console.log(arrayList2);

//결과 [
//   { realName: '크러쉬', realAge: '31살' },
//   { realName: '뷔', realAge: '28살' },
//   { realName: '태민', realAge: '30살' }
// ]
