<template>
  <v-app>
    <HeaderMenu/>
    
    <div class="centering">
      <div>
        <h1 class="title">Writings</h1>
        <p class="text-left">
          2020-21 <a class="link" href="https://note.com/thedesignium/m/ma25e9a7c5880" target="_blank" rel="noopener">note - BBOYエンジニア TECHブログ（デザイニウム）</a><br/>
          2020/02 <a class="link" href="https://www.jstage.jst.go.jp/article/pjsai/JSAI2020/0/JSAI2020_3D5OS22b03/_article/-char/ja/" target="_blank" rel="noopener">ブレイクダンスにおける深層学習を用いたダンサーの情動状態の可視化と文化支援</a><br/>
          2019/02 <a class="link" href="https://www.jstage.jst.go.jp/article/pjsai/JSAI2019/0/JSAI2019_2C1J1203/_article/-char/ja" target="_blank" rel="noopener">深層学習を利用したブレイクダンスにおける新しい価値の創出・評価システムの開発</a><br/>
          2018/07 <a class="link" href="https://ipsj.ixsq.nii.ac.jp/ej/index.php?active_action=repository_view_main_item_detail&page_id=13&block_id=8&item_id=190839&item_no=1" target="_blank" rel="noopener">深層学習を利用したブレイクダンスにおける動作の判別・可視化システムの開発とその応用</a><br/>
        </p>
      </div>
      <div>
        <h1 class="title">Media</h1>
        <p class="text-left">
          2020/05 <a class="link" href="https://youtu.be/8poKOxl6j8U?t=1640" target="_blank" rel="noopener">TensorFlow.js Community Show & Tell #2</a><br/>
          2019/08 <a class="link" href="https://www.aps-web.jp/magazine/8118/" target="_blank" rel="noopener">APS - 走り始めた“AIシューズ”。STM32マイコンが楽しさを加速。</a><br/>
          2018/12 <a class="link" href="https://www.sigdance.site/cypher-session-vol-1" target="_blank" rel="noopener">SIGDance - Cypher Session vol. 1</a><br/>
          2018/07 <a class="link" href="https://tomoruba.eiicon.net/articles/531" target="_blank" rel="noopener">TOMORUBA - 【イベントレポート】 デジタルヘルスケア先進国・イスラエルのキーパーソンたちが集結！OKIとの共創によって生み出される世界観とは？</a><br/>
        </p>
      </div>
      <div>
        <h1 class="title">Exibition</h1>
        <p class="text-left">
          2019/11 <a class="link" href="https://collab.t-kougei.ac.jp/5th-exhibition/" target="_blank" rel="noopener">カラボギャラリー第5回企画展-色と対話する展-Talking with Color</a><br/>
        </p>
      </div>
      <div>
        <h1 class="title">DEVELOP / TOOL</h1>
        <p class="text-left">
          <a class="link" href="https://github.com/FollowTheDarkside/threejs-webcam-particle-visualizer" target="_blank" rel="noopener">threejs-wabcam-particle-visualizer</a><br/>
          <a class="link" href="https://github.com/FollowTheDarkside/SensorDataRecorder" target="_blank" rel="noopener">Sensor Data Recorder</a><br/>
          <a class="link" href="https://github.com/FollowTheDarkside/Orphe-Music-Controller-Sample" target="_blank" rel="noopener">Orphe Music Controller Sample</a><br/>
        </p>
      </div>
      <div>
        <h1 class="title">REEL</h1>
        <p class="text-left">
          <a class="link" href="https://youtu.be/An7gzMvaOV4" target="_blank" rel="noopener">2021</a><br/>
          <a class="link" href="https://youtu.be/UU8x5tWKcJU" target="_blank" rel="noopener">2020</a><br/>
          <a class="link" href="https://youtu.be/OFVVCJXA0vM" target="_blank" rel="noopener">2019</a><br/>
        </p>
      </div>
    </div>
    <AppFooter/>
  </v-app>
</template>

<style lang="scss" scoped>
@import "../../styles/common/centering.scss";
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