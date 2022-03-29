<template>
  <v-app>
    <HeaderMenu/>
    
    <div class="centering">
      <div>
        <h1 class="title">Dance AI for Beginners</h1>
        <p class="sub-title">2018/10</p>
        <div class="wrap-image">
          <div class="video">
            <iframe width="1280" height="720" src="https://www.youtube.com/embed/fN873xzIX9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <p class="text-left">
          In the break dance (bboying) which is spreading widely in recent years, 
          we developed a system which automatically discriminates the motion and feeds back the result.
          This system incorporates an AI that uses deep learning of actions in a natural environment using shoes incorporating an acceleration sensor (Smart Footwear Orphe), 
          and classifies skills and steps of a dancer in real time You can evaluate its proficiency degree.
          Now that dance has become compulsory at the educational site, it will be helpful to leaders who are not familiar with dancing.
          Through this system we aim to spread the dance to the general public and further expand the expression by dancers.
        </p>
        <p class="text-left">
          近年広く普及しつつあるブレイクダンスにおいて、動作を自動的に判別してその結果をフィードバックするシステムを開発した。
          このシステムには、加速度センサーを組み込んだ靴（スマートフットウェア Orphe）を使用し自然な環境下での動作を深層学習させたAIが組み込まれており、
          リアルタイムでダンサーの技やステップを分類したりその熟達度を評価したりすることができる。
          教育現場でダンスが必修化された昨今、ダンスに詳しくない指導者の手助けにもなるであろう。
          このシステムを通して一般社会へのダンスの普及やダンサーの表現をより拡張することを目指していく。
        </p>
        <p class="text-left">
          <ul>
            <li><a class="link" href="https://followthedarkside.medium.com/dance-ai-classifies-and-visualizes-the-movements-of-breakdance-by-deep-learning-3a525300035" target="_blank" rel="noopener">Dance AI Recognizes The Movements of Breakdance by Deep Learning</a></li>
            <li><a class="link" href="https://hahaeatora.hateblo.jp/entry/2018/10/14/183000" target="_blank" rel="noopener">【深層学習】AI（人工知能）にブレイクダンスの動きを識別させてみた【行動認識】</a></li>
            <li><a class="link" href="https://adaa.jp/ja/winners/winners2018.html" target="_blank" rel="noopener">2018アジアデジタルアート大賞展FUKUOKA エンターテインメント（産業応用）部門 入賞</a></li>
          </ul>
        </p>
        <p class="text-left">
          [Credit]<br/>
          Daichi Shimizu (Okada laboratory, University of Tokyo)<br/>
          Junya Chikob<br/>
          Tomoya Kotegawa<br/>
          Tomohiro Matsuba<br/>
          Jun Aoyama<br/>
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