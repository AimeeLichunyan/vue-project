<template>
    <div>
        <p>学习处理用户输入</p>
        <p>{{message}}</p>
        <button v-on:click="reverseMessage">反转消息</button>
        <div>
            <p>双向绑定</p>
            <p>{{message}}</p>
            <input type="text" v-model="message">
        </div>
        <com />
        <dataAndWays />
        <lifeCycle />
        <htmlVue />
        <!-- <computedWatch /> -->
        <attentionItem />
        <p>我试试能不能用inline-template</p>
        <formVue inline-template> 
            <div>
                <p>These are compiled as the component's own template.</p>
                <p>Not parent's transclusion content.</p>
            </div>
        </formVue>
        <formVue />
        <componentVue ref="componentVue" />
        <!-- <my-conponent /> -->
        <p>{{Basemessage}}</p>
        <!-- <baseIndex v-model="Basemessage"/> -->
        <!-- <button-counter /> -->
        {{value}}
        <!-- $listener s事件监听器 -->
        <!-- <self 
        @childdatafir="changeChid1"
        @childDataSec="changeChid2"
         /> -->
         <!-- $listener 在input中的使用  事件监听器 -->
         <!-- <self :value="value" :label="label" @input="input"/> -->
         <!-- sync的使用实例 -->
         <self :shwo.sync="isShow" />
         <button @click="clickChange">点我看看</button>
         <div ref="ss" >
             <p @click="foo2">我在干嘛</p>
         </div>

         <!-- <other /> -->
        <input type="text" v-focus>

        <div v-demo:foo.a.b="message">

        </div>
        <div>
            <p v-pin="200">我的自定义css，看看效果如何</p>
        </div>

        <div>
            <p v-pin2:[direction]="500">我的自定义css，看看效果如何,但是我是灵活多变的</p>
        </div>
    </div>
</template>
<script>
import com from './learning/component.vue'
import dataAndWays from './learning/dataAndWays.vue'
import lifeCycle from './learning/lifeCycle.vue'
import htmlVue from './learning/html.vue'
// import computedWatch from './learning/computedWatch.vue'
import attentionItem from './learning/attentionItem.vue'
import formVue from './learning/form.vue'
import componentVue from './learning/componentVue.vue'
import self from './learning/self.vue'
// import other from './learning/other.vue'

import mixin from './learning/mixin.js'
// import slotVue from './learning/slotVue.vue'
export default {
    name:'index',
    mixins: [mixin],
    // 自定义指令
    directives: {
        focus: {
            inserted: function(el) {
                console.log('el',el)
                el.focus()
            }
        }
    },
    data() {
        return {
            message: '我是老祖宗',
            Basemessage: '我是特别的组件',
            valueChild: true,
            doc: {
                title: '我在实验双向绑定'
            },
            value: '',
            label: '',
            isShow: true,
            direction: 'top'
        }
    },
    created() {
         console.log('data',this)
         console.log('钩子函数被调用')
         
    },
    mounted() {
        console.log('data',this)
        this.bar();
        this.conflicting()
        // this.foo2();
        // console.log('refs',this.$refs.componentVue)
        //  console.log('refs2',this.$refs.ss)
    },
    components: {
        com,
        dataAndWays,
        lifeCycle,
        htmlVue,
        // computedWatch,
        attentionItem,
        formVue,
        componentVue,
        self,
        // slotVue
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('');
        },
        doSomething() {
            console.log('我是自定义事件')
        },
        changeValue() {
            this.valueChild = !this.valueChild
        },
        onFocus() {
            console.log(1);
        },
        changeChid1() {
            alert(1)
        },
        changeChid2() {
            alert(2)
        },
        input() {
            console.log(11)
        },
        clickChange() {
            
            this.isShow = !this.isShow
            console.log(this.isShow)
        },
        bar: function() {
            console.log('bar')
        },
        conflicting: function() {
            console.log('from self')
        }
    }
}
</script>
<style lang="less">

</style>
