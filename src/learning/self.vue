<template>
    <div>
       <!-- <div v-if="show">
           <p>默认初始值{{show}},所以是显示的</p>
           <button @click.stop="closeDiv">关闭</button>
       </div> -->
    <!-- v-bind="$sttrs" -->
    
       <div>
           {{value}}
          <input
           
        >
       </div>

       <!-- $listeners 属性监听属性 -->
        <!-- <div>
            $listeners 我是子组件 属性
            <p @click="$emit('childdatafir')">我是子组件，我发射正常的父子组件传值</p>
            <p @click="$listeners.childdatafir()">我是子组件，我发射是$listeners</p>
            <selfSelf v-on="$listeners"/>
        </div> -->
      <!-- $listeners 在input中的使用 -->
        <!-- <div>
          
            <input type="text"
            v-bind="$attrs"
            v-bind:value="value"
            v-on="inputListeners"
            >
        </div> -->

        <!-- sync的实际应用 -->
        {{show}}
        <div v-if="show">
            <p>我默认是显示的，你点击下面的button，我就会切换方式</p>
            <button @click.stop="closeDiv">关闭</button>
        </div>
        <selfSelf />

    </div>
</template>
<script>
import selfSelf from './self-self.vue'
// import func from './vue-temp/vue-editor-bridge';
export default {
    name: 'self',
    inheritAttrs: false,
    data() {
        return {
        //    value: ''
            message: '我是子组件'
        }
    },
    props: {
        show: Boolean,
         value: String,
         label: String,
        //  isShow: Boolean
    },
    computed: {
        inputListeners:function() {
            return Object.assign({},
            this.$listeners,
            {
                input: function(event) {
                    this.$emit('input',event.target.value)
                }
            }
            )
        },
        // closeDiv() {
        //     this.$emit('update:show',false)
        // }
    },
    components: {
        selfSelf,
    },
     mounted() {
        console.log('我是子组件里面访问',this.message)
        console.log('我在子组件里面访问root',this.$root.isShow)
        console.log('我在子组件里面访问parent',this.$parent.message)
    },
    methods: {
        selfClick() {
            console.log('我是子组件')
            this.$emit('myEvent')
        },
        banding() {
            this.$emit('update:title','newTitle')
        },
        closeDiv() {
            this.$emit('update:show', false)
        }
    }
}
</script>
