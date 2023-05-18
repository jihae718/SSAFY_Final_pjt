<template>
  <div class="card">
      <h2 class="mb-3">로그인</h2><hr>
      <div class="row">
          <div class="col-lg-8 mx-auto">
                <div class="mb-3">
                    <label for="userID" style="font-size:20px">아이디</label>
                    <input style="font-size: 20px" v-model.trim="credentials.userID" id="userID" type="text" required="required"/>
                </div>
                <div class="mb-3">
                    <label for="password" style="font-size:20px">비밀번호</label>
                    <input style="font-size: 20px" @keypress.enter="login" v-model.trim="credentials.password" id="password" type="password" required="required"/>
                </div>
            <div class="text-white ">
              <button @click="login" class="btn btn-success btn-lg mb-5" id="Login" type="submit">Login</button>
            </div>
            <div style="font-size:25px">
            <p>아직 회원이 아니신가요?</p>
            <router-link to='/signup' id="SignUp">회원가입</router-link>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: "Login",
  data: function () {
    return {
      loginStatus: false,
      credentials: {
        userID: '',
        password: '',
      },
    }
  },
  methods: {
    login: function () {
      axios.post(`${SERVER_URL}/accounts/api-token-auth/`, this.credentials)
      .then( (res) => {
        // console.log(res)
        localStorage.setItem('jwt', res.data.token)
        // this.$emit('login')
        // this.loginStatus = true
        // this.$store.dispatch("loginChange", this.loginStatus)
        this.$router.push({ name: "Recommend" })
        location.reload()
      })
      .catch( (err) => {
        alert("올바른 아이디와 비밀번호를 입력해주세요.")
        console.log(err)
      })
    },
    moveToSignUp: function () {
      this.$router.push({ name: 'SignUp' })
    }
  }
}
</script>

<style>
.card {
  width: 600px;
  height: 600px;
  background-color: rgb(255, 255, 255);
  padding: 30px;
  margin: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  background-image: repeating-linear-gradient(-45deg, rgba(255,255,255, 0.25), rgba(255,255,255, 0.25) 1px, transparent 1px, transparent 6px);
  background-size: 4px;
}

</style>