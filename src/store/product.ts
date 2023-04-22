import { defineStore } from 'pinia'
import productApi, { CommentContentData, CommentHeadData, GoodsDetaiData } from '@/api/product'
import { ElMessage } from 'element-plus'
import { goodsData } from '@/api/home'
interface ProductStoreData {
  goodsDetailData: GoodsDetaiData
  kindListData: goodsData
  hotListData: {
    day: goodsData
    week: goodsData
  }
  commentHeadData: CommentHeadData
  commentContentData: CommentContentData
}
function initGoodsDetailData() {
  return {
    brand: {
      desc: '',
      id: '',
      logo: '',
      name: '',
      nameEn: '',
      picture: '',
      place: '',
      type: ''
    },
    categories: [],
    collectCount: '',
    commentCount: '',
    desc: '',
    details: {
      pictures: [],
      properties: []
    },
    discount: '',
    evaluationInfo: null,
    hotByDay: [],
    id: '',
    inventory: '',
    isCollect: null,
    isPreSale: false,
    mainPictures: [],
    mainVideos: [],
    name: '',
    oldPrice: '',
    price: '',
    recommends: null,
    salesCount: '',
    similarProducts: [],
    skus: [],
    specs: [],
    spuCode: '',
    userAddresses: null,
    videoScale: '',
  }
}
function initCommentHeadData() {
  return {
    evaluateCount: 0,
    hasPictureCount: 0,
    praisePercent: '',
    salesCount: 0,
    tags: []
  }
}
function initCommentContentData() {
  return {
    counts: 0,
    items: [],
    page: '',
    pageSize: 0,
    pages: 0
  }
}
export const useProductStore = defineStore('product', {
  state(): ProductStoreData {
    return {
      goodsDetailData: initGoodsDetailData(),
      kindListData: [],
      hotListData: {
        day: [],
        week: []
      },
      commentHeadData: initCommentHeadData(),
      commentContentData: initCommentContentData()
    }
  },
  actions: {
    async getGoodsDetail(goodsId: string) {
      try {
        const result = await productApi.reqGoodsDetailData(goodsId)
        this.goodsDetailData = result
        return 'ok'
      } catch (error) {
        ElMessage.error('请求获取商品详情数据失败')
      }
    },
    async getKindListData(goodsId: string) {
      try {
        const result = await productApi.reqKindData(goodsId)
        this.kindListData = result
      } catch (error) {
        ElMessage.error('请求获取同类推荐数据失败')
      }
    },
    async getHotListData(goodsId: string) {
      const p1 = productApi.reqHotData(goodsId, '3', 1)
      const p2 = productApi.reqHotData(goodsId, '3', 2)
      try {
        const result = await Promise.all([p1, p2])
        this.hotListData.day = result[0]
        this.hotListData.week = result[1]
      } catch (error) {
        ElMessage.error('请求热销数据失败')
      }
    },
    async getCommentHeadData(goodsId: string) {
      try {
        const result = await productApi.reqCommentHeadData(goodsId)
        this.commentHeadData = result
      } catch (error) {
        ElMessage.error('请求获取评价数据失败')
      }
    },
    async getCommentContentData(goodsId: string) {
      try {
        const result = await productApi.reqCommentContentData(goodsId)
        this.commentContentData = result
      } catch (error) {
        ElMessage.error('请求获取评价数据失败')
      }
    },

  },
  getters: {
    kindItem1Data(): goodsData {
      return [...this.kindListData].splice(0, 4)
    },
    kindItem2Data(): goodsData {
      return [...this.kindListData].splice(4, 4)
    },
    kindItem3Data(): goodsData {
      return [...this.kindListData].splice(8, 4)
    },
    kindItem4Data(): goodsData {
      return [...this.kindListData].splice(12, 4)
    },
  }
})