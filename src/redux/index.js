import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import thunk from 'redux-thunk';

// CreateActions start
export const actions = {
  test: () => ({type: 'TEST'}),
  setStations: (stations) => ({type: 'SET_STATIONS', stations}),
  testAsync: () => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch({type: 'TEST'});
      }, 1000 * 60);
    };
  }
};

// CreateActions end

// Reducers start
const testReducer = (state = {}, action) => {
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
const stations = (state = {}, action) => {
  switch(action.type) {
    case 'SET_STATIONS':
      return {
        ...state,
        stations: action.stations
      }
    default:
      return state;
  }
};
const reducer = combineReducers({
  test: testReducer,
  stations
});
// Reducers end

// Store start
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
