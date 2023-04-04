import { defineStore } from 'pinia'
import productApi from '@/api/product'
import { ElMessage } from 'element-plus'
import { goodsData } from '@/api/home'
interface ProductStoreData {
  kindListData: goodsData
  hotListData: {
    day: goodsData
    week: goodsData
  }
}
export const useProductStore = defineStore('product', {
  state(): ProductStoreData {
    return {
      kindListData: [],
      hotListData: {
        day: [],
        week: []
      }
    }
  },
  actions: {
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
    }
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