//实例化对象
new Vue({
    el:"#vue-app",
    data:{
        age:30,
        x:0,
        y:0
    },
    methods:{
       add:function(item){
           this.age+=item;
       },
       substract:function(item){
           this.age-=item;
       },
       updataXY:function(event){
        //    console.log(event);
        this.x = event.offsetX;
        this.y = event.offsetY;
       },
       stopmoving:function(event){
        event.stopPropagation();//阻止事件冒泡
       },
       alert:function(){
           alert('hello world')
       }
    }
});

/**
 * el:element需要获取的元素，一定是html中跟容器元素
 * data:用于数据的存储
 * methods:用于存储各种方法
 * data-binding：给属性绑定对应的值
 */