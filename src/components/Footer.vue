<template>
  <div class="footer">
    <router-link class="nav" active-class="nav-active" v-for="(item,index) in nav" :key="index" :to="item.path">
      <p>{{ item.title }}</p>
      <van-icon :name="item.icon" size="20" />
    </router-link>
    
  </div>

</template>

<script>
export default {
  data () {
    return {
      nav:[
        {title:'首页',path:'/home',icon:'cart-o'},
        {title:'购物车',path:'/cart',icon:'cart-o'},
        {title:'订单',path:'/order',icon:'cart-o'},
        {title:'我的',path:'/mine',icon:'cart-o'},
      ]
    };
  },

  created(){},

  methods: {
  }
}
</script>
<style lang="less" scoped>
.footer{
  display: flex;
  justify-content:space-between;
  text-align: center;
  box-shadow: 0 0 1px #DADADA;
  a{
    text-decoration: none;
  }
  .nav{
    color: #333;
    width: 25%;
    padding: 10px;
    p{
      margin-bottom: 5px;
    }
    &.nav-active{
      color: #f99;
    }
  }
}
</style>