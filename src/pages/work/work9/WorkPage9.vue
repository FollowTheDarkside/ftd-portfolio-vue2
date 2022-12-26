<template>
  <v-app>
    <HeaderMenu/>
    
    <div class="centering">
      <div>
        <h1 class="title">dot matrix format</h1>
        <p class="sub-title">2022/12</p>
        <div class="wrap-image">
          <div class="video">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/90YvXjBnXUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <p class="text-left">
          Images like furniture.<br>
          Music by <a class="link" href="https://iwakurakomaki.wixsite.com/flapfrog" target="_blank" rel="noopener">flap+frog</a><br>
        </p>
        <p class="text-left">
          家具っぽい雰囲気の映像です。
          行ったり来たりします。
        </p>
        <p class="text-left">
          <ul>
            <li><a class="link" href="https://followthedarkside.medium.com/making-of-dot-matrix-format-65586a90bb1e" target="_blank" rel="noopener">Making of "dot matrix format"</a><br/></li>
          </ul>
        </p>
      </div>
    </div>
    <AppFooter/>
  </v-app>
</template>

<style lang="scss" scoped>
@import "../../../styles/common/centering.scss";
@import "../../../styles/common/wrap-image.scss";
.link {
  color: gray;
}
</style>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue';
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',

  components: {
    HeaderMenu,
    AppFooter,
  },

  data: () => ({
    //
  }),
};
</script>