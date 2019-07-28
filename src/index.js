import Vue from 'vue';
import IndexView from './index.vue';
import mavonEditor from 'mavon-editor' // markdown 文本编辑器
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
var vm = new Vue({
  el: '#root',
  render: (h) => h(IndexView)
})
// console.log(vm.$el)
// console.log(document.getElementById('root'))

Vue.component('button-counter',{
  data() {
      return {
          count: 0,
      }
  },
  template:'<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})