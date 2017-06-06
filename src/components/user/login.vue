<template>
<div class="login">
  <div class="loginHeader">
    <img src="../../common/img/logo7.png">
    <el-button size="small" class="btn-defalt loginBtn">SIGN UP</el-button>
    <el-button size="small" class="btn-defalt loginBtn" style="margin-right:20px;">LOG IN</el-button>
  </div>
  <div class="loginContent">
    <h1>LOG IN</h1>
    <el-form ref="form" :model="form">
      <el-form-item prop="email" :rules="[
                    { required: true, message: 'Type in E-mail', trigger: 'blur' },
                    { type: 'email', message: 'Type in correct E-mail', trigger: 'blur,change' }
                ]">
        <el-input placeholder="E-MAI"></el-input>
      </el-form-item>
      <el-form-item prop="password" :rules="[
                    {
                      required: true,
                      message: 'Type in password',
                      trigger: 'blur'
                    }
                ]">
        <el-input type="password" placeholder="PASSWORD"></el-input>
      </el-form-item>
    </el-form>
    <div class="forgetPassword">
      <p class="info" @click="resetPassword">Forgot password?</p>
    </div>
    <div class="userSubmit"><el-button>LOG IN</el-button></div>
    <div class="userSubmit"><el-button>SIGN UP</el-button></div>
  </div>
</div>
</template>
export default {
  name:'login',
}
<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.login {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    width: 100%;
    height: 100%;

    .loginHeader {
        height: 60px;
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
        padding: 10px 20px;
        img {
            height: 100%;
        }
        .loginBtn {
            float: right;
            margin-top: 5px;
        }
    }
    .loginContent {
        box-sizing: border-box;
        width: 450px;
        background: #fafafa;
        border-radius: 1px;
        position: fixed;
        left: 50%;
        top: 20%;
        margin-left: -225px;
        padding: 20px 40px;
        h1 {
            text-align: center;
            margin: 0;
            font-size: 20px;
            color: #333;
            margin-top: 30px;
            margin-bottom: 30px;
        }
        p {
            padding: 0;
            margin: 0;
            font-size: 14px;
            color: #666;
            line-height: 25px;
            text-align: left;
            margin-bottom: 20px;
        }
        .forgetPassword {
            .info {
                width: 100%;
                margin-bottom: 20px;
                text-align: right;
                cursor: pointer;
                color: #c1272d;
            }
        }
    }
}
</style>
