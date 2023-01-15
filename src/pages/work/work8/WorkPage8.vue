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
          A strolling video in which the boundary between reality and virtuality blurs, 
          making it difficult to tell what is real. 
          Based on a single short alleyway, 
          the space perceived by the viewer is expanded by combining conventional video production software as well as programming, 3D scanning, and machine learning methods. 
          This was screened at FRENZ2022.
        </p>
        <p class="text-left">
          現実と仮想の境界が曖昧となり何が本物か分からなくなる散歩映像。
          1つの短い路地裏をベースとして、
          従来の映像制作ソフトのみならずプログラミングや3Dスキャン、機械学習といった手法と組み合わせることで視聴者が認識する空間を拡張する。
          FRENZ2022にて上映。
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