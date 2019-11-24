import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  title: '',
  content: ''
});

const changeStateDetail = (state, action) => {
  return state.merge({
    title: action.title,
    content: action.content
  });
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return changeStateDetail(state, action);

    default:
      return state;
  }
};
