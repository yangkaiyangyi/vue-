<template>
  <div class="tzz" ref="activityWrapper">
      
     <ul class="tz">
         <li v-for='(item,index) in activityList' :key='index' @click="findProduct(item.id)">
           <a > <img :src="item.imgs[0]" alt="" srcset=""></a> 
           <div class="content">
               <p style="font-size:2px"> {{item.title}}</p>
               <p class="price"> ￥{{item.nowPrice}}</p>
               <p class="oldprice"> <del> ￥{{item.oldPrice}} </del></p>
             </div>
         </li>
     </ul>
  
  </div>
</template>

<script>
import data from "../../common/util/mock.js";
import BScroll from "better-scroll";
export default {
  data() {
    // data属性只是在在组件实例化赋值一次，依赖发生改变不会更新
    // computed相当于对data的字段进行watch 基于依赖进行缓存 ，依赖改变会重新取值
    return {};
  },
  computed: {
    // 放在计算属性内部
    activityList() {
      return this.$store.state.activityList;
    }
  },
  created() {
    this.$nextTick(() => {
      this.activityScroll = new BScroll(this.$refs.activityWrapper, {
        click: true,
        scrollX: true
      });
    });
  },
  methods: {
      findProduct(id) {
          console.log(id)
      let isfind = false
      // 可以进行async异步处理
      axios.get("/api/data").then(res => {
        this.$store.dispatch('productInfo', res.data.activityLists[id-1])
        // 在这里添加路由就不会出现调整页面的数据替换 异步
        this.$router.push({name:"product", params: {id:id}})
      }).catch(err => {
        console.log(err)
      })
    }
      ,
    getdata() {
      axios.get("/api/data").then(res => {
        this.$store.dispatch("addActivity", res.data.activityLists);
        this.data = res.data;
        console.log(res.data);
        console.log(this.activityList);
      });
    }
  },

  mounted() {
    this.getdata();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tzz {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.kb {
  width: 100%;
  height: 20px;
  background: rgba(208, 240, 219, 0.445);
}
.tz {
  width: 800px;
  height: 280px;
  overflow: hidden;
  padding-top: 20px;
  white-space: nowrap;
  overflow-x: auto;
  /* white-space: nowrap;overflow-x:scroll;overflow-y:hidden; */
  /* transform: translate(-649px, 0px) translateZ(0px); */
}
.tz::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}
.tz li {
  float: left;
  height: 100%;
  width: 18%;
  margin: 0 5px;
  list-style: none;
}
.tz a {
  width: 100%;
  height: 60%;
}
.tz .content {
  height: 40%;
  width: 100%;
  font-size: 14px;
}
.content p {
  text-align: center;
  /* font-size: 5px; */
  overflow: hidden;
}
.price {
  color: red;
}
.oldprice {
  color: #ddd;
}
img {
  width: 100%;
}
</style>
