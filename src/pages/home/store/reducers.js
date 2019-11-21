import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  show: false,
  articlePage: 1,
  writerPage: 1,
  totalPage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    writerList: fromJS(action.writerList),
    totalPage: action.totalPage
  });
};

const homeListData = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);

    case constants.HOME_LIST_DATA:
      return homeListData(state, action);

    case constants.TOGGLE_TOP_SHOW:
      return state.set('showScroll', action.show);

    case constants.CODE_SHOW:
      return state.set('show', true);

    case constants.CODE_HIDE:
      return state.set('show', false);
      
    case constants.CLICK_PAGE_CHANGE:
      return state.set('writerPage', action.page);

    default:
      return state;
  }
  
};
