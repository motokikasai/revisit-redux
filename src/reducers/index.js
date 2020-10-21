import { combineReducers } from 'redux';
import {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  VisibilityFilters,
} from '../actions/actions';

const { SHOW_ALL } = VisibilityFilters;

// const initialState = {
//   count: 0,
// };

// const countReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         count: state.count + 1,
//       };
//     case 'DECREMENT':
//       return {
//         count: state.count - 1,
//       };
//     default:
//       return state;
//   }
// };

function visibilityFiler(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
}

// const rootReducer = combineReducers({
//   countReducer,
// });

const todoApp = combineReducers({
  visibilityFiler,
  todos,
});

export default todoApp;
