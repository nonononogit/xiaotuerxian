<script lang="ts">
interface IVNode extends VNode {
    type: {__name: string,displayName:string}
}
import { RendererElement, RendererNode, VNode, VNodeArrayChildren, h } from 'vue';
export default {
  name: 'Bread',
  render() {
    const items = this.$slots.default!() as IVNode[]
    const dymanicItems: VNode<RendererNode, RendererElement, { [key: string]: any; }> | VNodeArrayChildren = []
    items.forEach((item: IVNode, index: number) => {
      // 对插槽节点进行判断（是BreadItem和Transition才进行组装）
      if (item.type.__name === 'BreadItem' || item.type.displayName === 'Transition') {
        dymanicItems.push(item)
        if (index < (items.length - 1)) {
          dymanicItems.push(h('i', { class: 'iconfont iconxiangyoujiantou' }))
        }
      }
    })
    return h('div', { class: 'bread' }, dymanicItems)
  }
}
</script>

<style lang="less">
// 去除 scoped 属性，目的：然样式作用到xtx-bread-item组件
.bread {
  display: flex;
  padding: 25px 10px !important; 
  font-size: 14px;
  // ul li:last-child {}
  // 先找到父元素，找到所有的子元素，找到最后一个，判断是不是LI，是就是选中，不是就是无效选择器
  // ul li:last-of-type {}
  // 先找到父元素，找到所有的类型为li的元素，选中最后一个
  &-item {
    a {
      color: #666;
      transition: all .4s;

      &:hover {
        color: @bgColor;
      }
    }
  }

  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
    // 样式的方式，不合理
    // &:last-child {
    //   display: none;
    // }
  }
}
</style>