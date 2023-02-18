import request from '@/utils/request'

// 定义header列表数据类型
export interface HeaderListData {
  id: string,
  name: string,
  children?: HeaderData,
  goods?: goodsData,
  picture: string
}
// 定义goodsList的数据类型
export interface goodsListData {
  desc: string,
  discount: null,
  id: string,
  name: string,
  orderNum: null | number,
  picture: string,
  price: string
}
// 定义brandList的数据类型
export interface BrandListData {
  desc: string,
  logo: null,
  id: string,
  name: string,
  nameEn: null,
  picture: string,
  place: string,
  type: null
}
// 定义bannerList的数据类型
export interface BannerListData {
  hrefUrl: string,
  id: string,
  imgUrl: string,
  type: string
}
// 定义newGoodsList的数据类型
export interface PopularityListData {
  alt: string,
  id: string,
  picture: string,
  title: string,
}
// 定义hotBrandList的数据类型
export interface HotBrandListData {
  desc: string,
  id: string,
  logo: string,
  name: string,
  nameEn: string,
  picture: string,
  place: string,
  type: null
}
// 定义FloorListData的数据类型
export interface FloorListData {
  children: FloorChildrenData
  goods: goodsData
  id: string,
  name: string,
  picture: string,
  saleInfo: string
}
// 定义Floor里的childrenList的数据类型
export interface FloorChildrenListData {
  id: string,
  layer: number,
  name: string,
  parent: null
}
// 定义specialList的数据类型
export interface SpecialListData {
  classificationId: string,
  collectNum: number,
  cover: string,
  createTime: string,
  creator: string,
  detailsUrl: string,
  id: string,
  isDelete: number,
  lowestPrice: number,
  replyNum: number,
  summary: string,
  title: string,
  updateTime: string,
  viewNum: number
}
// 定义请求回来的header数据类型
export type HeaderData = HeaderListData[]
export type goodsData = goodsListData[]
// 定义请求回来的brand数据类型
export type BrandData = BrandListData[]
// 定义请求回来的banner数据类型
export type BannerData = BannerListData[]
// 定义请求回来的new新鲜好物数据类型
export type NewGoodsData = goodsListData[]
// 定义请求回来的人气推荐数据类型
export type PopularityData = PopularityListData[]
// 定义请求回来的热门品牌数据类型
export type HotBrandData = HotBrandListData[]
// 定义请求回来的楼层数据类型
export type FloorData = FloorListData[]
export type FloorChildrenData = FloorChildrenListData[]
// 定义请求回来的最新专题数据类型
export type SpecialData = SpecialListData[]
export default {
  // 请求header数据
  reqHeaderData() {
    return request.get<any, HeaderData>('/home/category/head')
  },
  // 请求品牌数据
  reqBrandData() {
    return request.get<any, BrandData>('/home/brand?limit=6')
  },
  // 请求banner数据
  reqBannerData() {
    return request.get<any, BannerData>('/home/banner')
  },
  // 请求newGoods数据
  reqNewGoodsData() {
    return request.get<any, NewGoodsData>('/home/new')
  },
  // 请求人气推荐数据
  reqPopularityData() {
    return request.get<any, PopularityData>('/home/hot')
  },
  // 请求热门品牌数据
  reqHotBrandData() {
    return request.get<any, HotBrandData>('/home/brand?limit=10')
  },
  // 请求楼层数据
  reqFloorData() {
    return request.get<any, FloorData>('/home/goods')
  },
  // 请求最新专题数据
  reqSpecialData(){
    return request.get<any,SpecialData>('/home/special')
  }
}