import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducers as homeReducer } from '../pages/home/store';

const reducer =  combineReducers({
  header: headerReducer,
  home: homeReducer
});

export default reducer;
