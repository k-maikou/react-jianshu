import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const getListData = (data) => ({
  type: constants.GET_LIST_DATA,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchInputFocus = () => ({
  type: constants.CLICK_INPUT_FOCUS
});

export const searchInputBlur = () => ({
  type: constants.CLICK_INPUT_BLUR
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const clickChangePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
});

export const getList = () => {
  return async (dispatch) => {
    const {data} = await axios.get('/api/headerList.json');
    dispatch(getListData(data.data));
  }
};
