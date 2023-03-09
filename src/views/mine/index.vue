<template>
  <div class="mine">
    <header class="j-flex-a">
      <van-image width="60" height="60" radius="50%" fit="cover" :src="require('@/assets/images/home/1.png')" />
      <p class="ml-20">用户信息</p>
    </header>

    <main>
      <section class="j-flex" v-for='(item,index) in menuList' :key='index'>
        {{item.name}}
        <van-icon name="arrow" />
      </section>
    </main>
  </div>

</template>

<script>
export default{
  setup(){
    const menuList = [
      {name:'我的订单',url:''},
      {name:'个人中心',url:''},
      {name:'购物车管理',url:''}
    ]

    return {
      menuList
    }
  }
}
</script>
<style lang='less' scoped>
  .mine{
    height: 100%;
    background-color:rgba(200,200,200,.1);
    header{
      padding:30px 20px;
      background-color: #f99;
      box-shadow: 0 2px 2px rgba(200,200,200,.5);
      color: #fff;
    }
    main{
      padding: 15px;
      section{
        padding: 15px;
        border-radius: 4px;
        background-color: #fff;
        & + section{
          border-top: 1px solid rgba(200,200,200,.1);
        }
      }
    }
  }
</style>