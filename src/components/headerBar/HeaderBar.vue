<template>
  <div class="headerBar">
    <div class="left">
      <img src="@/assets/img/logo.png" alt="" />
    </div>
    <div class="center">
      <div class="buttons">
        <i
          class="iconfont icon-arrow-left-bold back"
          @click="$router.go(-1)"
        ></i>
        <i
          class="iconfont icon-arrow-right-bold forward"
          @click="$router.go(1)"
        ></i>
      </div>
      <div>
        <el-popover
          placement="bottom"
          width="300"
          trigger="focus"
          v-model="isSearchPopShow"
        >
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            size="mini"
            slot="reference"
          >
          </el-input>
        </el-popover>
      </div>
    </div>
    <div class="right">
      <div class="user">
        <div class="avatar">
          <!-- 登录注册框 -->
          <el-popover
            placement="bottom"
            width="330"
            trigger="click"
            v-if="!userInfo.avatarUrl"
          >
            <!-- 登录组件占位 -->
            <img
              src="@/assets/img/test.jpg"
              alt=""
              slot="reference"
              @click="isPopoverShow = !isPopoverShow"
            />
          </el-popover>
          <img
            :src="userInfo.avatarUrl"
            alt=""
            slot="reference"
            v-else
            @click="goToPersonal"
          />
        </div>
        <div class="userName" v-if="userInfo.nickname">
          {{ userInfo.nickname }}
        </div>
        <div class="userName" v-else>点击头像登录</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name:'HeaderBar',
    data() {
      return {
        //存放返回的用户数据
        userInfo:{},
        // 是否显示searchPop
        isSearchPopShow:false,
        //是否显示登录注册框
        isPopoverShow:false,
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
@import "./HeaderBar-element.css";
.headerBar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 30000;
}
.left {
  width: 110px;
  margin: 0 50px 0 10px;
}

.left img {
  width: 120%;
}
.center {
  display: flex;
  align-items: center;
}
.buttons {
  color: rgb(235, 235, 235);
  height: 22px;
}
.buttons i {
  background-color: #e13e3e;
  font-size: 15px;
  transform: scale(0.8);
  padding: 5px;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  margin: 0 3px;
}
</style>
