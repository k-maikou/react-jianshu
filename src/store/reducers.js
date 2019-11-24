import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducers as homeReducer } from '../pages/home/store';
import { reducers as detailReducer } from '../pages/detail/store';
import { reducers as loginReducer } from '../pages/login/store';

const reducer =  combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
});

export default reducer;
