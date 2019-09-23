<template>
  <div id="app2">
    <div class="zn_text">{{msg}}</div>
    <div class="zn_left">
        <button v-on:click="changge">改变文字</button>
        <button v-on:click="router">跳转路由</button>
    </div>
     <div class="zn_right">
        <button>父向子组件传值</button>
        <button disabled=true>待定功能</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zn',
  data () {
    return {
      msg: 'MR_zhao',
      num: true,
      id: '0809'
    }
  },
  methods:{
      changge:function(){
          if(this.num){
            this.msg='Hello word'
            this.num=false
          }else{
            this.msg='MR_zhao'
            this.num=true
          }
      },
      router: function(){
        this.$router.push({  //核心语句
            path:'/hell',   //跳转的路径
            query:{           //路由传参时push和query搭配使用 ，作用时传递参数
                id:this.id  
            }
        })
      }
  }
}
</script>
<style scoped>
#app2{overflow: hidden;width: 1200px;margin: 0 auto;}
.zn_text{
 color: red;font-size: 23px;margin-bottom: 30px;
}
.zn_left{float: left;}
.zn_right{float: right;}
</style>
