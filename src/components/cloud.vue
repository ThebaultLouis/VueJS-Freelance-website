<template>
  <div @onclick="$emit('cloud-cliked')" id="card">
      <div class="front">
        <p class="title font-weight-bold">{{techno.title}}</p>
        <p class="subheading">
          {{techno.date}}
        </p>
      </div>
      <div class="back">
        <p class="subheading" v-html="techno.content"></p>
         <div class="social-icons">
          <a v-if="techno.link" :href="techno.link"><i class="fab fa-github" aria-hidden="true"></i></a>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: ['techno', 'isClicked'],
  data: () => ({

  })
}
</script>
<style lang="css" scoped>
#card {
  height: 213px;
  width: 500px;
  margin: auto;
  transform-style: preserve-3d;
  perspective: 600px;
  transition: 0.5s;
}
.front{
  background-image: url('/wavy-cloud02.png');
  background-position: center;
  height: 100%;
  width: 100%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  backface-visibility: hidden;
  transform: rotateX(0deg);
  transition: 0.5s;
}
p:first-child{
  padding-top: 70px;
}
p {
  line-height: 1.5em;

}
#card:hover .front, #card:active .front {
  transform: rotateX(-180deg);
}
#card:hover .back, #card:active .front {
  transform: rotateX(0deg);
}

.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  backface-visibility: hidden;
  transform: rotateX(180deg);
  transition: 0.5s;
  background: #B3E5FC;
  background-image: url('/wavy-cloud02.png');
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}

.social-icons {
  padding: 0;
}
.social-icons a {
  margin: 0;
  padding: 0;
  font-size: 24px;
  color: #fff;
  display: inline-block;
  width: 36px;
  height: 36px;
  text-align: center;
  background: #262626;
  color: #fff;
  text-decoration: none;
  border-radius: 50%;
  transition: 0.5s;
}
.social-icons a .fab {
  line-height: 36px;
}
</style>
