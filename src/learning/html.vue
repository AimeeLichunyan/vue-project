<template>
    <div>
        原始html
        <p>直接使用： {{vueHTML}}</p>
        <p >
            sing v-html directive:
            <span v-html="vueHTML"></span>
        </p>
    </div>
</template>
<script>
export default {
    name: 'originalHTML',
    data() {
        return {
            vueHTML: '<span style="color: red">我是原始的ntml</span>'
        }
    }
}
</script>
