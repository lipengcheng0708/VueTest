<style lang="postcss" scoped>
  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100%);
  }

  .bg-wrap {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .card-wrap {
    position: absolute;
    right: 200px;
    top: 150px;
  }

  .icon-cls {
    font-weight: bold;
    width: 20px;
    font-size: 18px;
  }
</style>
<template>
  <section class="login-container">
    <div class="bg-wrap" :style="{backgroundImage:`url(${login_img})`}">
      <div class="card-wrap">
        <Card style="width:350px" :dis-hover="true">
          <p slot="title">
            <Icon type="log-in"></Icon>
            欢迎登录
          </p>

          <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="userName">
              <Input type="text" v-model="formInline.userName" placeholder="请输入用户名" size="large">
              <Icon type="ios-person-outline" slot="prepend" class="icon-cls"></Icon>
              </Input>
            </FormItem>

            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="请输入密码" size="large">
              <Icon type="ios-lock-outline" slot="prepend" class="icon-cls"></Icon>
              </Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')" long :loading="login_loading">登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        login_loading: false,
        login_img: require("@/assets/login-bg.jpg"),
        formInline: {
          userName: '',
          password: ''
        },
        ruleInline: {
          userName: [
            {required: true, message: '用户名不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {

        console.info("name = " + name);
        console.info("name = " + name.password);
        console.info("name = " + name.userName);

        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$axios({
              url: '/rest/login',//请求的服务端地址
              method: 'post',//请求的方式
              data: this.formInline//请求的表单数据

            }).then(res => {

              console.info('后台返回的数据', res.data);

              if ('success' === res.data) {

                //一、(1)params方法传递对象
                // this.$router.push({path: '/layout', name: 'layout', params: { dataObj: this.formInline}});

                //一、(2)params方法传递变量
                // this.$router.push({path: '/layout', name: 'layout', params: { userName: this.formInline.userName}});

                //二、路由方法传递变量
                this.$router.push({path: '/layout/' + this.formInline.userName});

                console.info("页面跳转成功");

              } else {
                alert(res.data);
              }
            }).catch(err => {

              console.info('报错的信息', err);
            });
          } else {
            this.$Message.error('表单校验失败!');
          }
        })
      },
    }
  }
</script>
