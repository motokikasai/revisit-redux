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

const { SHOW_ALL } = VisibilityFilters;

function visibilityFiler(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  countReducer,
  //   todoReducer,
});

export default rootReducer;
