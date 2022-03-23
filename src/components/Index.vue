<template>
  <el-container>
    <el-header>
      <header-bar></header-bar>
    </el-header>
    <el-container>
      <el-aside width="180px">

      </el-aside>
      <el-main>

      </el-main>
    </el-container>
    
    <!-- bottom-control -->
    <!-- music-detail-card  -->
  </el-container>
</template>

<script>
import HeaderBar from "@/components/headerBar/HeaderBar.vue";

export default {
  components: {
    HeaderBar
  },
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  },
  watch: {

  }
}
</script>

<style scoped>
.iconfont {
  font-size: 14px;
  margin: 5px !important;
}
.el-header{
  height: 50px;
  background-color: #ec4141;
  padding: 0;
  margin: 0;
  z-index: 100;
}
.el-aside{
  border-right: 1px solid #ccc;
  height: calc(95vh - 105px) !important;
}
.el-main{
  padding: 0;
}
</style>
