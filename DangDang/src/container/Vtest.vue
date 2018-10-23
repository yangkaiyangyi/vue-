<template>
  <div>
    <div class="ks" ></div>
    <div class="mainbox" >
       <div class="leftbox"  > 
         <div class="leftnav" ref="menuWrapper">
           
             <div class="yid">
          <ul >
            <a v-for="(item,index) in leftArr" :key="index">
            <li class="leftnum"  @click="toggle(index)" :class="{'active':index==num }">
               {{item}} 
               <!-- <a href="#aa">{{item}} </a> -->
            </li>
            </a>
          </ul>
          </div>
           
           </div>        
       
          
       </div>
       <div class="middle"></div>
    <div class="rightbox" >
      <div class="rightnav" ref="goodsWrapper">
      <div class="rightid">
          <ul >
            <a v-for="(item,index) in rightArr" :key="index" v-if="num==index">
            <li>
              <!-- <div id="aa"></div> -->
              {{item}}       
            </li>
            </a>
          </ul>
        </div> 
      </div>
   
    </div>

    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"; //引进这个实现上下滑动的插件
export default {
  data() {
    return {
      num: 0,
      leftArr: [
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九",
        "十",
        "十一",
        "十二",
        "十三",
        "十四",
        "十五",
        "十六",
        "十七"
      ],
      rightArr: [
        "ONE",
        "TWO",
        "Three",
        "FOUR",
        "Five",
        "SIX",
        "Seven",
        "EIGHT",
        "NINE",
        "TEN",
        "ELEVEN",
        "TENTWO",
        "EIJJ",
        "NIXXNE",
        "TEXXXN"
      ]
    };
  },
  mounted() {
    // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
   $(document).bind('mousewheel',function(event,data){return false;});//禁止鼠标滚轮事件

    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods: {
    //初始化scroll区域
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true ,//结合BScroll的接口使用,是否将click事件传递,默认被拦截了
        wheel: false //是否监听鼠标滚轮事件
      });
       this.goodsWrapper = new BScroll(this.$refs.goodsWrapper, {
        click: true ,
        wheel: false 
      });
      
    },
    toggle(index) {
      this.num = index;
      console.log(this.num);
      // 每次点击，右边内容区域回到初始位置
      $(".rightid").css("transform","translate(0px,0px)");
    }
  }
  

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainbox {
  display: flex;
  width: 100%;
  background: #eff4fa;
}
.leftbox {
  flex: 20%;
  float: left;
  background: #fff;
  height: 1200px;
}
.leftnav {
  height: 1200px;
}
.yid {
  height: 1400px;
}
.middle {
  flex: 5%;
}
.rightbox {
  flex: 75%;
  float: right;
  background: #fff;
}
.rightnav {
  height: 1200px;
  /* position: relative; */
}

.leftnum {
  width: 100%;
  height: 80px;
  text-align: center;
  font-size: 40px;
  line-height: 80px;
}
.ks {
  height: 100px;
}
.active {
  background: red;
  color: #fff;
}
.rightid {
  font-size: 120px;
  background:gray;
  height: 1400px;
  text-align: center;
  line-height: 1200px;
  /* position: absolute;top: 0;left: 0; */
}
</style>
