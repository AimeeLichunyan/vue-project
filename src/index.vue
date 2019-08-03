<template>
    
    <div class="index">
        <div>
            <leftMenu />
        </div>
        <div>
            <homeMain />
        </div>
    </div>
</template>
<script>
import leftMenu from './home/left';
import homeMain from './home/homeMain'
export default {
    name: 'index',
    components: {
        leftMenu,
        homeMain,
    }
}
</script>
<style lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    .index {
        display: flex;
    }
</style>
