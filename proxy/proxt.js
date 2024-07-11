// :: 간단한 proxy 구현

// const target = {};
// const proxy = new Proxy(target, {});

// proxy.name = "재난";
// console.log(proxy.name, target.name);

// target.name = "서후";
// console.log(proxy.name, target.name);

// console.log(proxy === target);

// :: set 트랩 - 유효성 검증

// const target = { name: "재나" };
// const proxy = new Proxy(target, {
//   set(trapTarget, key, value, receiver) {
//     if (!trapTarget.hasOwnProperty(key)) {
//       if (typeof value !== "number" || Number.isNaN(value)) {
//         throw new Error("이 프로퍼티는 숫자여야 합니다.");
//       }
//     }
//     return Reflect.set(trapTarget, key, value, receiver);
//   },
// });

// proxy.name = "사훈";
// console.log(target.name, proxy.name);

// proxy.count = 10;
// console.log(proxy.count, target.count);

// proxy.age = "30살";

// ::  get 트랩 - 유효성 검증

// const proxy = new Proxy(
//   {},
//   {
//     get(trapTarget, key, receiver) {
//       if (!(key in receiver)) {
//         throw new TypeError(`property ${key} doesn't exist.`);
//       }
//       return Reflect.get(trapTarget, key, receiver);
//     },
//   }
// );

// proxy.name = "proxy";
// console.log(proxy.age);

// :: 한시적 접근 허용

// const getUserInfo = userId =>
//   fetch(`https://api.github.com/user/${userId}`)
//   .then(function (res) { return res.json() })
//   .then(function (res) {
//     let counter = 0
//     const pr = Proxy.revocable(res, {
//       get (trapTarget, key) {
// 		if(counter++ > 1) {
//           pr.revoke()
//         }
//         return res[key]
//       }
//     })
//     return pr.proxy
//   })
//   .catch(err => { console.error(err) })

// getUserInfo(1003).then(r => {
//   console.log(r.avatar_url)
//   console.log(r.id)
// })
