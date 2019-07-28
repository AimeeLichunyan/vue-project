<template>
    <div>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
        <div>
            {{fullName}} {{firstName}} {{lastName}}
        </div>
        <p>firstName {{firstName}}</p>

        <div class="watch-ex">
            <input type="text" v-model="firstName">
            <p>{{num}}</p>
        </div>

        <div class="computed-ex" @click="useCount">
            <input type="text" v-model="firstName">
            <input type="text" v-model="lastName">
            <input type="text" v-model="fullName">
            <p>{{numCount}}</p>
        </div>
        <mavon-editor v-model="value"/>

    </div>
</template>
<script>
export default {
    name: 'computedWatch',
    data() {
        return {
            message: 'this is a message',
            // fullName: 'Foo Bar',
            firstName: 'Foo',
            lastName: 'Bar',
            question: '我可不能给你一个正确答案',
            num: 0,
            value:'hhh'
        }
    },
    created() {
        console.log(this)
        console.log(this.reversedMessage)
        this.downCount();
        this.useCount();
    },
    updated() { //是要有数据变化就执行，比如，时间轮询，update函数就一直执行
        console.log('==========我是updated==========')
        this.useCount();
    },
    watch: { //可监听数据的变化，只要数据发生变化，就会触发watch,监听的是当前自己值得变化
        // num(value) { // 
        //     console.log(value)
        //     if(value > 10) {
        //         clearInterval(interval)
        //     }
        // }

        firstName(newValue,oldValue) {
            console.log('newValue',newValue,',oldValue',oldValue)
        }
    },
    computed: { // computed监控的值不能在data中出现，将监听的结果赋值给变量，且此变量不能再data中出现
        reversedMessage() {
            // console.log()
            return this.message.split('').reverse().join('')
        },
        fullName() { 
            console.log(this.firstName + this.lastName)
            return this.firstName + this.lastName
        },
        numCount() { 
            if(this.num > 10) {
                return '过头了哈'
            } else {
                return ''
            }
        }
    },
    methods: {
        downCount() {
            let _this = this
          window.interval = setInterval(() => {
                this.num ++ ;
            }, 1000);
        },
        useCount() {
            console.log('numCount',this.numCount)
            console.log('firstName',this.firstName)
        }
    }
}
</script>
<style lang="less" scoped>

</style>

