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
  orderNum: null,
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
export interface newGoodsListData {
  alt: string,
  id: string,
  picture: string,
  title: string
}
// 定义请求回来的header数据类型
export type HeaderData = HeaderListData[]
export type goodsData = goodsListData[]
// 定义请求回来的brand数据类型
export type BrandData = BrandListData[]
// 定义请求回来的banner数据类型
export type BannerData = BannerListData[]
// 定义请求回来的new新鲜好物数据类型
export type NewGoodsData = newGoodsListData[]
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
  reqBannerData(){
    return request.get<any, BannerData>('/home/banner')
  },
  // 请求newGoods数据
  reqNewGoodsData(){
    return request.get<any,NewGoodsData>('/home/new')
  }
}