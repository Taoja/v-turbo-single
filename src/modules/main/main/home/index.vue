<template>
  <t-page ref="page" :options="{nativeScroll: false}">
    <t-header slot="top" class="header"><div slot="left"></div><img src="@a/logo_turbo@2x.png" class="logo" alt=""></t-header>
    <div>
      <div class="item" v-for="(item, index) in list" :key="index" @click="go(item.url)">
        <div class="left">
          <img :src="item.img" alt="">
        </div>
        <div class="middle">
          <div class="up">{{item.name}}</div>
          <div class="down">{{item.msg}}</div>
        </div>
        <div class="right">
          <img src="@a/image/home/icon_go@3x.png" alt="">
        </div>
      </div>
    </div>
  </t-page>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          name: '基础1',
          msg: '包含颜色、图标、文本等',
          url: '/base/home/home',
          img: require('@a/image/home/icon1@3x.png')
        },
        {
          name: '视图',
          msg: '包含容器、布局、子栏位等',
          url: '/grid/grid/home',
          img: require('@a/image/home/icon2@3x.png')
        },
        {
          name: '操作反馈',
          msg: '包含对话框、消息、动作面板等',
          url: '/operate/operate/home',
          img: require('@a/image/home/icon3@3x.png')
        },
        {
          name: '表单',
          msg: '包含输入框、单选框、复选框等',
          url: '/form/form/home',
          img: require('@a/image/home/icon4@3x.png')
        },
        {
          name: '导航',
          msg: '包含标签栏、导航栏、分段器等',
          url: '/nav/nav/home',
          img: require('@a/image/home/icon6@3x.png')
        },
        {
          name: '图表',
          msg: '包含折柱混搭、条形图、折线区域图等',
          url: '/charts/charts/home',
          img: require('@a/image/home/icon7@3x.png')
        },
        {
          name: '测试',
          msg: '包含折柱混搭、条形图、折线区域图等',
          url: '/test/test/test',
          img: require('@a/image/home/icon7@3x.png')
        }
      ]
    }
  },
  methods: {
    go (e) {
      this.$router.push(e)
    },
    goTest () {
      this.$router.push('/test/test')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@s/functions.scss';
.header{
  background-color: #0c91cb;
  color: white;
}
.logo{
  height: 50%;
}
.item{
  width: p2r(690);
  height: p2r(146);
  background-color: #fff;
  box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.1);
  border-radius: p2r(10);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: p2r(20) auto;
  >.left{
    width: p2r(72);
    height: p2r(72);
    margin-left: p2r(36);
    margin-right: p2r(24);
    >img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  >.middle{
    flex: 1;
    >.up{
      font-size: p2r(28);
      color: #000;
    }
    >.down{
      font-size: p2r(20);
      color: #666;
    }
  }
  >.right{
    width: p2r(16);
    height: p2r(32);
    margin-right: p2r(16);
    >img{
      display: block;
      width: 100%;
    }
  }
}
</style>
