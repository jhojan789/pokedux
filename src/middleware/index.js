// export function logger2(store) {
//   return function (next) {
//     return function (action) {
//       console.log(action);
//       next(action);
//     };
//   };
// }

export const logger = (store) => (next) => (action) => {
  // console.log(action);
  next(action);
};

// export const featuring = (store) => (next) => (actionObj) => {
//   const newPayload = [{ name: "jhojan" }, ...actionObj.action.payload];
//   const newActionObj = {
//     ...actionObj,
//     action: { ...actionObj.action, payload: newPayload },
//   };
//   next(newActionObj);
// };
