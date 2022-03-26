<template>
  <v-app>
    <HeaderMenu/>
    
    <div class="centering">
      <div>
        <h1 class="title">THE FRESHEST AI</h1>
        <p class="sub-title">2021/08</p>
        <div class="wrap-image">
          <div class="video">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/RVjdmTPlrQI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <p class="text-left">
          Breakin' is a popular street dance worldwide. 
          One of the reasons it has been so spread is the value of originality. 
          As dancers compete with each other for originality, the range of dance styles has expanded, and breakin' has grown as a culture. 
          We developed "DanceAI", which inspires such dancers to reevaluate their individual originality and facilitates their growth. 
          By training a large amount of the dancers' original movements, DanceAI can provide real-time feedback on the dancers' movements. 
          With this feedback, dancers can dig deeper into their own style.
        </p>
        <p class="text-left">
          ブレイクダンスは世界的に普及した人気のあるダンスである。
          ここまで大きくなった要因として挙げられるのがオリジナリティーという価値観である。
          ダンサーたちがお互いのオリジナリティーを競い合うことでスタイルの幅が広がり、ブレイクダンスはカルチャーとしても成長してきた。
          そんなダンサーに個々のオリジナリティーを見つめ直し、より成長するきっかけを与えるために開発されたのがダンスAIである。
          ダンスAIに各ダンサーの創造した動きを大量に機械学習させることで、AIはダンサーの動きに対してリアルタイムでフィードバックしてくれる。
          そのフィードバックを受けてダンサーは自分自身のスタイルを深く掘り下げることができる。
        </p>
        <p class="text-left">
          このシステムでのポイントは学習データの動きを正しく認識できることではない。
          AIがダンサー自身が感じるものと異なるフィードバックをした時に、ダンサーには何故こうなったのか考えるきっかけを与えることができる。
          赤の他人ではないダンサー自身のダンスを学習したAIであるからこそ、ダンサーは自身の固定概念に囚われず自分のオリジナリティーと向き合うことができるのではないかと私たちは考えている。
          しかし、オリジナリティーにとっては動きだけでなくキャラクターや音楽性も非常に重要であり、今作の手段だけで十分だとは言えない。
          オリジナリティーをより深く追求するために私たちは何ができるだろうか。
        </p>
        <p class="text-left">
          [Credit]<br/>
          Dancer: KAZUKI ROCK (BODY CARNIVAL), SHADE (ARIYA)<br/>
          Producer, Director, Developer: Naoyuki Hirasawa a.k.a FollowTheDarkside<br/>
          Developer: Hiroya Satake a.k.a Silent<br/>
          Developer: Junya Kobayashi a.k.a Chikob<br/>
          Videographer, Beatmaker: Jun Aoyama<br/>
          Researcher: Daichi Shimizu a.k.a. Daichi
        </p>
        <p class="text-left">
          <ul>
            <li><a class="link" href="https://adaa.jp/ja/winners/winners2021.html" target="_blank" rel="noopener">2021アジアデジタルアート大賞展FUKUOKA エンターテインメント（産業応用）部門 優秀賞</a></li>
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