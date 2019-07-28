<template>
    <div>
        <p>from表单</p>
        <!-- 在“change”时而非“input”时更新  -->
        <p>{{msg}}</p>
        <input v-model.lazy="msg" @change="changeMsg">
    </div>
</template>
<script>
export default {
    name: 'formVue',
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        changeMsg() {
            this.msg = 'lichunhyan';
        }
    }
}
</script>
<style lang="less" scoped>

</style>
