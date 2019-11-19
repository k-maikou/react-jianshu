import * as constants from './constants';
import { fromJS } from 'immutable';

// Immutable Data 就是一旦创建，就不能再被更改的数据。
// 对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。
// Immutable 实现的原理是 Persistent Data Structure（持久化数据结构）


const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {

  if (action.type === constants.CLICK_INPUT_FOCUS) {
    // immutable对象的set方法，会结合之前immutable对象的值
    // 和设置的值，返回一个全新的对象
    return state.set('focused', true);
  }

  if (action.type === constants.CLICK_INPUT_BLUR) {
    return state.set('focused', false);
  }

  return state;
}
