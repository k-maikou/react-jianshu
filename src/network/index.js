import { request } from './request';

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
