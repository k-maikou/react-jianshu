import * as constants from './constants';
import { getDetailInfo } from '../../../network';

const changeDetail = (data) => ({
  type: constants.CHANGE_DETAIL,
  title: data.title,
  content: data.content
});

export const getDetailData = (id) => {
  return async (dispatch) => {
    try{
      const { data } = await getDetailInfo(id);
      console.log(data);
      dispatch(changeDetail(data.data));
    } catch(err) {
      throw err;
    }
  }
};
