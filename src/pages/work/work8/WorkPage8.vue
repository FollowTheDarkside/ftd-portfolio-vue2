<template>
  <v-app>
    <HeaderMenu/>
    
    <div class="centering">
      <div>
        <h1 class="title">路地裏拡張</h1>
        <p class="sub-title">2022/09</p>
        <div class="wrap-image">
          <div class="video">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/haA3ctQk2LQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <p class="text-left">
          This is a video work that was screened at FRENZ2022. 
          A walk where the boundary between reality and virtuality becomes ambiguous and you lose track of what is real.
        </p>
        <p class="text-left">
          FRENZ2022にて上映した映像作品です。
          現実と仮想の境界が曖昧となり何が本物か分からなくなる散歩。
        </p>
        <p class="text-left">
          <ul>
            <li><a class="link" href="https://frenz.jp/2022/" target="_blank" rel="noopener">FRENZ2022</a><br/></li>
            <li><a class="link" href="https://followthedarkside.medium.com/making-of-%E8%B7%AF%E5%9C%B0%E8%A3%8F%E6%8B%A1%E5%BC%B5-3f9229557cd8" target="_blank" rel="noopener">Making of “路地裏拡張”</a><br/></li>
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