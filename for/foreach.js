// todo 비동기/동기 sideeffect 확인해보기
const array = ["만두", "강정"];
const newArray = [];

array.forEach(function (data) {
  newArray.push(data + "음식");
});

console.log(newArray);
