//实例化对象
new Vue({
    el:"#vue-app",
    data:{
        name:"灭霸",
        job:'web开发',
        website:'http://www.thenewstep.com',
        websiteTag:'<a href="http://www.thenewstep.com">WEBSITETAG</a>'
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
 * methods:用于存储各种方法
 * data-binding：给属性绑定对应的值
 */