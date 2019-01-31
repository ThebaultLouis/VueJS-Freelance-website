<template>
  <div class="">
    <h2 class="display-2">Mon Parcours</h2>
    <v-container
    fluid
    grid-list-md
    >
    <v-layout row wrap justify-center>
    <div id="" class="my-3" >
      <cloud :techno="techno" v-for="techno in technologies" :key="techno.name" >
        </cloud>
    </div>
  </v-layout>
</v-container>
  </div>
</template>
<script>
import parcours from "@/parcours.json"
import cloud from '@/components/cloud.vue'
export default {
  mounted(){
    this.technologies = parcours
  },
  components: {
    cloud
  },
  data: () => ({
    technologies: {},
    selected: {}
  })
}
</script>
<style lang="css" scoped>

</style>
