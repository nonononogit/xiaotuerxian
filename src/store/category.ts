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
        // 给销售属性类添加选择的参考值
        this.categorySubData.saleProperties.forEach(item=>{
          item.select = '1'
        })
      } catch (error) {
        ElMessage.error('请求获取Sub分类数据失败')
      }
    },
    // 请求Temporary数据
    async reqTemporaryStoreData(reqTemporaryParams: ReqTemporaryParams) {
      try {
        const result = await categoryApi.reqTemporaryData(reqTemporaryParams)
        // 如果是筛选，则先清空前次的数据，然后再添加
        if ((reqTemporaryParams.sortField || reqTemporaryParams.inventory || reqTemporaryParams.onlyDiscount) && reqTemporaryParams.page === 1) {
          this.temporaryData.items = []
            this.temporaryData.items.push(...result.items)
        } else {
            this.temporaryData.items.push(...result.items)
        }
        // 将结果长度返回给组件，方便组件判断停止滚动请求数据
        return result.items.length
      } catch (error) {
        ElMessage.error('请求获取Temporary数据失败')
      }
    }
  }
})
