import request from '@/utils/request'
export interface CheckoutData {
  goods: CheckoutGoodsData[]
  summary: SummaryData
  userAddresses: Array<AddAddressData>
}
export interface CheckoutGoodsData {
  attrsText: string
  count: number | string
  id: string
  name: string
  payPrice: string
  picture: string
  price: string
  skuId: string
  totalPayPrice: string
  totalPrice: string
}
export interface SummaryData {
  discountPrice: number | string
  goodsCount: number | string
  postFee: number | string
  totalPayPrice: number | string
  totalPrice: number | string
}
export interface AddAddressData {
  address: string
  addressTags: null | string
  cityCode: string
  contact: string
  countyCode: string
  fullLocation: string
  isDefault: string | number
  postalCode: string
  provinceCode: string
  receiver: string
  id?:string
}
export interface ResAddressData{
  id:string
}
export interface AreaData {
  provinceCode: string
  cityCode: string
  countyCode: string
  fullLocation: string
}
export default {
  reqOrder() {
    return request.get<any,CheckoutData>('/member/order/pre')
  },
  reqAddAddress(address:AddAddressData){
    if(address.id){
      return request.put<any,ResAddressData>(`/member/address/${address.id}`, address)
    }else{
      return request.post<any,ResAddressData>('/member/address',address)
    }
    
  },
}