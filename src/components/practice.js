const redux = require("redux");
const createStore = redux.createStore;
const combine = redux.combineReducers;
const middleware = redux.applyMiddleware; //mid step 1

// const initialState = {
//   numberOfBooks: 10,
//   numberOfPens: 20,
// };
const bookstate = { numberOfBooks: 20 };
const penstate = { numberOfPens: 10 };

//action functions
function buyBook() {
  return {
    type: "Buy_Book",
    payload: "BuyBook function",
  };
}
function buyPen() {
  return {
    type: "Buy_Pen",
    payload: "BuyPen function",
  };
}
// Reducer
// const Reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "Buy_Book":
//       return {
//         ...state,
//         numberOfBooks: state.numberOfBooks - 2,
//       };
//     case "Buy_Pen":
//       return {
//         ...state,
//         numberOfPens: state.numberOfPens - 5,
//       };

//     default:
//       return state;
//   }
// };
const bookreducer = (state = bookstate, action) => {
  switch (action.type) {
    case "Buy_Book":
      return {
        ...state,
        numberOfBooks: state.numberOfBooks - 1,
      };
    default:
      return state;
  }
};
const penreducer = (state = penstate, action) => {
  switch (action.type) {
    case "Buy_Pen":
      return {
        ...state,
        numberOfPens: state.numberOfPens - 1,
      };
    default:
      return state;
  }
};
const logger = (store) => {
  //mid step 3
  return (next) => {
    return (action) => {
      const result = next(action);
      console.log("middleware", result);
      return result;
    };
  };
};
//Store

const store = createStore(
  combine({ bookreducer, penreducer }),
  middleware(logger)
); //mid step 2
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated", store.getState());
});
store.dispatch(buyBook());
store.dispatch(buyPen());
// store.dispatch(buyBook());
// store.dispatch(buyPen());
unsubscribe();
