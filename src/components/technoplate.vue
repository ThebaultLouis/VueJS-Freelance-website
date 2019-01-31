<template>
  <div id="" class="my-3" >
    <v-divider class="my-3"></v-divider>

    <h1 class="display-2 font-weight-light mb-3">{{technologies.name}}</h1>

    <v-container
    fluid
    grid-list-md
    >
    <v-layout row wrap justify-center>
      <v-flex class="mr-3 my-4" v-for="techno in technologies.technologies" :key="techno.name" xs12 sm2>
        <v-card >
          <v-img
            :src="techno.image"
            aspect-ratio="1"

          ></v-img>
          <!-- <br> -->
          <!-- <img :src="techno.image" height="100%" width="100%" alt=""> -->
          <v-card-title primary-title>
            <div class="" style="width:100%;">
              <h3 class="headline">{{techno.name}}</h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

  </div>
</template>

<script>
export default {
  props: ["name", "technologies"],
  data: () => ({

  })
}
</script>
<style lang="css" scoped>

</style>
