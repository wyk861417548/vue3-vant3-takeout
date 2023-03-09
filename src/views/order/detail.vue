<template>
  <div class="j-vh p-15">
    <header>
      <van-icon name="underway" size="100" color="#108ee9"/>
      <p class="font16 mt-10 mb-30">下单成功</p>
    </header>

    <main>
      <p class="font20 font600 text-333 j-flex mb-15">
        {{good.title}}
        <span class="text-999 font14">{{good.orderTime}}</span>
      </p>
      
      <section>
        <van-card
          v-for="good in good.list"
          :key="good.id"
          :num="good.num"
          :price="(good.money*good.num).toFixed(2)"
          :desc="good.tip"
          :title="good.title"
          :thumb="require('@/assets/images/home/1.png')"
        />
      </section>
    </main>
  </div>

</template>

<script>
import { useRoute } from "vue-router";

export default{
  setup(){
    const route = useRoute();

    const goods = localStorage.__GOOD__?JSON.parse(localStorage.__GOOD__):[];

    const good = goods[route.query.id];

    return{
      good
    }
  }
}
</script>
<style lang='less' scoped>
.j-vh{
  header{
    text-align: center;
  }

  main{
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(200,200,200,.5);
  }
}
  

</style>