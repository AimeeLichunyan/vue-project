import Vue from 'vue'
import IndexView from './main.vue'
// Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
//   // 返回合并后的值
//   console.log('22')
//   console.log(toVal,fromVal)
// }
// Vue.myOption();
// 注册一个全局的自定义指令
// Vue.directive('focus',{
//   inserted: function(el) {
//     el.focus()
//   }
// })
// 自定义点击事件
Vue.directive('demo',{
  bind: function(el,binding,vnode) {
    var s = JSON.stringify;
    console.log('sssss')
    console.log(s)
    console.log(el)
    console.log(binding)
    console.log(vnode)
    el.innerHTML = 
      'name' + s(binding.name) + '<br>' +
      'value' + s(binding.value) + '<br>' +
      'expression' + s(binding.expression) + '<br>' +
      'argument' + s(binding.arg) + '<br>' +
      'modifiers' + s(binding.modifiers) + '<br>' +
      'vnode keys' + Object.keys(vnode).join(', ') + '<br>' 
  }
})

// 自定义css指令
Vue.directive('pin',{
  bind: function(el,binding,vnode) {
    el.style.position = 'fixed';
    el.style.top = binding.value + 'px'
    el.style.left = binding.value + 'px'
  }
})
// 自定义css指令 ,但是我想灵活控制左侧或者顶部，不行写死，怎么办呢
Vue.directive('pin2', {
  bind: function(el,binding,vnode) {
    el.style.position = 'fixed';
    var s = (binding.arg == 'left' ? 'left' : 'top');
    el.style[s] = binding.value + 'px'
  }
})
var vm = new Vue({
  el: '#root',
  render: (h) => h(IndexView)
})
