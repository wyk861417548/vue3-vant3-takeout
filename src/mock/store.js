import Mock from "mockjs";

// mock方法 --- 三个参数
// 1.拦截的请求地址
// 2.请求方式
// 3.放回数据（a.直接返回 b.函数返回）

// 商店列表
Mock.mock('/store/list','get',{code:200,data:()=>{
  let newList = [];
  for (let i = 0; i < 20; i++) {
    newList.push({
      id:Mock.mock('@tld'),
      title:Mock.Random.ctitle(3,5),
      tip:Mock.Random.cword(5,10),
      money: (Math.random()*50+10).toFixed(0),
      score:(Math.random()*5+1).toFixed(1)
    })
  }
  return newList;
}})

// 商店列表
Mock.mock('/store/goods','get',{code:200,data:()=>{
  let newList = [];
  for (let i = 0; i < 10; i++) {
    newList.push({
      text: Mock.Random.ctitle(3,5),
      children:[]
    })
    for (let j = 0; j < 20; j++) {
      newList[i].children.push({
        id:1000 + i,
        title:Mock.Random.ctitle(3,5),
        tip:Mock.Random.cword(5,10),
        money: (Math.random()*50+10).toFixed(0),
        score:(Math.random()*5+1).toFixed(1),
        num:0,
        img:Mock.Random.dataImage('100x100', '图片')
      })
    }
  }
  return newList;
}})