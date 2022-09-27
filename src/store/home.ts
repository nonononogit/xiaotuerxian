import {defineStore} from 'pinia'
import type{BrandData,BannerData,NewGoodsData,PopularityData,HotBrandData} from '@/api/home'
import homeApi from '@/api/home'
import { ElMessage } from 'element-plus'

// 定义store中请求回来state中的home数据类型
type HomeStoreStateData={
  brandData:BrandData,
  bannerData:BannerData,
  newGoodsData:NewGoodsData,
  popularityData:PopularityData,
  hotBrandData:HotBrandData
}
// 定义Home的store
export const useHomeStore = defineStore('home',{
  state():HomeStoreStateData{
    return {
      brandData:[],
      bannerData:[],
      newGoodsData:[],
      popularityData:[],
      hotBrandData:[]
    }
  },
  actions:{
    // 请求brand数据
    async reqBrandStoreData(){
      try {
        const result = await homeApi.reqBrandData()
        this.brandData = result
      } catch (error) {
        ElMessage.error('请求获取品牌数据失败')
      }
    },
    // 请求banner数据
    async reqBannerStoreData(){
      try {
        const result = await homeApi.reqBannerData()
        this.bannerData = result
      } catch (error) {
        ElMessage.error('请求获取banner数据失败')
      }
    },
    // 请求newGoods数据
    async reqNewGoodsStoreData(){
      try {
        const result = await homeApi.reqNewGoodsData()
        this.newGoodsData = result
      } catch (error) {
        ElMessage.error('请求获取新鲜好物数据失败')
      }
    },
    // 请求人气好物数据
    async reqPopularityStoreData(){
      try {
        const result = await homeApi.reqPopularityData()
        this.popularityData = result
      } catch (error) {
        ElMessage.error('请求人气好物数据失败')
      }
    },
    // 请求热门品牌数据
    async reqHotBrandStoreData(){
      try {
        const result = await homeApi.reqHotBrandData()
        this.hotBrandData = result
      } catch (error) {
        ElMessage.error('请求获取热门品牌数据失败')
      }
    }
  }
})
