var mixin = {
    data: function() {
        return {
            message: 'hello',
            foo: 'abc'
        }
    },
    created: function() {
        console.log('混入对象的狗子函数被调用')
    },
    methods: {
        foo2: function() {
            console.log('foo')
        },
        conflicting: function() {
            console.log('from mixin')
        }
    }
}
export default mixin