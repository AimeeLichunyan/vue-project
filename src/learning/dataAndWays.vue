<template>
    <div>
        数据与方法
         <p>{{ data.foo }}</p>
        <!-- 这里的 `foo` 不会更新！ -->
        <button v-on:click="data.foo = 'baz'">Change it</button>
    </div>
</template>
<script>
let obj = {
    foo: 'bar'
}
export default {
    data() {
        return {
            data: {
                foo: 'bar'
            }
        }
    },
    created() {
        Object.freeze(this.data)
    },
    mounted() {
        Object.freeze(this.data)
    }
}
</script>
<style lang="less" scoped>

</style>


