<template>
  <v-app>
    <HeaderMenu/>
    <!-- <div class="centering">
      <div>
        <p class="text-center">
          TOP PAGE
        </p>
      </div>
    </div> -->
    <!-- <v-card elevation="5" class="mx-auto" max-width="344" outlined>
      <v-card-title>Cafe Badilico</v-card-title>
      <v-img 
              src="'@/assets/work/work2.png'"
              aspect-ratio="1"
              class="grey lighten-2"
            >
      </v-img>
    </v-card> -->
    <div class="images-centering">
      <v-row>
        <v-col
          v-for="(image, index) in workImages"
          :key="image.src"
          class="d-flex wrap"
          cols="12" sm="6" md="4" lg="4"
          justify="center" align-content="center"
        >
          <!-- <img src="../../assets/work/work5.png"/> -->
          <!-- <img :src="n.url"/> -->
          <!-- <a class="link" href="https://www.youtube.com/c/FTD22" target="_blank" rel="noopener"> -->
          <!-- <v-card color="blue" elevation="1" class="mx-auto" max-width="640" height="320" tile outlined> -->
            <!-- <v-card-title></v-card-title> -->
            
            <v-img 
              :src="image.src"
              aspect-ratio="1"
              class="grey lighten-2 header-ttl"
              @click="moveLink(image.url)"
              @mouseover="changeGradient(1, index)"
              @mouseleave="changeGradient(0, index)"
              :gradient="image.gradient_over"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            
          <!-- </v-card> -->
          <!-- </a> -->
        </v-col>
      </v-row>
    </div>
    
    <AppFooter/>
  </v-app>
</template>

<style lang="scss" scoped>
@import "../../styles/common/centering.scss";
.link {
  color: gray;
}
.thumb-up::before{
  background-color: #555555;
  color: transparent;
}
.image_link{
  display:block;
}
.image_link v-img{
  transition:0.3s;
  display:block;
  width:100%;
}
.image_link:hover v-img{
  opacity:0.8;
}

.header-ttl:hover,
.header-ttl:hover span {
  color: darkgray !important;
}

</style>

<script>
// import CompanyFooter from '@/components/CompanyFooter.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';
import AppFooter from '@/components/AppFooter.vue'

import constants from '@/common/constants'

export default {
  name: 'App',

  components: {
    // CompanyFooter,
    HeaderMenu,
    AppFooter,
  },

  // data: () => ({
  //   //
  //   workImages: [],
  //   image_src: require("../../assets/work/work1.png"),
  // }),
  data () {
        return {
            //workImages: [],
            image_src: require("../../assets/work/work5.png"),
            workImages: constants.workImages,
            alpha: "to top right, rgba(255,255,255,.0), rgba(255,255,255,.8)",
            alpha2: "to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)",
            overlay: false,
        }
    },
  created: function () {
    // for(var i=0; i<5; i++ ) {
    //   let workImage = "@/src/assets/work/work" + String(i+1) + ".png"
    //   this.workImages.push(require(workImage))
    //   console.log(workImage)
    // }
  },
  methods: {
    moveLink (url) {
      window.open(url, '_self')
      //window.open(url, '_blank')
    },
    changeGradient(flag, index){
      if(flag){
        this.workImages[index].gradient_over = "to top right, rgba(0,0,0,.5), rgba(255,255,255,.5)"
      }else{
        this.workImages[index].gradient_over = "to top right, rgba(0,0,0,.0), rgba(255,255,255,.0)"
      }
    }
  },
};
</script>