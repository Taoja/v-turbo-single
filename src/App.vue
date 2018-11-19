<template>
  <div id="app">
    <transition>
      <router-view
      :enter="goback ? 'faster animated staticInLeft' : 'faster animated slideInRight2'"
      :leave="goback ? 'faster animated slideOutRight2' : 'faster animated staticOutLeft'"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      goback: false,
    }
  },
  mounted() {
    this.$router.beforeEach((to, from, back) => {
      this.goback = back
    })
  }
}
</script>

<style>
body{
  margin: 0;
  background-color: gray;
}
#app{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
}
#app .T_page{
  background-color: #f6f6f6;
  position: absolute;
}

@-webkit-keyframes staticOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes staticOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.staticOutLeft, .staticInLeft {
  z-index: 2;
  -webkit-animation-name: staticOutLeft;
  animation-name: staticOutLeft;
}

@-webkit-keyframes slideInRight2 {
  from {
    left: 100%;
  }

  to {
    left: 0%;
  }
}

@keyframes slideInRight2 {
  from {
    left: 100%;
  }

  to {
    left: 0%;
  }
}

.slideInRight2 {
  z-index: 3;
  -webkit-animation-name: slideInRight2;
  animation-name: slideInRight2;
}

@-webkit-keyframes slideOutRight2 {
  from {
    left: 0%;
  }

  to {
    left: 100%;
  }
}

@keyframes slideOutRight2 {
  from {
    left: 0%;
  }

  to {
    left: 100%;
  }
}

.slideOutRight2 {
  z-index: 3;
  -webkit-animation-name: slideOutRight2;
  animation-name: slideOutRight2;
}
</style>