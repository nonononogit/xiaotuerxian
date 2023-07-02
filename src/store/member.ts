import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import memberApi,{ CheckoutData } from '@/api/member'
interface MemberStoreStateData{
  checkoutData:CheckoutData
}
function initOrderSummaryData(){
  return {
    discountPrice: '',
    goodsCount: '',
    postFee: '',
    totalPayPrice: '',
    totalPrice: '',
  }
}
export const useMemberStore = defineStore('member', {
  state() :MemberStoreStateData {
    return {
      checkoutData:{
        goods: [],
        summary: initOrderSummaryData(),
        userAddresses: []
      }
    }
  },
  actions: {
    async getOrder(){
      try{
        const result = await memberApi.reqOrder()
        this.checkoutData = result
      }catch(error){
        ElMessage.error('请求获取订单数据失败')
      }
    }
  },
  getters: {
  }
})