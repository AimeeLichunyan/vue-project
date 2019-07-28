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
        <computedWatch />
        <attentionItem />
        <formVue />
        <componentVue />
        <!-- <button-counter /> -->
    </div>
</template>
<script>
import com from './learning/component.vue'
import dataAndWays from './learning/dataAndWays.vue'
import lifeCycle from './learning/lifeCycle.vue'
import htmlVue from './learning/html.vue'
import computedWatch from './learning/computedWatch.vue'
import attentionItem from './learning/attentionItem.vue'
import formVue from './learning/form.vue'
import componentVue from './learning/componentVue.vue'
export default {
    name:'index',
    data() {
        return {
            message: 'this is a message'
        }
    },
    components: {
        com,
        dataAndWays,
        lifeCycle,
        htmlVue,
        computedWatch,
        attentionItem,
        formVue,
        componentVue
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('');
        }
    }
}
</script>
<style lang="less">

</style>
