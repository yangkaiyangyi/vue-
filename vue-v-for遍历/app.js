//实例化对象
new Vue({
    el: "#vue-app",
    data: {
       arr:[1,2,3],
       obj:[{
           name:1,
           age:2
       },{name:-1,age:-2}]
    },
    methods: {
      
    },
    computed: {
       
        
    }
});

/**
 * el:element需要获取的元素，一定是html中跟容器元素
 * data:用于数据的存储
 * methods:用于存储各种方法
 * data-binding：给属性绑定对应的值
 */