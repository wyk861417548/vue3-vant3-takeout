import { request } from "../utils/request";
export default {
  // 上传组件 opt:{loading:false} 关闭全局动画
  upload(data){return request({url:'common/upload',method:'post',data,headers: {'Content-Type': 'multipart/form-data'}})},
}