import Vue from 'vue'
import IndexView from './main.vue'
var vm = new Vue({
  el: '#root',
  render: (h) => h(IndexView)
})
