<template> 
<div class="daojishi"> 
  <span :endTime="endTime" v-html="content">  
    <slot >  
      <!-- {{content}}   -->
    </slot>  
  </span> 
 </div>
</template>  
<script>  
  export default {  
    data(){  
      return {  
      content: '',  
      }  
    },  
    props:{  
      endTime:{  
        type: String,  
        default :'1570711620'  
      },  
      endText:{  
        type : String,  
        default:'已结束'  
      },  
    
    },  
    mounted () {  
     this.countdowm(this.endTime)  
    },  
    methods: {  
      countdowm(timestamp){  
      let self = this;  
      let timer = setInterval(function(){  
        let nowTime = new Date();  
        let endTime = new Date(timestamp * 1000);  
        let t = endTime.getTime() - nowTime.getTime();  
        if(t>0){  
          let day = Math.floor(t/86400000);  
          let hour=Math.floor((t/3600000)%24);  
          let min=Math.floor((t/60000)%60);  
          let sec=Math.floor((t/1000)%60);  
          hour = hour < 10 ? "0" + hour : hour;  
          min = min < 10 ? "0" + min : min;  
          sec = sec < 10 ? "0" + sec : sec;  
          let format = '';  
          if(day > 0){  
            format = `<span style="background:#000; color: aliceblue;">${day}</span>天<span style="background:#000; color: aliceblue;margin:0 5px;">${hour}</span>小时<span style="background:#000; color: aliceblue;">${min}</span>分<span style="background:red; color: aliceblue;margin:0 5px;">${sec}</span> 秒`;  
          }   
          if(day <= 0 && hour > 0 ){  
            format = `${hour}小时${min}分${sec}秒`;   
          }  
          if(day <= 0 && hour <= 0){  
            format =`${min}分${sec}秒`;  
          }  
          self.content = format;  
          }else{  
           clearInterval(timer);  
           self.content = self.endText;  
           self._callback();  
          }  
         },1000);  
        },  
        _callback(){  
        if(this.callback && this.callback instanceof Function){  
           this.callback(...this);  
         }  
      }  
    }  
  }  
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.daojishi{
    width: 100%;
    /* padding: 0 30%; */
    text-align: center;
   
}
/* .td{
    display: block;
    background: #000;
    color: aliceblue;
}
.ts{
    background: red;
    color: aliceblue;
} */
</style>
 