<template>
  <div>
    <div>{{msg}}</div>
    <div>{{msg2}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: Global.host,
      msg2: ENV.mpaas_domainName
    }
  }
}
</script>
