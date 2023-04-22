import request from '@/utils/request'
import type { SubBrandsData, SubCategoriesListData } from '@/api/category'
import type { goodsData } from '@/api/home'
export interface GoodsDetaiData {
  brand: SubBrandsData
  categories: SubCategoriesListData
  collectCount: number | string
  commentCount: number | string
  desc: string
  details: DetailsData
  discount: number | string
  evaluationInfo: null
  hotByDay: goodsData
  id: string
  inventory: number | string
  isCollect: null
  isPreSale: boolean
  mainPictures: string[]
  mainVideos: MainVideos
  name: string
  oldPrice: string
  price: string
  recommends: null
  salesCount: number | string
  similarProducts: goodsData
  skus: SkuData[]
  specs: SpecsData[]
  spuCode: string
  userAddresses: null
  videoScale: number | string
}
export type MainVideos = Array<any>
export interface DetailsData {
  pictures: string[]
  properties: Array<{ name: string, value: string }>
}
export interface SkuData {
  id: string
  inventory: 5996
  oldPrice: string
  price: string
  skuCode: string
  specs: Array<{ name: string, valueName: string }>
}
export interface SpecsData {
  selected?: boolean
  name: string
  values: Array<SpecsValuesData>
}
export interface SpecsValuesData {
  desc: string
  name: string
  picture: string
  selected?:boolean
}
export interface CommentHeadData {
  evaluateCount: number
  hasPictureCount: number
  praisePercent: string
  salesCount: number
  tags: Array<{
    tagCount: number
    title: string
  }>
}
export interface CommentContentData {
  counts: number
  items: CommentContentItemData[]
  page: string
  pageSize: number
  pages: number
}
export interface CommentContentItemData {
  content: string
  createTime: string
  id: number
  member: {
    avatar: string
    id: string
    nickname: string
  }
  officialReply: string
  orderInfo: OrderInfoData
  pictures: []
  praiseCount: number
  score: number
  tags: string[]
}
export interface OrderInfoData {
  createTime: string
  quantity: number
  specs: Array<{
    name: string
    nameValue: string
  }>
}
export default {
  // 请求商品详情数据
  reqGoodsDetailData(goodsId: string) {
    return request.get<any, GoodsDetaiData>(`/goods?id=${goodsId}`)
  },
  // 请求同类商品数据
  reqKindData(goodsId: string, limit: string = '16') {
    return request.get<any, goodsData>(`/goods/relevant?id=${goodsId}&limit=${limit}`)
  },
  // 请求热销榜数据
  reqHotData(goodsId: string, limit: string = '3', type: number,) {
    return request.get<any, goodsData>(`/goods/hot?id=${goodsId}&limit=${limit}&type=${type}`)
  },
  // 请求评论区头部数据
  reqCommentHeadData(goodsId: string) {
    return request.get<any, CommentHeadData>(`https://mock.boxuegu.com/mock/1175/goods/${goodsId}/evaluate`)
  },
  // 请求评论区内容数据
  reqCommentContentData(goodsId: string) {
    return request.get<any, CommentContentData>(`https://mock.boxuegu.com/mock/1175/goods/${goodsId}/evaluate/page?page=1&pageSize=10`)
  }
}