<template>
    <div>
        <p>{{searchText}}</p>
        <!-- v-model 传递父组件的值，同时接收子组件改变的值 -->
        <custom-input  v-model="searchText"/>
    </div>
</template>
<script>
import customInput from '../compoents/button/index'
export default {
    name: 'componentVue',
    data() {
        return {
            searchText: 'lili',
        }
    },
    components: {
        customInput,
    }
}
</script>
