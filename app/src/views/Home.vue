<template>
  <div class="Home">
    <Header class="HomeHeader">
      <h3>简易请求系统</h3>
      <div>
        <Avatar shape="square" icon="ios-person" />
        <span style="margin-left:5px">name: {{active}}</span>
      </div>
    </Header>
    <home-menu class="HomeMenu" :active="active" :MenuArray="MenuArray"></home-menu>
    <div class="HomeRight">
      <home-breadcrumb :breadcrumb="breadcrumb"></home-breadcrumb>
      <Card class="HomeCard">
        <transition name="slide-fade2" mode="out-in">
          <router-view></router-view>
        </transition>
      </Card>
    </div>
  </div>
</template>
<script>
import { MenuArray } from "./HomeChild/MenuArray";
export default {
  data() {
    return {
      theme3: "light",
      breadcrumb: [
        { name: "Home", to: "/Home" },
        { name: "文章" },
        { name: 1, to: "/Home/1" }
      ],
      active: 0
    };
  },
  computed: {
    MenuArray() {
      return MenuArray;
    }
  },
  created() {
    if (this.$route.name !== "home")
      this.FindActive(this.$route.path, MenuArray);
  },
  methods: {
    FindActive(name, MenuArray) {
      MenuArray.forEach((item, index) =>
        item["child"].find((itemchild, indexchild) => {
          if (itemchild.to === name) {
            this.active = index * 10 + indexchild;
          }
        })
      );
    }
  },
  components: {
    "home-menu": () => import("../components/Home/HomeMenu"),
    "home-breadcrumb": () => import("../components/Home/HomeBreadcrumb")
  }
};
</script>
<style scoped>
.Home {
  background: #f5f7f9;
  width: 100vw;
  height: 100vh;
}
.HomeMenu {
  position: fixed;
  height: calc(100vh - 50px);
}
.HomeRight {
  margin-left: 250px;
}
.HomeCard {
  margin: 10px 20px 10px 10px;
  height: calc(100vh - 130px);
}
.HomeHeader {
  background: #515a6e;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.1);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
}
</style>
