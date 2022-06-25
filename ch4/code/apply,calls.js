function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var foo = {};

Person.apply();

function hello() {
  return function world() {
    return "hello world";
  };
}

hello();

function hello() {
  return "hello world";
}

hello(n);
