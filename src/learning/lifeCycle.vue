<template>
    <div id="content">
        生命周期
        <p>{{a}}</p>
        <button @click="a = ++a">你点我呀</button>
    </div>
</template>
<script>
export default {
    name: 'lifeCycle',
    data() {
        return {
            a: 1
        }
    },
    // 数据还没有被渲染
    beforeCreate() {
        console.log(this.a)
    },
    // 数据已经被渲染，dom没有被渲染
    created() {
        // alert(this.a)
        // console.log(this.$el)
        console.log(this.a)
        console.log(document.getElementById('content'))
    },
    // dom结构还没有被渲染
    beforeMount() {
        console.log(document.getElementById('content'))
    },
    // dom结构被渲染 首次渲染结束
    mounted() {
        console.log(document.getElementById('content'))
    },
    // 再次渲染
    beforeUpdate() {
        console.log('======beforeUpdate====')
        console.log(this.a)
        console.log(document.getElementById('content'))
    },
    updated() {
        console.log('======updated====')
        console.log(this.a)
        console.log(document.getElementById('content'))
    },
    beforeDestroy() {
        console.log('======beforeDestroy====')
        console.log(this.a)
        console.log(document.getElementById('content'))
    }
}
</script>
<style lang="less" scoped>

</style>

