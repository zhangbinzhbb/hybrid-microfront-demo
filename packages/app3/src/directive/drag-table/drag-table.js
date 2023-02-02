/**
 * 使用方法
 * v-drag-table  = "{}"，指令的传值必须是一个对象
 * 值的配置可以参考 https://github.com/SortableJS/Sortable#readme
 * 值的改变逻辑需要自己写
 * 最重要一点： table 必须写 row-key 不然会乱序
 */
import Sortable from 'sortablejs'
export default {
  bind(el, binding, vnode) {
    const value = binding.value
    if (Object.prototype.toString.call(value) !== '[object Object]') {
      return
    }
    const defaultConfig = {
      animation: 200
    }
    const config = Object.assign(defaultConfig, value)
    const tbody = el.querySelector('.el-table__body-wrapper tbody')
    Sortable.create(tbody, config)
  }
}
