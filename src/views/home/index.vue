<template>
  <div>
    <header class="j-flex">
      <div class="left font22 font900">外卖</div>
      <div class="right text-666">课程<van-icon name="arrow" /></div>
    </header>

    <main>
      <section class="mb-10">
        <van-search  v-model="data.search" show-action placeholder="请输入搜索关键词" @search="onSearch" >
          <template #action>
            <div @click="onClickButton">搜索</div>
          </template>
        </van-search>
      </section>

      <Nav width="25%" img-width="60px" img-height="60px" :num="4" type="big"></Nav>

      <Nav width="20%" img-width="40" img-height="40" :num="10"></Nav>

    </main>

    <section style="height:10px;background-color: #f1f1f1;"></section>

    <footer>
      <van-tabs v-model="active">
        <van-tab :title="item.title" v-for="(item, index) in tabs" :key="index">
          <NavList :title="item.title"></NavList>
        </van-tab>
      </van-tabs>
    </footer>

  </div>

</template>

<script setup>
  import { ref,reactive } from 'vue';

  import Nav from './components/Nav.vue'
  import NavList from './components/NavList.vue'
  
  

  let active =  ref(0)
  let tabs = reactive([
    {title:'天天神犬',id:1},
    {title:'减配送费',id:2},
    {title:'点评高分',id:3},
    {title:'会员满减',id:4},
  ])
  let data = reactive({search:''})

  function onSearch(){

  }
</script>

<style lang="less" scoped>
  header{
    padding: 20px;
    align-items:flex-end;
    background:linear-gradient(to bottom,#ffc312,#ffe087);
  }

  main{
    padding: 10px 15px;
    margin-top: -10px;
    border-radius: 16px 16px 0 0 ;
    background-color: #fff;
  }

  footer{
    padding:0 20px 20px;
  }

</style>