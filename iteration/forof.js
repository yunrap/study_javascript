const array = [1, 2, 3];

for (let item of array) {
  console.log(item);
}

const string = "hello";

for (let letter of string) {
  console.log(letter);
}

const map = new Map([
  ["a", "1"],
  ["b", "2"],
  ["c", "3"],
  ["d", "4"],
]);

for (let [key, value] of map) {
  console.log(key, value);
}
