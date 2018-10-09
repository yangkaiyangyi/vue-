//实例化对象
new Vue({
    el: "#vue-app",
    data: {
        a: 0,
        b: 0,
        age: 30
    },
    methods: {
        // addA: function () {
        //     console.log('a');

        //     return this.age + this.a;
        // },
        // addB: function () {
        //     console.log('b');

        //     return this.age + this.b;
        // }
    },
    computed: {
        addA: function () {
            console.log('a');

            return this.age + this.a;
        },
        addB: function () {
            console.log('b');

            return this.age + this.b;
        }
    }
});

/**
 * el:element需要获取的元素，一定是html中跟容器元素
 * data:用于数据的存储
 * methods:用于存储各种方法
 * data-binding：给属性绑定对应的值
 */