import drag from './drag-table'

const install = function (Vue) {
  Vue.directive('drag-table', drag)
}

if (window.Vue) {
  window['drag-table'] = drag
  Vue.use(install) // eslint-disable-line
}

drag.install = install
export default drag
