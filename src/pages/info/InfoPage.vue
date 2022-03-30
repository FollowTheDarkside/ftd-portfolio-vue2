<template>
  <v-app>
    <HeaderMenu/>
    
    <div class="centering">
      <div>
        <div class="image">
          <v-img
            alt="FTD-BOX"
            src="../../assets/ftd-mirror.jpg"
            width="250"
          />
        </div>
        <p class="text-center">
          FollowTheDarkside (FTD) a.k.a Naoyuki Hirasawa<br/>
          Creative Coder / Visual Artist / Writer / BBOY<br/>
        </p>
      </div>
      <div>
        <h1 class="title">ABOUT</h1>
        <p class="text-left">
          FTD is a Kanagawa-based artist and BBOY. 
          He makes various works while making use of his career as a break dancer and engineer. 
          At the same time, he is also conducting research activities on the theme of dance and AI. 
          In recent years, he has been exploring for new visual expressions using programming and machine learning techniques.
        </p>
        <p class="text-left">
          神奈川を拠点として活動するアーティストでありBBOY。
          ブレイクダンサーやエンジニアとしてのキャリアを活かしつつ様々な作品を制作している。
          同時にダンス×AIをテーマとした研究活動も行っている。
          近年はプログラミングや機械学習の技術を用いた新しいビジュアル表現を模索中。
        </p>
        <p class="text-left">
          My detailed portfolio is <a class="link" href="https://elite-amphibian-dde.notion.site/FTD-3bf5570278204a18b7d52bf519f3d1cb" target="_blank" rel="noopener">here</a>.
        </p>
      </div>
      <div>
        <h1 class="title">REEL</h1>
        <div class="wrap-image">
          <div class="video">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/An7gzMvaOV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div>
        <h1 class="title">LINK</h1>
        <p class="text-center">
          <a class="link" href="https://www.youtube.com/c/FTD22" target="_blank" rel="noopener">YouTube</a><br/>
          <a class="link" href="https://www.instagram.com/followthedarkside/" target="_blank" rel="noopener">Instagram</a><br/>
          <a class="link" href="https://twitter.com/eatora22" target="_blank" rel="noopener">Twitter</a><br/>
          <a class="link" href="https://github.com/FollowTheDarkside" target="_blank" rel="noopener">GitHub</a><br/>
          <a class="link" href="https://vimeo.com/user118759981" target="_blank" rel="noopener">Vimeo</a><br/>
          <a class="link" href="https://hahaeatora.hateblo.jp" target="_blank" rel="noopener">HatenaBlog</a><br/>
          <a class="link" href="https://note.com/hahaeatora" target="_blank" rel="noopener">note</a><br/>
          <a class="link" href="https://followthedarkside.medium.com" target="_blank" rel="noopener">Medium</a><br/>
          <a class="link" href="https://qiita.com/FollowTheDarkside" target="_blank" rel="noopener">Qiita</a><br/>
        </p>
      </div>
    </div>
    <AppFooter/>
  </v-app>
</template>

<style lang="scss" scoped>
@import "../../styles/common/centering.scss";
@import "../../styles/common/wrap-image.scss";
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