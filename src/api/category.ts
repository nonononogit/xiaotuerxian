import request from '@/utils/request'
import { goodsData } from './home'
// 定义category1级数据
export interface CategoryData {
  children: CategoryChildrenData,
  id: string,
  name: string,
  picture: null | string
}
// 定义category1级数据里children数据和category2级数据
export interface CategoryChildrenList {
  brands: null | SubBrandsListData
  categories: null | SubCategoriesListData
  goods: goodsData
  id: string
  name: string
  parentId: null | string
  parentName: null | string
  picture: null | string
  saleProperties?:SubSalePropertiesListData
}
export type CategoryChildrenData = CategoryChildrenList[]
// 定义category2级数据
// export interface CategorySubData {
//   brands: SubBrandsListData
//   categories: SubCategoriesListData
//   goods: goodsData
//   id: string
//   name: string
//   parentId: string
//   parentName: string
//   picture: null | string
//   saleProperties: SubSalePropertiesListData
// }
// 定义category2级数据里的brands数据
export interface SubBrandsData {
  desc: string | null
  id: string
  logo: string | null
  name: string
  nameEn: string
  picture: string | null
  place: string | null
  type: string | null
}
export type SubBrandsListData = SubBrandsData[]
// 定义category2级数据里的categories数据
export interface SubCategoriesData {
  id: string
  layer: number
  name: string
  parent: null | SubCategoriesData
}
export type SubCategoriesListData = SubCategoriesData[]
// 定义category2级数据里的saleProperties数据
export interface SubSalePropertiesData {
  id: string
  name: string
  properties: SalePropertiesItemListData
  select?:string
}
// 定义category2级数据里的saleProperties数据里的properties数据
export interface SalePropertiesItemData {
  id: string
  name: string
  select?:string
}
export type SalePropertiesItemListData = SalePropertiesItemData[]
export type SubSalePropertiesListData = SubSalePropertiesData[]
// 定义temporary数据
export interface TemporaryData {
  counts: number
  items: goodsData
  page: number
  pageSize: number
  pages: number
}
export type TemporaryListData = TemporaryData[]
// 定义请求temporary数据的参数类型
export interface ReqTemporaryParams {
  categoryId: string
  page: number
  pageSize: number
  inventory?:boolean
  onlyDiscount?:boolean
  sortField?:null|string
  sortMethod?:null|string
  attrs?:AttrsParams[]
}
export interface AttrsParams{
  groupName:string
  propertyName:string
}
export default {
  reqCategoryData(categoryId: string) {
    return request.get<any, CategoryData>('/category', { params: { id: categoryId } })
  },
  reqCategorySubData(categoryId: string) {
    return request.get<any, CategoryChildrenList>('/category/sub/filter?id=' + categoryId)
  },
  reqTemporaryData(reqTemporaryParams:ReqTemporaryParams) {
    return request.post<any,TemporaryData>('/category/goods/temporary',reqTemporaryParams)
  }
}