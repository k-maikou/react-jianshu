import { request } from './request';

/**********Home**********/
export function getHomeDataHttp() {
  return request({
    url: '/api/home.json'
  })
};

export function getHomeListData(page) {
  return request({
    url: '/api/homeList.json',
    params: {
      page
    }
  })
};
/**********Home**********/

/**********Detail**********/

export function getDetailInfo(id) {
  return request({
    url: "/api/detail.json",
    params: {
      id
    }
  })
};

/**********Detail**********/

/************Login************/

export function getLogin(account, password) {
  return request({
    url: '/api/login.json',
    params: {
      account,
      password
    }
  })
}

/************Login************/