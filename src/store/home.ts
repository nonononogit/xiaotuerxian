import {defineStore} from 'pinia'
import type{HeaderData,BrandData,BannerData} from '@/api/home'
import headerApi from '@/api/home'
import { ElMessage } from 'element-plus'

// 定义store中请求回来state中的header数据类型
type HeaderStoreStateData={
  headerData:HeaderData,
  brandData:BrandData,
  bannerData:BannerData
}
// 定义header的store
export const useHeaderStore = defineStore('header',{
  state():HeaderStoreStateData{
    return {
      headerData:[],
      brandData:[],
      bannerData:[]
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
    // 请求brand数据
    async reqBrandStoreData(){
      try {
        const result = await headerApi.reqBrandData()
        this.brandData = result
      } catch (error) {
        ElMessage.error('请求获取品牌数据失败')
      }
    },
    // 请求banner数据
    async reqBannerStoreData(){
      try {
        const result = await headerApi.reqBannerData()
        this.bannerData = result
      } catch (error) {
        ElMessage.error('请求获取banner数据失败')
      }
    }
  }
})
