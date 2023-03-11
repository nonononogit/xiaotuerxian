import request from '@/utils/request'
import type { SubBrandsData, SubCategoriesListData } from '@/api/category'
import type { goodsData } from '@/api/home'
export interface GoodsDetaiData {
  brand: SubBrandsData
  categories: SubCategoriesListData
  collectCount: number
  commentCount: number
  desc: string
  details: DetailsData
  discount: number
  evaluationInfo: null
  hotByDay: goodsData
  id: string
  inventory: number
  isCollect: null
  isPreSale: false
  mainPictures: string[]
  mainVideos: []
  name: string
  oldPrice: string
  price: string
  recommends: null
  salesCount: number
  similarProducts: goodsData
  skus: SkuData[]
  specs: SpecsData[]
  spuCode: string
  userAddresses: null
  videoScale: number
}
export interface DetailsData {
  pictures: string[]
  properties: Array<{ name: string, value: string }>
}
export interface SkuData {
  id:string
  inventory:5996
  oldPrice:string
  price:string
  skuCode:string
  specs:Array<{name:string,valueName:string}>
}
export interface SpecsData{
  name:string
  values:Array<{desc:string,name:string,picture:string}> 
}
export default {
  reqGoodsDetailData(goodsId:string){
    return request.get<any,GoodsDetaiData>(`/goods?id=${goodsId}`)
  }
}