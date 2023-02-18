import { defineStore } from 'pinia'
import { CategoryData, CategorySubData, TemporaryData, ReqTemporaryParams } from '@/api/category'
import categoryApi from '@/api/category'
import { ElMessage } from 'element-plus'

// 定义store中请求回来state中的Category数据类型
type CategoryStoreStateData = {
  categoryData: CategoryData
  categorySubData: CategorySubData
  temporaryData: TemporaryData
}
// 定义初始化Category数据类型
function initCategoryData(): CategoryData {
  return {
    children: [],
    id: '',
    name: '',
    picture: '' || null
  }
}
function initCategorySubData(): CategorySubData {
  return {
    brands: [],
    categories: [],
    goods: [],
    id: '',
    name: '',
    parentId: '',
    parentName: '',
    picture: null || '',
    saleProperties: []
  }
}
function initTemporaryData(): TemporaryData {
  return {
    counts: 1,
    items: [],
    page: 1,
    pageSize: 20,
    pages: 8
  }
}
// 定义Category的store
export const useCategoryStore = defineStore('category', {
  state(): CategoryStoreStateData {
    return {
      categoryData: initCategoryData(),
      categorySubData: initCategorySubData(),
      temporaryData: initTemporaryData()

    }
  },
  actions: {
    // 请求Category数据
    async reqCategoryStoreData(categoryId: string) {
      try {
        const result = await categoryApi.reqCategoryData(categoryId)
        this.categoryData = result
      } catch (error) {
        ElMessage.error('请求获取分类数据失败')
      }
    },
    // 请求Category2级数据
    async reqCategorySubStoreData(categoryId: string) {
      try {
        const result = await categoryApi.reqCategorySubData(categoryId)
        this.categorySubData = result
      } catch (error) {
        ElMessage.error('请求获取Sub分类数据失败')
      }
    },
    // 请求Temporary数据
    async reqTemporaryStoreData(reqTemporaryParams: ReqTemporaryParams) {
      try {
        const result = await categoryApi.reqTemporaryData(reqTemporaryParams)
        if (!result.items.length) {
          return 'done'
        }
        if ((reqTemporaryParams.sortField || reqTemporaryParams.inventory || reqTemporaryParams.onlyDiscount) && reqTemporaryParams.page === 1) {
          this.temporaryData.items = []
          this.temporaryData.items.push(...result.items)
        } else {
          this.temporaryData.items.push(...result.items)
        }
        return 'ok'
      } catch (error) {
        ElMessage.error('请求获取Temporary数据失败')
      }
    }
  }
})
