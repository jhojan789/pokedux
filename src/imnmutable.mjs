import { fromJS } from "immutable";

//mutable
// function updateHeight(userInf) {
//   userInf.height = userInf.height + 1;
//   return userInf;
// }
//
// function updateHeight(userInf) {
//   userInf.set("height", userInf.get("height") + 1);
//   return userInf;
// }
//
//immutable with Object.assign
// function updateHeight(userInf) {
//   return Object.assign({}, userInf, { height: userInf.height + 1 });
// }
//
//immutable with Object.assign
// function updateHeight(userInf) {
//   return { ...userInf, height: userInf.height + 1 };
// }

// immutable with immutable library

const userInfo = fromJS({
  name: "Jhojan",
  height: 187,
});

// const userInfo = new Map();

// userInfo.set("name", "Jhojan");
// userInfo.set("height", 187);

console.log("userInfo BEFORE: ", userInfo._root.entries);

// const updatedUserInfo = updateHeight(userInfo);

const updatedUserInfo = userInfo.set("height", 188);

console.log("userInfo AFTER: ", userInfo._root.entries);

console.log("updatedUserInfo", updatedUserInfo._root.entries);
