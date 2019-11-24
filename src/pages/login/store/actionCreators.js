import * as constants from './constants';
import { getLogin } from '../../../network'

const addLoginData = () => ({
  type: constants.ADD_LOGIN_DATA,
  value: true
});

export const loginOut = () => ({
  type: constants.LOGIN_OUT,
  value: false
});

export const loginIn = (account, password) => {
  return async (dispatch) => {
    try {
      const { data } = await getLogin(account, password);

      if (data.success === true) {
        dispatch(addLoginData());
      } else {
        alert('登录失败');
      }
    } catch(err) {
      throw err;
    }
  }
};
