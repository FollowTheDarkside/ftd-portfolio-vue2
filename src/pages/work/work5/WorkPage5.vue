<template>
  <v-app>
    <HeaderMenu/>
    
    <div class="centering">
      <div>
        <h1 class="title">BreakGAN feat. BBOY STEEZ</h1>
        <p class="sub-title">2020/10</p>
        <div class="wrap-image">
          <div class="video">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/tQmTFtPibCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <p class="text-left">
          This is a video of a dance battle between a human dancer and an AI dancer. 
          AI learns pre-taken "BBOY STEEZ" dance footage. 
          A network called "GAN" is used for deep learning. 
          <a class="link" href="https://youtu.be/x_3rIJVfVds" target="_blank" rel="noopener">AI can generate new dance videos by learning a large amount of data.</a>
        </p>
        <p class="text-left">
          <a class="link" href="https://youtu.be/tudpECfk434" target="_blank" rel="noopener">The video played by AI is determined based on the features of the human dancer's video captured from the webcam in real-time.</a> 
          A machine learning model for skeleton detection was used to achieve this functionality.
        </p>
        <p class="text-left">
          The concept of this work is to make people aware of new possibilities through AI. 
          Breakdance(Breaking) has a high degree of freedom in dance, and originality is very important. 
          In GAN, there are moments that create movements that make the creator who is also a bboy feel fresh. 
          I thought that dance battle is also a communication between myself and the other party, and it fits the concept of this work. 
          I hope that the expression of dance can be expanded through AI.
        </p>
        <p class="text-left">
          In this work, the light and the projected image are controlled according to the audio. 
          If you want to know the technical details, please also check the following articles(Japanese).
        </p>
        <p class="text-left">
          [Credit]<br/>
          Dancer: STEEZ (THE FLOORRIORZ / TAKE NOTICE)<br/>
          Producer, Deep Learning, Visual Control: Naoyuki Hirasawa (Designium / DanceAI Project)<br/>
          Lighting Design: Kuan-Ying Wu (Designium)<br/>
          Videographer, Beatmaker: Jun Aoyama<br/>
        </p>
        <p class="text-left">
          こちらの映像は人間のダンサーと機械学習の技術を使って生成したAIのダンサーとのダンスバトルをイメージして制作しました。
          人間のダンサーには世界的にも有名なブレイクダンサーであるBBOY STEEZさん（THE FLOORRIORZ）にご協力いただき、AIのダンサーもSTEEZさんのダンス映像を学習して生み出されました。
          詳細は以下のnote記事をご参照ください。
        </p>
        <p class="text-left">
          <ul>
            <li><a class="link" href="https://note.com/thedesignium/n/n76db44572887" target="_blank" rel="noopener">【作品解説】ダンスと機械学習をテーマにした映像「BreakGAN feat. BBOY STEEZ」を制作しました</a><br/></li>
            <li><a class="link" href="https://prtimes.jp/main/html/rd/p/000000011.000043186.html" target="_blank" rel="noopener">【人間 vs AIのダンスバトル！】デザイニウム、機械学習をつかった映像作品「BreakGAN feat. BBOY STEEZ」を公開</a><br/></li>
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