//mutable
// function updateHeight(userInf) {
//   userInf.height = userInf.height + 1;
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
function updateHeight(userInf) {
  return userInf.set("height", userInf.get("height") + 1);
}

// const userInfo = {
//   name: "Jhojan",
//   height: 187,
// };
const userInfo = new Map();

userInfo.set("name", "Jhojan");
userInfo.set("height", 187);

console.log("userInfo BEFORE: ", userInfo);

const updatedUserInfo = updateHeight(userInfo);

console.log("userInfo AFTER: ", userInfo);

console.log("updatedUserInfo", updatedUserInfo);
