//实例化对象
new Vue({
    el: "#vue-app",
    data: {
       pic:false,
       width:100
    },
    methods: {
      reduce:function(){
          this.width -=10;
          if(this.width<=0){
              this.pic = true;
          }
      },
      restart:function(){
          this.width = 100;
         this.pic = false;
      }
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