import * as constants from './constants';
// import axios from 'axios';
import { fromJS } from 'immutable';
import { getHomeDataHttp, getHomeListData } from '../../../network';

const homeAllData = (topicList, articleList, recommendList, writerList) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList,
  articleList,
  recommendList,
  writerList,
  totalPage: Math.ceil(writerList.length / 10) + 2
});

const addHomeList = (data, nextPage) => ({
  type: constants.HOME_LIST_DATA,
  list: fromJS(data),
  nextPage
});

export const mouseCodeShow = () => ({
  type: constants.CODE_SHOW
});

export const mouseCodeHide = () => ({
  type: constants.CODE_HIDE
});

export const clickPageChange = (page) => ({
  type: constants.CLICK_PAGE_CHANGE,
  page
});

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_TOP_SHOW,
  show
})

export const getMoreList = (page) => {
  return async (dispatch) => {
    const { data } = await getHomeListData(page);
    console.log(data);
    dispatch(addHomeList(data.data, page + 1));
  }
};

export const getDataInformation = () => {
  return async(dispatch) => {
    // const { data } = await axios.get('/api/home.json');
    const { data } = await getHomeDataHttp();
    const { topicList, articleList, recommendList, writerList } = data.data;
    dispatch(homeAllData(topicList, articleList, recommendList, writerList));
  }
};
