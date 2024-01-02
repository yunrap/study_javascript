// 해시테이블
function HashTable() {
  const table = [];

  // 저장함수
  this.add = (key, value) => {
    const position = hashFunction(key);
    console.log(position + " - " + key);
    table[position] = value;
  };

  // get함수
  this.get = (key) => {
    return table[hashFunction(key)];
  };

  // remove함수
  this.remove = (key) => {
    return (table[hashFunction(key)] = undefined);
  };
}

// 해시함수
const hashFunction = (key) => {
  let hash = 0;
  for (var i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % 37;
};

const hash = new HashTable();
hash.add("YEJI", "28");
hash.add("KIM", "28");
hash.add("DONGUN", "28");
