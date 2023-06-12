<template>
  <div class="cart container">
    <Bread>
      <BreadItem :to="`/`">首页</BreadItem>
      <BreadItem>购物车</BreadItem>
    </Bread>
    <div class="cart-main">
      <table>
        <thead>
          <tr>
            <th width="120" @click="selectAll">
              <i class="iconfont iconyixuanze" v-if="isSelectAll && cartData.length"></i>
              <i class="iconfont iconweixuanze" v-else></i>
              <span>全选</span>
            </th>
            <th width="400">商品信息</th>
            <th width="220">单价</th>
            <th width="180">数量</th>
            <th width="180">小计</th>
            <th width="140">操作</th>
          </tr>
        </thead>
        <tbody v-if="cartData.length">
          <tr v-for="cart in cartData" :key="cart.id">
            <td @click="cart.selected = !cart.selected">
              <i class="iconfont iconyixuanze" v-if="cart.selected"></i>
              <i class="iconfont iconweixuanze" v-else></i>
            </td>
            <td>
              <div class="goods-info">
                <a class="thumb" href="javascript:;">
                  <img :src="cart.picture" alt="">
                </a>
                <div class="goods-info-attr">
                  <p class="ellipsis" style="text-align: left;">{{ cart.name }}</p>
                  <div class="attr">
                    <div class="attr-intro" @click.stop="selectAttr(cart.skuId)">
                      <span class="attr-span ellipsis">{{ cart.attrsText }}</span>
                      <i class="attr-icon iconfont iconxiangxiajiantou"></i>
                    </div>
                    <div class="hide-attr" v-loading="loading" v-if="showAttr === cart.skuId"
                      v-on-click-outside.bubble="dropdownHandler">
                      <div class="sku">
                        <!-- <dl v-for="specs in cartAttrSkus.specs">
                          <dt>{{ specs.name }}</dt>
                          <dd>
                            <template v-for="value in specs.values" :key="value.name">
                              <span class="select" v-if="!value.picture">{{ value.name }}</span>
                              <img class="select" v-else style="width: 50px; height: 50px" :src="value.picture" />
                            </template>
                          </dd>
                        </dl> -->
                        <GoodsSku :goods="cartAttrSkus"></GoodsSku>
                      </div>
                      <button v-if="!loading">确认</button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td style="font-size:14px;color:#666;">
              ¥{{ cart.price }}
            </td>
            <td>
              <div class="count">
                <a href="javascript:;" @click="(cart.count as number) <= 1 ? 1 : (cart.count as number)--">-</a>
                <input type="text" readonly v-model="cart.count">
                <a href="javascript:;" @click="(cart.count as number)++">+</a>
              </div>

            </td>
            <td style="font-size:16px;color:#CF4444;">
              ¥{{ (Number(cart.price) * Number(cart.count)).toFixed(2) }}
            </td>
            <td class="handle">
              <a href="javascript:;">移入收藏夹</a>
              <a href="javascript:;" @click="deleteCart(cart.skuId)">删除</a>
              <a href="javascript:;">找相似</a>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="6">
              <div class="cart-none">
                <img src="../../assets/images/cart-none.png" alt="">
                <p>购物车内暂时没有商品</p>
                <router-link to="/">继续逛逛</router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="cart-handle">
      <ul class="left">
        <li @click="selectAll">
          <i class="iconfont iconyixuanze" v-if="isSelectAll && cartData.length"></i>
          <i class="iconfont iconweixuanze" v-else></i>
          <span>全选</span>
        </li>
        <li @click="deleteCart">删除商品</li>
        <li>移入收藏夹</li>
        <li>清空失效商品</li>
      </ul>
      <p class="amount">
        共 {{ userStore.totalCount }} 件商品，已选择 {{ userStore.totalSelectCount }} 件，商品合计：
        <span>¥{{ userStore.totalSelectPrice.toFixed(2) ? userStore.totalSelectPrice.toFixed(2) : 0 }}</span>
      </p>
      <button>下单结算</button>
    </div>
    <ProductKind></ProductKind>
  </div>
</template>

<script setup lang="ts">
import ProductKind from '../Product/components/Product-Kind.vue';
import { computed, onMounted, ref, watch } from 'vue';
import { useUserStore } from '@/store/userInfo';
import { storeToRefs } from 'pinia';
import cartApi from '@/api/cart'
import { ElMessage, ElMessageBox } from 'element-plus';
import { useCartStore } from '@/store/cart';
import { vOnClickOutside } from '@vueuse/components'
const userStore = useUserStore()
const { cartData } = storeToRefs(userStore)
const showAttr = ref('')
const cartStore = useCartStore()
const { cartAttrSkus } = storeToRefs(cartStore)

const loading = ref(false)

const selectAll = () => {
  if (!isSelectAll.value) {
    cartData.value.forEach(item => {
      item.selected = true
    })
  } else {
    cartData.value.forEach(item => {
      item.selected = false
    })
  }
}
const deleteCart = ($event: any, ...rest: any[]) => {
  ElMessageBox({
    title: '温馨提示',
    message: '亲，您是否确认删除选中的商品?',
    showCancelButton: true,
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        let ids = []
        if (rest[0]) {
          ids.push(rest[0])
        } else {
          ids = cartData.value.map(item => {
            if (item.selected) return item.skuId
          })
        }
        cartApi.reqDeleteCart(ids).then(() => {
          userStore.getCartData().then(() => {
            ElMessage.success('删除成功！')
          })
        }).catch((error) => {
          ElMessage.error('删除失败，请稍后重试！')
        })
        done()
      } else {
        done()
      }
    }
  }).then(() => { }).catch(() => { })
}
const selectAttr = (skuId: string) => {
  if (showAttr.value) {
    showAttr.value = ''
    return
  } else {
    cartAttrSkus.value = {
      skus: [],
      specs: []
    }
    loading.value = true
    showAttr.value = skuId
    cartStore.getCartAttrSkus(skuId).then(() => {
      loading.value = false
    })
  }
}
const dropdownHandler = (event: any) => {
  showAttr.value = ''
}
onMounted(() => {

})


const isSelectAll = computed(() => {
  return cartData.value.every(item => item.selected)
})

</script>

<style lang="less" scoped>
.cart-main {
  background-color: white;

  table {
    border-collapse: collapse;
    line-height: 24px;

    th,
    td {
      padding: 10px;
      border-bottom: 1px solid #f5f5f5;
      text-align: center;

      &:first-child {
        text-align: left;
        padding-left: 30px;
        color: #999;
      }
    }

    th {
      font-size: 16px;
      font-weight: normal;
      line-height: 50px;
    }

    .goods-info {
      display: flex;
      align-items: center;

      .thumb {
        display: inline-block;

        img {
          width: 100px;
          height: 100px;
        }
      }

      .goods-info-attr {
        width: 280px;
        font-size: 16px;
        padding-left: 10px;
        text-align: left;

        p {
          color: #666;
        }

        .attr {
          height: 28px;
          border: 1px solid #f5f5f5;
          padding: 0 6px;
          position: relative;
          margin-top: 10px;
          display: inline-block;
          font-size: 14px;

          .attr-intro {
            display: flex;

            span {
              display: inline-block;
              max-width: 230px;
              color: #999;
            }

            .iconxiangxiajiantou {
              padding-left: 5px;
              font-size: 14px;
            }
          }
        }
      }

      .hide-attr {
        position: absolute;
        left: -1px;
        top: 40px;
        z-index: 10;
        width: 400px;
        border: 1px solid #27ba9b;
        box-shadow: 2px 2px 4px #e6faf6;
        background: #fff;
        border-radius: 4px;
        font-size: 14px;
        padding: 20px;
        text-align: left;

        &::before {
          content: "";
          width: 12px;
          height: 12px;
          border-left: 1px solid #27ba9b;
          border-top: 1px solid #27ba9b;
          position: absolute;
          left: 12px;
          top: -8px;
          background: #fff;
          transform: scaleX(.8) rotate(45deg);
        }

        .sku {
          padding-left: 10px;
          padding-top: 20px;

          dl {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 10px;
            align-items: center;

            dt {
              width: 50px;
              text-align: left;
              color: #999;
            }

            dd {
              flex: 1;
              color: #666;
              line-height: 40px;
              text-align: left;

              span {
                display: inline-block;
                height: 30px;
                line-height: 28px;
                padding: 0 20px;
                border: 1px solid #e4e4e4;
                margin-right: 10px;
                cursor: pointer;
              }

              img {
                width: 50px;
                height: 50px;
                margin-bottom: 5px;
                border: 1px solid #e4e4e4;
                margin-right: 10px;
                cursor: pointer;
              }

              .select {
                border-color: #27ba9b;
              }

            }
          }
        }

        button {
          margin-left: 60px;
          width: 60px;
          height: 32px;
          font-size: 14px;
          line-height: 32px;
          color: white;
          background: #27ba9b;
          text-align: center;
          border: 1px solid #27ba9b;
          border-radius: 4px;
        }
      }
    }

    .count {
      display: flex;
      border: none;
      border: 1px solid #e4e4e4;
      margin: 0 auto;
      width: 120px;

      a {
        width: 29px;
        line-height: 28px;
        text-align: center;
        background: #f8f8f8;
        font-size: 16px;
        color: #666;
      }

      a:first-child {
        border-right: 1px solid #e4e4e4;
      }

      a:last-child {
        border-left: 1px solid #e4e4e4;
      }

      input {
        width: 60px;
        padding: 0 5px;
        text-align: center;
        color: #666;
        outline: none;
        border: none;
      }

    }

    .handle {
      a {
        display: block;
        line-height: 24px;
        text-align: center;
        color: black;
        font-size: 14px;
      }

      a:nth-child(2) {
        color: #27ba9b;
      }
    }

    .cart-none {
      width: 100%;
      text-align: center;
      padding: 150px 0;
      background: #fff;

      p {
        color: #999;
        padding: 20px 0;
      }

      a {
        display: inline-block;
        width: 180px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        background: #27ba9b;
        color: #fff;
        border-radius: 4px;
        text-align: center;
      }
    }
  }


}

.cart-handle {
  display: flex;
  background: #fff;
  margin-top: 20px;
  height: 80px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  padding: 0 30px;

  .left {
    flex: 1;
    display: flex;

    li~li {
      cursor: pointer;

    }

    li~li {
      margin-left: 20px;

    }
  }

  .amount {
    span {
      color: #cf4444;
      font-size: 18px;
      margin-right: 20px;
      font-weight: 700;
    }
  }

  button {
    width: 180px;
    height: 50px;
    font-size: 16px;
    border: none;
    text-align: center;
    border-radius: 4px;
    background: #27ba9b;
    color: #fff;
  }
}

.iconyixuanze,
.iconweixuanze {
  position: relative;
  top: 1px;
  margin-right: 2px;
}

.iconyixuanze {
  color: @bgColor;
}

.dialog-footer button {
  padding: 8px 15px;
}
</style>