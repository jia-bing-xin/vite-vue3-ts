//统一管理项目前部的接口
import requests from "./requests";
// import mockRequests from './mockRequests';
export const postLogin = (data) => requests({
   method: 'post',
   url: '/users/login',
   data
});
