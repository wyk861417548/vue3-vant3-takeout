import {request} from "@/utils/request.js";
export default {
  // 店铺列表
  list(params){return request({url:'/store/list',method:'get',params})},

  // 商品列表
  goods(params){return request({url:'/store/goods',method:'get',params})},

  // 下单
  add(data){return request({url:'/store/good/add',method:'post',data})},
}