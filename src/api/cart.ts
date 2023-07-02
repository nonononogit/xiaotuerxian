import request from '@/utils/request'
import { SkuData, SpecsData } from './product'
export interface Cart {
  attrsText: string
  count: number | string
  discount: null | number | string
  id: string
  isCollect: boolean | string
  isEffective: boolean | string
  name: string
  nowOriginalPrice: string
  nowPrice: string
  picture: string
  postFee: number | string
  price: string
  selected: boolean | string
  skuId: string
  specs: Array<T>
  stock: number | string
}
type T = {}
export type CartData = Cart[]
export interface CartAttrSkusData {
  skus: SkuData[]
  specs: SpecsData[]
}
interface AddCartParams {
  count: number
  skuId: string
}

export default {
  reqCart(addCartParams?: AddCartParams) {
    if (addCartParams) {
      return request.post<any, CartData>('/member/cart', addCartParams)
    } else {
      return request.get<any, CartData>('/member/cart')
    }
  },
  reqDeleteCart(ids: Array<string>) {
    return request.delete<any, null>('/member/cart', { data: { ids } })
  },
  reqGoodsSku(skuId: string) {
    return request.get<any, CartAttrSkusData>('/goods/sku/' + skuId)
  },

}