<template>
    <div @click="clickMe">
        点击我

        <div>
            <p>显示过滤后的结果: 使用computed</p>
            <p v-for="item in evenNumbers" :key="item">{{item}}</p>
            <p>显示过滤后的结果: 使用methods</p>
            <p v-for="item in even()" :key="item">{{item}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'attentionItem',
    data() {
        return{
            items: [1,2,3,4,5]
        }
    },
    created() {
       
    },
    computed: {
        evenNumbers: function() {
            return this.items.filter(function(item) {
                console.log(item % 2 === 0)
                return item % 2 === 0
            })
        }
    },
    methods: {
        clickMe() {
            console.log(this.items[1])
            this.items[1] = 100;
            this.items.length = 100;
            console.log(this.items)
        },
        even() {
            return this.items.filter(function(item) {
                return item % 2 === 0
            })
        }
    }
}
</script>
<style lang="less" scoped>

</style>
