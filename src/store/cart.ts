import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import cartApi,{ CartAttrSkusData } from '@/api/cart'
interface CartStoreStateData{
  cartAttrSkus:CartAttrSkusData
}
export const useCartStore = defineStore('cart', {
  state() :CartStoreStateData {
    return {
      cartAttrSkus:{
        skus:[],
        specs:[]
      }
    }
  },
  actions: {
    async getCartAttrSkus(skuId:string){
      try {
        const result = await cartApi.reqGoodsSku(skuId)
        this.cartAttrSkus = result
      } catch (error) {
        ElMessage.error('请求获取购物车商品属性失败')
      }
    }
  },
  getters: {
  }
})