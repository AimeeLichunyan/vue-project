<template>
    <div>
        <p>{{searchText}}</p>
        <!-- v-model 传递父组件的值，同时接收子组件改变的值 -->
        <!-- <custom-input  v-model="searchText"/>
        <slotVue /> -->
        <!-- 动态加载组件 -->
        <!-- <button @click="handleChangeView('A')">A</button>
        <button @click="handleChangeView('B')">B</button>
        <button @click="handleChangeView('C')">C</button>
        <component v-bind:is="currentView"></component> -->
    </div>
</template>
<script>
import customInput from '../components/button/index'
import slotVue from '../components/button/slotVue'
export default {
    name: 'componentVue',
    data() {
        return {
            searchText: 'lili',
             currentView:'comA'
        }
    },
    methods: {
        handleChangeView:function(component) {
                    this.currentView='com'+component;
                }

    },
    components: {
        // customInput,
        // slotVue,
                // comA:{
                //     template:`
                //         <div>组件A</div>
                //     `
                // },
                // comB:{
                //     template:`
                //         <div>组件B</div>
                //     `
                // },
                // comC:{
                //     template:`
                //         <div>组件C</div>
                //     `
                // }
    }
}
</script>
