import {
  // post,
  get,
  // Uploadpost
} from "./config";

let img;
if (process.env.NODE_ENV === 'development') {
  img = ''; // 一只老鹰
} else if (process.env.NODE_ENV === 'production') {
  //线上环境
  img = ''; // 一只老鹰
}

export const imgpath:string | undefined = img;
// export const upload_img = (data: object) => Uploadpost('api/Common/upload', data);
// export const collectPointdata = (data: object) => post('api/web/getCommoditySuyuan', data);
export const _getproductcarbon = (data: object) => get('/api/getproductcarbon', data);//扫码进入获取数据
export const _information_switch = (data: object) => get('/api/efactor/information_switch', data);//平台资讯开关
export const _information_list_wap = (data: object) => get('/api/efactor/information_list_wap', data);//平台资讯开关
export const _information_info_wap = (data: object) => get('/api/efactor/information_info_wap', data);//资讯详情