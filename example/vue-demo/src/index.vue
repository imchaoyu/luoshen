<!--
* @description: a demo
* @fileName: index
* @author: chaoyu
* @create-date: 2023-01-08 17:25:34
* @version: V1.0.0
!-->
<template>
  <div class="demo">
    <div class="title">this is a title</div>
  </div>
</template>
<script>
export default {
  name: 'demo',
  components: {
  },
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  mounted() {
  },
  created() {
  },
  methods: {
    onClickTest() {
      console.log('hhh')
    }
  }
}
</script>
<style scoped lang='scss'>
.demo {
  .title {
    color: red;
  }
}
</style>