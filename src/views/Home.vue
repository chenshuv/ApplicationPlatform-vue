<template>
  <div id="sign">
    <svg class="circle" height="300" width="300">
      <circle cx="150" cy="150" r="150" fill="#fbd348" />
    </svg>
    <svg class="triangle" height="400" width="400">
      <polygon points="200,0 000,400 400,400" fill="#e35e6a" />
    </svg>

    <div class="switch" :class="{ active: signup }">
      <img alt="GDUFS Logo" src="../assets/logo2.png" />
      <div class="group">
        <div class="txt">
          <transition name="fade-x" mode="out-in">
            <div class="sign sign-up" v-if="!signup" key="1">
              <div class="container">
                <h3 style="font-size:30px">广东外语外贸大学(南校区)</h3>
                <h3 style="font-size:30px">奖助贷申请平台</h3>
                <span>
                    申请之前先注册账户哦~
                  </span>
                <br />
              </div>
            </div>
          </transition>
          <transition name="fade-y" mode="out-in">
            <div class="sign sign-in" v-if="signup" key="1">
              <div class="container">
                <h3 style="font-size:30px">广东外语外贸大学(南校区)</h3>
                <h3 style="font-size:30px">奖助贷申请平台</h3>
                <span>
                    注册完了就来登录看看吧！
                  </span>
                <br />
<!--                 <button @click.prevent="signup = !signup">Sign In</button>-->
              </div>
            </div>
          </transition>
        </div>
        <div class="toggle">
          <button @click.prevent="signup = !signup">
            <span v-if="signup">登 录</span>
            <span v-else>注 册</span>
          </button>
        </div>
      </div>
      <div class="ornaments">
        <svg class="circle" height="300" width="300">
          <circle cx="150" cy="150" r="150" fill="#ffffff2b" />
        </svg>
        <svg class="triangle" height="400" width="400">
          <polygon points="200,0 000,400 400,400" fill="#ffffff2b" />
        </svg>
        <svg class="group" width="900" height="600">
          <polygon points="749 571,682 497,779 476" fill="#ffffff2b" />
          <polygon
              points="884 329,872 349,845 335,862 307"
              fill="#ffffff2b"
          />
          <polygon
              points="590 209,633 223,622 242,587 233"
              fill="#ffffff2b"
          />
          <polygon points="252 60,237 84,210 72,226 49" fill="#ffffff2b" />
          <polygon
              points="222 445,269 482,254 497,203 460"
              fill="#ffffff2b"
          />
          <polygon points="385 349,278 369,312 282" fill="#ffffff2b" />
        </svg>
      </div>
    </div>

    <div class="form">
      <img alt="GDUFS Logo" src="../assets/logo2.png" />
      <transition name="fade-in" mode="out-in">
        <div class="form-sign-up" v-if="signup" key="1">
          <div class="holder">
            <h3>注 册 账 户</h3>

            <el-form style="width: 100%" :model="registerForm" :rules="registerRules" ref="registerForm" class="registerForm">
              <el-form-item prop="username">
                <el-input v-bind= "loginForm.password" v-model="registerForm.username" placeholder="请输入你的用户名" onfocus="this.placeholder=''" onblur="this.placeholder='请输入你的用户名'"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="registerForm.password" placeholder="请输入你的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入你的密码'"></el-input>
              </el-form-item>
              <el-form-item prop="email">
                <el-input v-model="registerForm.email" placeholder="请输入你的邮箱" onfocus="this.placeholder=''" onblur="this.placeholder='请输入你的邮箱'"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="submit" @click="register('registerForm')" plain>注 册</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </transition>

      <transition name="fade-out" mode="out-in">
        <div class="form-sign-in" v-if="!signup" key="2" :class="{ active: signup }">
          <div class="holder">
            <h3>用 户 登 录</h3>

            <el-form style="width: 100%" :model="loginForm" :rules="loginRules" ref="loginForm" class="loginForm">
              <el-form-item prop="username">
                <el-input v-model="loginForm.username" placeholder="请输入你的用户名" onfocus="this.placeholder=''" onblur="this.placeholder='请输入你的用户名'"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="loginForm.password" placeholder="请输入你的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入你的密码'"></el-input>
              </el-form-item>
              <el-link href="https://element.eleme.io">忘记密码？</el-link>
              <el-form-item>
                <el-button type="submit" @click="login('loginForm')" plain>登 录</el-button>
              </el-form-item>
            </el-form>

          </div>
        </div>
      </transition>
    </div>
  </div>


</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      signup: false,
      registerForm: {
        username: '',
        password: '',
        email: ''
      },
      loginForm: {
        username: '',
        password: '',
      },
      registerRules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        email:[
          { required: true, message: '邮箱不能为空', trigger: 'blur' }
        ]
      },
      loginRules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
      }
    };

  },
  methods: {
    submitForm(formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/api/user/register',
              this.ruleForm).then(function(resp){
            if(resp.data.status === 200){
              _this.$alert('注册成功！', '消息', {
                confirmButtonText: '确定',
                // callback: action => {
                //   _this.$router.push('/BookManage')
                // }
              })
            }else{
              console.log(resp.data)
              _this.$alert(resp.data.msg, '消息', {
                confirmButtonText: '确定',
                // callback: action => {
                //   _this.$router.push('/BookManage')
                // }
              })
            }
          }).catch((error) => {
            console.warn('Not good man :(');
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login(loginForm){
      const _this = this
      this.$refs[loginForm].validate((valid) => {
        if (valid) {
          axios.post('/api/user/login',
              this.loginForm).then(function(resp){
            if(resp.data.status === 200){
              _this.$alert('登录成功！', '消息', {
                confirmButtonText: '确定',
                callback: action => {
                  _this.$router.push({name:'index'})
                }
              })
            }else{
              console.log(resp.data)
              _this.$alert(resp.data.msg, '消息', {
                confirmButtonText: '确定',
              })
            }
          }).catch((error) => {
            console.warn('Not good man :(');
          })
        } else {
          return false;
        }
      })
    },
    register(registerForm){
      const _this = this
      this.$refs[registerForm].validate((valid) => {
        if (valid) {
          axios.post('/api/user/register',
              this.registerForm).then(function(resp){
            if(resp.data.status === 200){
              _this.$alert('注册成功！', '消息', {
                confirmButtonText: '确定',
                // callback: action => {
                //   _this.$router.push('/BookManage')
                // }
              })
            }else{
              console.log(resp.data)
              _this.$alert(resp.data.msg, '消息', {
                confirmButtonText: '确定',
              })
            }
          }).catch((error) => {
            console.warn('Not good man :(');
          })
        } else {
          return false;
        }
      })
    }
  }
}
</script>

<style scoped>

input[type='submit'],
button {
  transition: filter 0.2s;
}
input[type='submit']:hover,
button:hover {
  filter: brightness(0.9);
}

.holder h3 {
  color: var(--accent);
  font-weight: 700;
  margin: 0.5em 1em;
  font-size: xx-large;
  text-align: center;
}
.holder {
  text-align-last: center;
}

.form-sign-up {
  width: 550px;
  position: absolute;
  height: inherit;
  display: grid;
  align-content: center;
  justify-content: center;
  right: 0px;
  clip-path: inset(0px 0px 0px 0px round 5px);
}

.form-sign-in {
  width: 550px;
  position: absolute;
  height: inherit;
  display: grid;
  align-content: center;
  justify-content: center;
  clip-path: inset(0px 0px 0px 0px round 5px);
}

.fade-out-enter-active,
.fade-out-leave-active {
  transition: transform 0.6s, opacity 0.4s, clip-path 0.6s;
}
.fade-out-enter,
.fade-out-leave-to {
  transform: translateX(200px);
  clip-path: inset(0px 550px 0px 0px round 5px) !important;
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: transform 0.6s, opacity 0.4s, clip-path 0.6s;
}
.fade-in-enter,
.fade-in-leave-to {
  transform: translateX(-200px);
  clip-path: inset(0px 0px 0px 550px round 5px) !important;
}

.fade-y-enter-active,
.fade-y-leave-active {
  transition: transform 0.6s, opacity 0.3s;
}
.fade-y-enter,
.fade-y-leave-to {
  transform: translateX(-200px);
  /* opacity: 0; */
}
.fade-x-enter-active,
.fade-x-leave-active {
  transition: transform 0.6s, opacity 0.3s;
}
.fade-x-enter,
.fade-x-leave-to {
  transform: translateX(200px);
  /* opacity: 0; */
}

.toggle > button:focus {
  outline: 0;
}
.toggle > button {
  background: transparent;
  border: 1px solid var(--txt-main);
  color: var(--txt-main);
  padding: 20px 70px;
  border-radius: 200px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.85em;
  /*font-size: 1em;*/
  margin-bottom: 0em;
  /* margin: 2.9em 1em; */
}
.toggle {
  width: 350px;
   /*background: red;*/
  text-align: center;
  /* transition: float 1s; */
  /* float: right; */
  /* position: absolute; */
  transform: translateX(550px);
  transition: all 0.6s ease;
  margin-top: 3em;
}

.active > .ornaments > .group {
  transform: translateX(-20px);
}
.ornaments > .group {
  transition: transform 1s;
}
.ornaments {
  pointer-events: none;
}

.container {
  height: fit-content;
  align-self: center;
  /*padding: -0.5em;*/
  text-align: center;
}
.container > span {
  color: var(--txt-main);
  line-height: 1.7;
  letter-spacing: 0.02em;
  font-weight: 300;
}

/*group*/
.group > .txt {
  width: available;
  display: flow-root;
}
.group {
  width: 100%;
  height: fit-content;
  align-self: center;
  position: absolute;
}


/*switch*/
.switch.active > .group > .toggle {
  /* right: 550px; */
  transform: translateX(0px);
}
.switch {
  position: absolute;
  width: inherit;
  height: inherit;
  z-index: 100;
  clip-path: inset(0px 0px 0px 550px round 5px);
  background: rgb(56, 183, 143);
  background: radial-gradient(
      circle at bottom left,
      rgb(56, 183, 143) 0%,
        /*rgb(99, 45, 333) 0%,*/
      rgb(58, 167, 177) 100%
  );
  transition: clip-path 0.6s;
  overflow: hidden;
  display: grid;
}
.switch img {
  filter: grayscale(1) brightness(3);
}
.switch img,


.triangle {
  position: absolute;
  right: -180px;
  top: -160px;
  z-index: -2;
  transform-origin: 200px;
  animation: example 24s infinite;
}

.circle {
  position: absolute;
  left: -180px;
  bottom: -160px;
  z-index: -2;
  transform-origin: center;
  animation: examplex 55s infinite;
}

#sign {
  background: var(--bg-main);
  width: 900px;
  height: 600px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 25px 50px -12px rgb(0, 0, 0);
  z-index: initial;
  position: relative;
}

.el-button--submit {
  background: var(--accent);
  color: var(--txt-main);
  padding: 20px 70px;
  /*border: 0;*/
  border-radius: 200px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 15px;
  margin-top: 13px;
  /*margin-bottom: 0em;*/
  /*width: 70px;*/
  border: 1px solid var(--txt-main);
  margin-left: 60px;
}

.el-form-item__content {
  line-height: 40px;
  position: relative;
  font-size: 18px;
}


.loginForm{
  margin-top: 50px;
  width: 40px;
  /*background: var(--accent);*/
}
.loginForm>.el-form-item{
  margin: 0px 10px;
  margin-bottom: 10px;
  /*!*background: var(--txt-box-bg);*!*/
  border: 0;
  padding: 0.85em;
  text-align: start;
  text-align-last: left;
  width: -moz-available;
  /*position: relative;*/

  transform: translate(0, -23px);
  background-color: var(--bg-main);
  font-size: 1em;
}
.loginForm>.el-form-item>>>.el-input__inner{
  background: var(--txt-box-bg);
  border: 0;
  font-size: 15px;
  text-align: center;
}
.loginForm>.el-form-item>.el-button{
  background: var(--accent);
  font-size: 18px;
}
.loginForm>.el-link{
  border-bottom: 3px solid #f4f8f7;
  padding: 5px 0px;
  color: black !important;
  margin: 13px;
  margin-top: -10px;
  /*display: block;*/
}

.registerForm{
  margin-top: 50px;
  width: 40px;
  /*background: var(--accent);*/
}
.registerForm>.el-form-item{
  margin: 0px 10px;
  margin-bottom: 10px;
  /*!*background: var(--txt-box-bg);*!*/
  border: 0;
  padding: 0.85em;
  text-align: start;
  text-align-last: left;
  width: -moz-available;
  /*position: relative;*/

  transform: translate(0, -23px);
  background-color: var(--bg-main);
  font-size: 1em;
}
.registerForm>.el-form-item>>>.el-input__inner{
  background: var(--txt-box-bg);
  border: 0;
  font-size: 15px;
  text-align: center;
}
.registerForm>.el-form-item>.el-button{
  background: var(--accent);
  font-size: 18px;
}


body {
  --bg-main: #ffffff;
  --bg-scnd: #f0f4f3;
  --txt-main: white;
  --txt-medium: #e4e4e4;
  --txt-medium-dark: #acacac;
  --txt-box-bg: #f4f8f7;
  --accent: #3aaf9f;
}

.switch.active > .group > .toggle {
  /* right: 550px; */
  transform: translateX(0px);
}
@keyframes rotating /* Safari and Chrome */ {
  0% {
    transform: scale(1) translateY(0em);
  }
  50% {
    transform: scale(1.05) translateY(4em);
  }
  100% {
    transform: scale(1) translateY(0em);
  }
}

svg.group > polygon:nth-child(odd) {
  animation: rotating 25s ease-in-out infinite;
}
svg.group > polygon:nth-child(even) {
  animation: rotating 14s ease-in-out infinite;
}


.active {
  clip-path: inset(0px 550px 0px 0px round 5px) !important;
}
.active > .ornaments > .group {
  transform: translateX(-20px);
}
.ornaments > .group {
  transition: transform 1s;
}
.ornaments {
  pointer-events: none;
}

/*.forgot span {*/
/*  border-bottom: 3px solid #f4f8f7;*/
/*  padding: 5px 0px;*/
/*  color: black !important;*/
/*}*/
/*.forgot {*/
/*  margin: 1.5em;*/
/*  display: block;*/
/*}*/

</style>

