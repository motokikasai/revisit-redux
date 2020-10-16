import { combineReducers } from 'redux';

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

// const todoReducer = (state = 0, action) => {
//   return 0;
// };

const rootReducer = combineReducers({
  countReducer,
  //   todoReducer,
});

export default rootReducer;
