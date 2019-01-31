<template>
  <div class="">
    <animated_wavy_background></animated_wavy_background>
    <v-parallax src="/cloud/cloud04.jpg" height="600">
      <div class="sm8 offset-sm-2" >
        <p class="display-2">Louis Thebault web freelancer</p>
        <p class="headline">Etudiant en 1A à l'ENSIMAG</p>
        <p class="headline">Passionné de dévellopement web</p>
        <p class="headline">A débuté en début Juillet 2018</p>
      </div>
    </v-parallax>
    <!-- <animated_wavy_+background></animated_wavy_background> -->
    <!-- <presentation></presentation> -->
    <br class="my-4">

    <!-- Mes technologies -->
    <h2 class="display-2">Mes technologies</h2>
    <technoplate v-for="techno in technologies" :key="techno.name" :technologies="techno"></technoplate>

    <br class="my-4">
    <!-- Mon parcours -->
    <parcours></parcours>
  </div>
</template>
<script>
import technoplate from '@/components/technoplate.vue'
import animated_wavy_background from '@/components/animated_wavy_background.vue'
import parcours from '@/components/parcours.vue'
import technojson from '@/technologies.json'

export default {
  mounted(){
    this.technologies = technojson
  },
  data: () => ({
    technologies: {}
  }),
  components: {
    technoplate,
    animated_wavy_background,
    parcours
  }
}
</script>
<style lang="scss" scoped>
</style>
