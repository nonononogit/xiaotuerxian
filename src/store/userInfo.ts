import { defineStore } from 'pinia'
import userApi, { UserInfo, LoginParams,  } from '@/api/userInfo'
import cartApi,{CartData} from '@/api/cart'
import { ElMessage } from 'element-plus'
export type UserInfoStoreStateData = {
  userInfo: UserInfo,
  cartData: CartData
}
function initUserInfoData() {
  return {
    account: '',
    avatar: '',
    birthday: '',
    cityCode: '',
    gender: '',
    id: '',
    mobile: '',
    nickname: '',
    profession: '',
    provinceCode: '',
    token: '',
  }
}

const defaultState = {
  userInfo: initUserInfoData(),
  cartData: []
}
export const useUserStore = defineStore('user', {
  state(): UserInfoStoreStateData {
    let { userInfo, cartData } = JSON.parse(localStorage.getItem('userKey') as string) || defaultState
    return {
      userInfo,
      cartData
    }
  },
  actions: {
    async getUserInfo(loginParams: LoginParams) {
      try {
        const result = await userApi.reqLogin(loginParams)
        this.userInfo = result
        ElMessage.success('登录成功')
      } catch (error: any) {
        ElMessage.error(error.response.data.message)
      }
    },
    async getCartData(addCartParams?: { count: number; skuId: string } | undefined) {
      const result = await cartApi.reqCart(addCartParams)
      if(!addCartParams) this.cartData = result
      localStorage.setItem('userKey', JSON.stringify(this.$state))
    },
    reset() {
      Object.assign(this.$state, defaultState)
      localStorage.removeItem('userKey')
    }

  },
  getters: {
    totalPrice: (state) => {
      return state.cartData?.reduce((prev, item) => {
        return prev += Number(item.price) * (item.count as number)
      }, 0)
    },
    totalCount: (state) => {
      return state.cartData?.reduce((prev, item) => {
        return prev += (item.count as number)
      }, 0)
    },
    totalSelectPrice: (state) => {
      return state.cartData?.reduce((prev, item) => {
        if (item.selected) prev += Number(item.price) * (item.count as number)
        return prev
      }, 0)
    },
    totalSelectCount: (state) => {
      return state.cartData?.reduce((prev, item) => {
        if (item.selected) prev += (item.count as number)
        return prev
      }, 0)
    },

  }
})