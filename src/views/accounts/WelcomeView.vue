<template>
  <div class='background welcome'>
    <div class="message">
      <p v-if="time<2"><span class="line1">또 다른 당신</span>과</p>
      <p v-if="time>2&&time<5"><span class="line2">은밀한 영화 이야기</span>를 나눠보세요!</p>
      <!-- <router-link to="/login" v-if="time>4" class="line3">❣️ 무비 클럽으로 입장 ❣️ </router-link> -->
      <button type="button" class="btn btn-primary" style="font-size:50px;" v-if="time>4" data-bs-toggle="modal" data-bs-target="#loginModal">❣️ 무비 클럽으로 입장 ❣️</button>
    </div>

    <!-- 로그인 모달 -->
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">로그인</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <div class="md-form mb-5">
          <i class="fas fa-envelope prefix grey-text"></i>
          <input type="email" id="defaultForm-email" class="form-control validate">
          <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label>
        </div>

        <div class="md-form mb-4">
          <i class="fas fa-lock prefix grey-text"></i>
          <input type="password" id="defaultForm-pass" class="form-control validate">
          <label data-error="wrong" data-success="right" for="defaultForm-pass">Your password</label>
        </div>
        <p>아직 회원이 아니신가요?</p>
        <button type="button" class="btn btn-primary" style="font-size:20px;" data-bs-toggle="modal" data-bs-target="#signupModal">회원가입</button>

      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-default">Login</button>
      </div>
    </div>
  </div>
</div>



<!-- 회원가입 모달 -->
<div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Sign up</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <div class="md-form mb-5">
          <i class="fas fa-user prefix grey-text"></i>
          <input type="text" id="orangeForm-name" class="form-control validate">
          <label data-error="wrong" data-success="right" for="orangeForm-name">Your name</label>
        </div>
        <div class="md-form mb-5">
          <i class="fas fa-envelope prefix grey-text"></i>
          <input type="email" id="orangeForm-email" class="form-control validate">
          <label data-error="wrong" data-success="right" for="orangeForm-email">Your email</label>
        </div>

        <div class="md-form mb-4">
          <i class="fas fa-lock prefix grey-text"></i>
          <input type="password" id="orangeForm-pass" class="form-control validate">
          <label data-error="wrong" data-success="right" for="orangeForm-pass">Your password</label>
        </div>

      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-deep-orange">Sign up</button>
      </div>
    </div>
  </div>
</div>



<!-- 영화 유형 고르는 모달 -->



  </div>
</template>

<script>
export default {
  name: 'WelcomeView',
  data(){
    return {
      time: 0,
    }
  },

  // 1초에 1씩 time 증가
  mounted(){
    setInterval(()=>{
      this.time++;
    },1000)
  }
}
</script>

<style>
.background{
  background-image: url('@/assets/welcome.jpg');
}
.message{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: rgb(199, 199, 199);
  overflow: hidden; 
  font-size: 40px;
}
.line1{
  font-size: 70px;
  font-weight: bold;
  color:rgb(255, 196, 0);
}
.line2{
  font-size: 50px;
  font-weight: bold;
  color: rgb(213, 124, 255);
}


.welcome{
  background-image: url('@/assets/welcome.jpg');
}


</style>