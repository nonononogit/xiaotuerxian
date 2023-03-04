import { defineStore } from 'pinia'
import userApi, { UserInfo,LoginParams } from '@/api/userInfo'
import { ElMessage } from 'element-plus'
// import type{} from '@/api/userInfo'
type UserInfoStoreStateData = {
  userInfo: UserInfo
}
export const userStore = defineStore('user', {
  state(): UserInfoStoreStateData {
    return {
      userInfo: {
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
  },
  actions:{
    async getUserInfo(loginParams:LoginParams){
      try {
        const result = await userApi.reqLogin(loginParams)
        this.userInfo = result
      } catch (error:any) {
        ElMessage.error(error.response.data.message)
      }
    }
  }
})