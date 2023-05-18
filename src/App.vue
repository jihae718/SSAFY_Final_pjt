<template>
  <div id="app" class="background">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.background{
  background-image: url('@/assets/background.png');
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
