<template>
  <div id="background">
    <div class="wavecontainer">
      <div class="wave">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="css" scoped>
#background{
  height: 100px;
  /* position: sticky; */
  top: 0;
}
.wavecontainer {
  width: auto;
  height: 100%;
  /* background: url("/wavy-cloud.png");
  background-size: cover; */
  /* background-repeat: no-repeat;
  background-position: center; */
  /* background-attachment: fixed; */
}
.wave {
  position: absolute;
  width: 100%;
  height: 213px;
  /* bottom: 0; */
  top:0;
  left: 0;
  background: url("/wavy-cloud02.png");
  animation: animate 20s linear infinite;
}
@keyframes animate {
  0%
  {
    background-position: 0;
  }
  100%
  {
    background-position: 1360px;
  }
}
/* .wave:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 213px;
  top: 0;
  left: 0;
  opacity: 0.4;
  background: url("/wavy-cloud02.png");
  animation: animate-reverse 10s linear infinite;
} */
/* .wave:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 213px;
  top: 0;
  left: 0;
  opacity: 0.6;
  animation-delay: -0.1s;
  background: url("/wavy-cloud02.png");
  animation: animate 10s linear infinite;
} */
@keyframes animate-reverse {
  0%
  {
    background-position: 1360px;
  }
  100%
  {
    background-position: 0;
  }
}
</style>
