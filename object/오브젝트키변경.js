// * api에서 받았던 배열오브젝트의 key 값을 변경해서 새로운 배열오브젝트에 전송할때생겼던문제
// object배열을 받아서 새로운 object로 변경할때 필요

const company = [
  { id: "1", name: "somename" },
  { id: "1", name: "somename" },
];

arrayObj = company.map((item) => {
  return {
    stroke: item.id,
    key2: item.name,
  };
});

console.log(arrayObj);
