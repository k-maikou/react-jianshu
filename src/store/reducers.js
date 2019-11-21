import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducers as homeReducer } from '../pages/home/store';
import { reducers as detailReducer } from '../pages/detail/store'

const reducer =  combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer
});

export default reducer;
