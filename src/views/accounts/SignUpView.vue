<template>
  <div class="card">
      <h2 class="mb-3">회원가입</h2><hr>
      <div class="row">
          <div class="col-lg-8 mx-auto">
                <div class="mb-3">
                    <label for="userID" style="font-size:20px">아이디</label>
                    <input style="font-size: 20px" v-model.trim="credentials.userID" id="userID" type="text" required="required"/>
                </div>
                <div class="mb-3">
                    <label for="password" style="font-size:20px">비밀번호</label>
                    <input style="font-size: 20px" v-model.trim="credentials.password" id="password" type="password" required="required"/>
                </div>
                <div class="mb-3">
                    <label for="passwordConfirmation" style="font-size:20px">비밀번호 확인</label>
                    <input style="font-size: 20px" v-model.trim="credentials.passwordConfirmation" id="passwordConfirmation" type="password" required="required"/>
                </div>
                <div class="mb-3">
                    <label for="userID" style="font-size:20px">닉네임</label>
                    <input style="font-size: 20px" v-model.trim="credentials.userID" id="userID" type="text" required="required"/>
                </div>
                <div class="mb-3">
                    <label for="introduce" style="font-size:20px">한줄소개</label>
                    <textarea style="font-size: 20px" v-model.trim="credentials.introduce" id="introduce" type="text" required="required" cols="20" rows="10">한줄소개2</textarea>
                    <input >
                </div>
                <!-- 프로필 파일 첨부 (유저가) -->
            <div class="text-white ">
              <button @click="signUp" class="btn btn-success btn-lg mb-5" id="Login" type="submit">Submit</button>
            </div>

            </div>
          </div>
      </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: "SignUpView",
  data: function () {
    return {
      credentials: {
        userID: '',
        password: '',
        passwordConfirmation: '',
      },
    }
  },
  methods: {
    signUp: function () {
      axios.post(`${SERVER_URL}/accounts/signup/`, this.credentials)
      .then( () => {
        // console.log(res)
        this.$router.push({ name: "Login" })
        alert("가입을 축하드립니다!")
      })
      .catch( (err) => {
        console.log(err)
      })
    },
  }
}
</script>

<style>


</style>