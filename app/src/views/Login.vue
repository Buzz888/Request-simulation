<template>
  <div class="Login">
    <Header style="margin-bottom:15vh"></Header>
    <Card class="Login-card">
      <p slot="title">{{title}}</p>
      <transition name="slide-fade" mode="out-in">
        <div v-if="title==='登陆界面'" key="1">
          <Form @submit="add">
            <FormItem label="用户名">
              <Input v-model="User.username" />
            </FormItem>
            <FormItem label="密码">
              <Input v-model="User.password" placeholder="请输入密码..." />
            </FormItem>
            <Row type="flex" justify="space-between">
              <Button @click="title='注册界面'">注册</Button>
              <Button :loading="flag" type="primary" @click="add">登陆</Button>
            </Row>
          </Form>
        </div>
        <div v-else key="2">
          <Form @submit="add">
            <FormItem label="名称">
              <Input v-model="registerUser.name" />
            </FormItem>
            <FormItem label="用户名">
              <Input v-model="registerUser.username" />
            </FormItem>
            <FormItem label="密码">
              <Input v-model="registerUser.password" placeholder="请输入密码..." />
            </FormItem>
          </Form>
          <Row type="flex" justify="space-between">
            <Button @click="title='登陆界面'">
              <Icon type="ios-arrow-back" />返回
            </Button>
            <Button type="primary" @click="register">
              注册
              <Icon type="ios-arrow-forward" />
            </Button>
          </Row>
        </div>
      </transition>
    </Card>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      title: "登陆界面",
      User: {
        username: "",
        password: ""
      },
      registerUser: {
        name: "",
        username: "",
        password: ""
      },
      flag: false
    };
  },
  methods: {
    add() {
      this.flag = true;
      console.log(this.User);
      this.$router.push("createrequest");
    },
    register() {
      this.flag = true;
      console.log(this.registerUser);
    }
  }
};
</script>
<style scoped>
.Login {
  width: 100vw;
  height: 100vh;
}
.Login-card {
  margin: auto;
  max-width: 500px;
  padding: 10px;
}
</style>
