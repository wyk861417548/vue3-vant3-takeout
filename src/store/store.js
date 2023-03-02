import { defineStore } from "pinia";

export const cartStore = defineStore('cart',{
  state:()=>{
    return {
      good:{},

      total:0,
    }
  }
})