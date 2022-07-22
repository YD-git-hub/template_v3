import {
  post,
  get,
  Uploadpost
} from "./config";

let img;
if (process.env.NODE_ENV === 'development') {
  img = ''; 
} else if (process.env.NODE_ENV === 'production') {
  //线上环境
  img = ''; 
}

export const imgpath:string | undefined = img;
export const upload_img = (data: object) => Uploadpost('', data);
export const collectPointdata = (data: object) => post('', data);
export const _getproductcarbon = (data: object) => get('', data);
