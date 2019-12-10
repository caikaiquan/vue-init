import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/element/styles.scss'
import '@/plugins/element/element.js'
import '@/assets/css/base.scss'
import '@/assets/css/public.css'
import request from '@/plugins/api/request'
import filters from '@/plugins/filter/index'
Vue.config.productionTip = false
Vue.prototype.$request = request
// 全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
})
/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    let $ = parent.$;
    if ($) {
      // 改变壳子菜单的显示名称
      let salesFlow_title = $('#addres').find('[menukey=xslsh5]').find('.title_text');
      if(salesFlow_title[0]){
        salesFlow_title.text(to.meta.title);
      }
    }
    document.title = to.meta.title
  }
  next()
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
