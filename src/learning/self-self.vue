<template>
    <div>
        <!-- 孙子组件 -->
        $listeners 我在孙子 属性验证
        <p @click="$listeners.childDataSec()">我是孙子组件</p>
    </div>
</template>
<script>
export default {
    name: 'self-self',
    data() {
        return {
            message: '我是小孙子'
        }
    },
    mounted() {
        console.log('我是孙子组件里面访问',this.message)
        
        console.log('我在孙子组件里面访问parent',this.$parent.message)
        console.log('我在孙子组件里面访问root',this.$root.isShow)
        console.log('root',this.$root);
        console.log('parent',this.$parent);
    }
}
</script>
