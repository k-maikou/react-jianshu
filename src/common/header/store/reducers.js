import * as constants from './constants';
import { fromJS } from 'immutable';

// Immutable Data 就是一旦创建，就不能再被更改的数据。
// 对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。
// Immutable 实现的原理是 Persistent Data Structure（持久化数据结构）

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
});

export default (state = defaultState, action) => {

  switch (action.type) {
    case constants.CLICK_INPUT_FOCUS:
      return state.set('focused', true);

    case constants.CLICK_INPUT_BLUR:
      return state.set('focused', false);
  
    case constants.GET_LIST_DATA:
      // 接收一个对象，可以对多个属性进行设置
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })

    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);

    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);

    default:
      return state;
  }

};
