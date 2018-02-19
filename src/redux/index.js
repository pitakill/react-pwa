import {
  combineReducers,
  createStore
} from 'redux';

// CreateActions start
export const actions = {
  test: () => ({type: 'TEST'})
};
// CreateActions end

// Reducers start
const test = (state = {}, action)=> {
  switch(action.type) {
    case 'TEST':
      return {
        ...state,
        test: true
      };
    default:
      return state;
  }
};
const reducer = combineReducers({
  test
});
// Reducers end

// Store start
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// Store end
