<template>
  <div>
    <Bread>
      <BreadItem :to="`/home`">首页</BreadItem>
      <BreadItem :to="`/category/${categories?.parent?.id}`">{{ categories?.parent?.name }}</BreadItem>
      <BreadItem :to="`/category/sub/${categories?.id}`">{{ categories?.name }}</BreadItem>
      <Transition name="crumbs" mode="out-in">
        <BreadItem :key="goodsDetailData.id">{{ goodsDetailData.name }}</BreadItem>
      </Transition>
    </Bread>
    <el-skeleton :loading="!defaultImg" animated>
      <!-- 暂无数据时的骨架模板 -->
      <template #template>
        <div class="product-info">
          <div class="product-info-photo">
            <div class="product-photo">
              <div class="photo-main">
                <el-skeleton-item variant="image" style="width: 400px; height: 400px" />
              </div>
              <div class="photo-big" ref="bigImg" v-show="isMouseIn"></div>
              <ul class="photo-preview">
                <li v-for=" item in 5" :key="item">
                  <el-skeleton-item variant="image" style="width: 68px; height: 68px" />
                </li>
              </ul>
            </div>
            <ul class="goods-sales">
              <li v-for=" item in 4" :key="item">
                <el-skeleton-item variant="p" style="width: 100px;" />
                <el-skeleton-item variant="p" style="width: 100px;" />
                <el-skeleton-item variant="p" style="width: 100px;" />
              </li>
            </ul>
          </div>
          <div class="product-info-spec">
            <el-skeleton-item variant="p" style="width: 500px; margin-bottom: 40px;" />
            <el-skeleton-item variant="p" style="width: 500px; margin-bottom: 40px;" />
            <el-skeleton-item variant="p" style="width: 500px; margin-bottom: 40px;" />
            <el-skeleton-item variant="p" style="width: 500px; margin-bottom: 40px;" />
            <el-skeleton-item variant="p" style="width: 500px; margin-bottom: 40px;" />
            <el-skeleton-item variant="p" style="width: 500px; margin-bottom: 40px;" />
            <el-skeleton-item variant="p" style="width: 500px; margin-bottom: 40px;" />
            <el-skeleton-item variant="p" style="width: 500px; margin-bottom: 40px;" />
          </div>
        </div>
      </template>
      <!-- 有数据后正常渲染的模板 -->
      <template #default>
        <div class="product-info">
          <div class="product-info-photo">
            <div class="product-photo">
              <div class="photo-main">
                <div class="event" @mousemove="mouseInMainImg" @mouseleave="isMouseIn = false"></div>
                <div class="glass" ref="glass" v-show="isMouseIn"></div>
                <img :src="defaultImg" alt="">
              </div>
              <div class="photo-big-box" ref="bigImg" v-show="isMouseIn">
              </div>
              <ul class="photo-preview">
                <li :class="{ active: defaultImg === mainPictures }" v-for="mainPictures in goodsDetailData?.mainPictures"
                  :key="mainPictures" @mouseenter="mouseInPreview(mainPictures)">
                  <img :src="mainPictures" alt="">
                </li>
              </ul>
            </div>
            <ul class="goods-sales">
              <li>
                <p>人气销量</p>
                <p>200+</p>
                <p><i class="iconfont iconqizhi-"></i>销量人气</p>
              </li>
              <li>
                <p>商品评价</p>
                <p>200+</p>
                <p><i class="iconfont iconpinglun1"></i>查看评价</p>
              </li>
              <li>
                <p>收藏人气</p>
                <p>200+</p>
                <p><i class="iconfont iconshoucang"></i>收藏商品</p>
              </li>
              <li>
                <p>品牌信息</p>
                <p>奔驰</p>
                <p><i class="iconfont icondynamic-filling"></i>品牌主页</p>
              </li>
            </ul>
          </div>
          <div class="product-info-spec">
            <p class="goods-name">{{ goodsDetailData?.name }}</p>
            <p class="goods-desc">{{ goodsDetailData?.desc }}</p>
            <p class="goods-price"><span>{{ goodsDetailData?.price }}</span><span>{{ goodsDetailData?.oldPrice }}</span>
            </p>
            <div class="service">
              <dl>
                <dt>促销</dt>
                <dd>12月好物放松，App领券购买直降120元</dd>
              </dl>
              <dl>
                <dt>配送</dt>
                <dd>至
                  <el-cascader size="large" :options="options" v-model="selectedOptions" @change="handleChange">
                  </el-cascader>
                </dd>
              </dl>
              <dl>
                <dt>服务</dt>
                <dd>
                  <span>无忧退货</span>
                  <span>快速退款</span>
                  <span>免费包邮</span>
                  <a href="javascript:;">了解详情</a>
                </dd>
              </dl>
            </div>
            <div class="sku-container">
              <dl class="sku" v-for="specs in goodsDetailData?.specs" :key="specs.name">
                <dt>{{ specs.name }}</dt>
                <dd>
                  <template v-for="values in specs.values" :key="values.name">
                    <img :class="{ active: values.selected }" v-if="values.picture" :src="values.picture"
                      :alt="values.name" @click="selectAttr(specs, values)">
                    <span :class="{ active: values.selected }" v-else @click="selectAttr(specs, values)">{{ values.name
                    }}</span>
                  </template>
                </dd>
              </dl>
            </div>
            <div class="count">
              <p>数量</p>
              <div class="count-handle">
                <a href="javascript:;"
                  @click="addCartParams.count = addCartParams.count <= 1 ? 1 : --addCartParams.count">-</a>
                <input type="text" readonly v-model="addCartParams.count">
                <a href="javascript:;" @click="++addCartParams.count">+</a>
              </div>
            </div>
            <button class="btn">加入购物车</button>
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script setup lang="ts">
import { GoodsDetaiData, SpecsData, SpecsValuesData } from '@/api/product';
import { regionData } from 'element-china-area-data'
import { computed, onMounted, reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/store/product';
import { useRoute } from 'vue-router';
// 地址数据
const options = ref(regionData)
// 选择的地址数据
const selectedOptions = ref()
const goodsDetail = ref<GoodsDetaiData>()
const defaultImg = ref('')
const isMouseIn = ref(false)
const glass = ref(HTMLDivElement.prototype)
const bigImg = ref(HTMLDivElement.prototype)
const addCartParams = reactive({
  count: 1,
  skuId: ''
})
const route = useRoute()
const productStore = useProductStore()
const { goodsDetailData } = storeToRefs(productStore)
const handleChange = () => {}
// 鼠标移动到产品主图
const mouseInMainImg = (e: MouseEvent) => {
  bigImg.value.style.backgroundImage = `url(${defaultImg.value})`
  isMouseIn.value = true
  // 获取鼠标当前位置
  let mouseX = e.offsetX
  let mouseY = e.offsetY
  // 计算出放大镜移动的位置
  let glassX = mouseX - glass.value.offsetWidth / 2
  let glassY = mouseY - glass.value.offsetHeight / 2
  // 限制放大镜移动的位置(右\下) 
  if (glassX > glass.value.offsetWidth) glassX = glass.value.offsetWidth
  if (glassY > glass.value.offsetHeight) glassY = glass.value.offsetHeight
  // 设置放大镜的位置,并限制放大镜移动的位置(左\上)
  glass.value.style.left = (glassX < 0 ? 0 : glassX) + 'px'
  glass.value.style.top = (glassY < 0 ? 0 : glassY) + 'px'
  // 设置放大背景图片的位置
  bigImg.value.style.backgroundPositionX = -2 * (glassX < 0 ? 0 : glassX) + 'px'
  bigImg.value.style.backgroundPositionY = -2 * (glassY < 0 ? 0 : glassY) + 'px'
}
// 鼠标移动到产品缩略图
const mouseInPreview = (img: string) => {
  defaultImg.value = img
}
// 点击选择商品属性
const selectAttr = (specs: SpecsData, values: SpecsValuesData) => {
  if (values.selected) {
    values.selected = false
    return
  }
  specs.values.forEach(item => {
    item.selected = false
  })
  values.selected = !values.selected
}
onMounted(async () => {
  const result = await productStore.getGoodsDetail(route.params.id as string)
  if (result === 'ok') {
    goodsDetailData.value.specs.forEach(item => {
      item.values.forEach(item2 => {
        item2.selected = false
      })
    })
    defaultImg.value = goodsDetailData?.value.mainPictures[0]
  }
})
const categories = computed(() => {
  return goodsDetailData.value?.categories.find((item: any) => item.layer === 2)
})
</script>

<style lang="less" scoped>
.product-info {
  display: flex;
  background-color: #fff;

  .product-info-photo {
    width: 580px;
    height: 600px;
    padding: 30px 50px;

    .product-photo {
      display: flex;

      .photo-main {
        position: relative;
        width: 400px;
        height: 400px;

        .event {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 2;
        }

        img {
          width: 100%;
          height: 100%;
        }

        .glass {
          position: absolute;
          width: 200px;
          height: 200px;
          background: rgba(0, 0, 0, .2);
        }
      }

      .photo-big-box {
        position: absolute;
        left: 525px;
        width: 400px;
        height: 400px;
        background-repeat: no-repeat;
        background-size: 800px;
        z-index: 999;
        background-color: #f8f8f8;
      }

      .photo-preview {
        width: 80px;
        height: 400px;

        li {
          width: 68px;
          height: 68px;
          margin: 0 0 15px 12px;
          cursor: pointer;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .active {
          border: 2px solid #27ba9b;
        }
      }
    }

    .goods-sales {
      display: flex;
      width: 400px;
      height: 140px;
      align-items: center;
      text-align: center;

      li {
        flex: 1;
        position: relative;

        ~li::after {
          position: absolute;
          top: 10px;
          left: 0;
          height: 60px;
          border-left: 1px solid #e4e4e4;
          content: "";
        }

        p:first-child {
          color: #999;
          font-size: 14px;
        }

        p:nth-child(2) {
          margin-top: 10px;
          color: #cf4444;
        }

        p:last-child {
          color: #666;
          font-size: 14px;
          margin-top: 10px;
          cursor: pointer;

        }

        p:last-child:hover {
          color: #27ba9b;
        }

        i {
          font-size: 13px;
          margin-right: 2px;
          color: #27ba9b;
        }
      }

    }
  }

  .product-info-spec {
    padding: 30px 30px 30px 0;
    font-size: 14px;

    .goods-name {
      font-size: 22px;
    }

    .goods-desc {
      margin-top: 10px;
      color: #999;
    }

    .goods-price {
      margin-top: 10px;

      span:first-child {
        margin-right: 10px;
        color: #cf4444;
        font-size: 22px;
      }

      span:last-child {
        text-decoration: line-through;
        color: #999;
        font-size: 16px;
      }

      & span::before {
        content: '¥';
        font-size: 14px;
      }
    }

    .service {
      width: 500px;
      margin-top: 10px;
      padding: 20px 10px 0 10px;
      background-color: #f5f5f5;

      dl {
        display: flex;
        align-items: center;
        padding-bottom: 20px;

        dt {
          width: 50px;
          color: #999;

        }

        dd {
          color: #666;
          font-size: 14px;

          span {
            margin-right: 10px;

            &::before {
              content: "•";
              color: rgb(39, 186, 155);
              margin-right: 2px;
            }
          }

          a {
            color: #27ba9b;
          }
        }
      }
    }

    .sku-container {
      padding: 20px 0 0px 10px;

      .sku {
        display: flex;
        align-items: center;
        padding: 0 0 10px 0px;
        color: #999;

        dt {
          width: 50px;
        }

        dd {
          cursor: pointer;

          img {
            width: 50px;
            height: 50px;
            margin: 0 10px 5px 0;
            border: 1px solid #e4e4e4;

          }

          .active {
            border: 1px solid #27ba9b;
          }

          span {
            display: inline-block;
            height: 30px;
            line-height: 28px;
            padding: 0 20px;
            border: 1px solid #e4e4e4;
            margin-right: 10px;
            user-select: none;
          }
        }
      }
    }


    .count {
      display: flex;
      align-items: center;
      color: #999;
      padding-left: 10px;

      p {
        width: 50px;
      }

      .count-handle {
        display: flex;
        text-align: center;
        border: 1px solid #e4e4e4;
        color: #666;

        a {
          width: 29px;
          line-height: 28px;
          background: #f8f8f8;
          font-size: 16px;
          color: #666;
        }

        // first-of-type可以指定元素；first-child指所有的子元素中第一个
        &>a:first-of-type {
          border-right: 1px solid #e4e4e4;
        }

        &>a:last-of-type {
          border-left: 1px solid #e4e4e4;
        }

        input {
          width: 60px;
          color: #666;
          text-align: center;
          border: none;
          outline: none;
        }
      }
    }

    .btn {
      width: 180px;
      height: 50px;
      margin-top: 20px;
      border: #27ba9b;
      border-radius: 5px;
      color: #fff;
      background-color: #27ba9b;
      line-height: 50px;
      font-size: 16px;
      text-align: center;
    }
  }
}
</style>