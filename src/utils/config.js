export default{
  /**
   * 生成随机字母  
   * @param {*} min 只传min 生成min位随机数
   * @param {*} max 传了min和max 生成min~max之间的随机数
   * @returns 
   */
  randomWord(min, max) {
    var str = "",range = min,
    arr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f",];
    //随机产生 如果max存在随机产生min到max之间的随机数长度
    if (max) {
      range = Math.round(Math.random() * (max - min)) + min;
    }
    
    for (var i = 0; i < range; i++) {
      let pos = Math.round(Math.random() * (arr.length - 1));
      str += arr[pos];
    }
    return str;
  }
}

Date.prototype.format = function (fmt) { 
  var cNumber = ["日", "一", "二", "三", "四", "五", "六"];
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒
    'w+': cNumber[this.getDay()], //星期
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}