//实例化对象
new Vue({
    el:"#vue-app",
    data:{
        name:"灭霸",
        job:'web开发'
    },
    methods:{
        greet:function(item){
            return 'good'+item+this.name+'!';
        }
    }
});

/**
 * el:element需要获取的元素，一定是html中跟容器元素
 * data:用于数据的存储
 */