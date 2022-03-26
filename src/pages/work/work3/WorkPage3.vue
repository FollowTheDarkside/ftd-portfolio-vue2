<template>
  <v-app>
    <HeaderMenu/>
    
    <div class="centering">
      <div>
        <h1 class="title">時空断裂的東海道五十三次を巡る旅 / Slit Tokaido Scan</h1>
        <p class="sub-title">2020/05</p>
        <div class="wrap-image">
          <div class="video">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/stGOXrW_BLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <p class="text-left">
          This is a video that travels from Edo (Nihonbashi) at the starting point to Kyoto (Sanjo Ohashi) at the ending point through "53 Stations of the Tokaido" with slit scan.
        </p>
        <p class="text-left">
          起点の江戸（日本橋）から終点の京都（三条大橋）まで、53の宿場を巡りながら時空断裂的に旅する映像です。
        </p>
         <p class="text-left">
          Music:<br/>
          Toukaidou set 01 ～ ヒロシゲ36号 by Rin（クロネコラウンジ）
        </p>
        <p class="text-left">
          <ul>
            <li><a class="link" href="https://hahaeatora.hateblo.jp/entry/2020/05/17/190000" target="_blank" rel="noopener">Google Earthで時空断裂的に東海道五十三次を旅してみました</a><br/></li>
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