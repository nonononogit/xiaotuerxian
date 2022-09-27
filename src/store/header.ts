import {defineStore} from 'pinia'
import type{HeaderData} from '@/api/home'
import headerApi from '@/api/home'
import { ElMessage } from 'element-plus'

// 定义store中请求回来state中的header数据类型
type HomeStoreStateData={
  headerData:HeaderData
}
// 定义header的store
export const useHeaderStore = defineStore('header',{
  state():HomeStoreStateData{
    return {
      headerData:[],
    }
  },
  actions:{
    // 请求header数据
    async reqHeaderStoreData(){
      try {
        const result = await headerApi.reqHeaderData()
        this.headerData = result
      } catch (error) {
        ElMessage.error('请求获取头部数据失败')
      }
    },
  }
})
