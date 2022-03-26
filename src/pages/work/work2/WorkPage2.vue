<template>
  <v-app>
    <HeaderMenu/>
    
    <div class="centering">
      <div>
        <h1 class="title">DanceAI Performance at STM32 Summit</h1>
        <p class="sub-title">2019/04</p>
        <div class="wrap-image">
          <div class="image">
            <v-img
              alt="FTD-BOX"
              src="../../../assets/work/work-detail/STM32_Summit_2019_demo.png"
              width="480"
            />
          </div>
        </div>
        <p class="text-left">
          At the opening of the STM32 Summit held in Shenzhen, China, a demo performance was conducted by DanceAI, which learned the motion data collected by ORPHE TRACK. 
          In addition to identifying motions using AI, we also performed visualization (openFrameworks) using the features of the data used for deep learning.
        </p>
        <p class="text-left">
          中国深センにて開催されたSTM32 Summitのオープニングにて、ORPHE TRACKにより収集されたモーションデータを学習したDanceAIによるデモパフォーマンスを実施。
          AIによる動作の識別に加え、深層学習に用いたデータの特徴量を用いたビジュアライズ（openFrameworks）も行いました。
        </p>
        <p class="text-left">
          <ul>
            <li><a class="link" href="https://blog.st.com/day-1-stm32-summit-product-demonstrations-partner-showcase-and-application-focus-presentations/" target="_blank" rel="noopener">STM32 Summit: product demonstrations, partner showcase and application focus presentations</a></li>
            <li><a class="link" href="https://twitter.com/eatora22/status/1126441944115077120" target="_blank" rel="noopener">Performance at rehearsal</a><br/></li>
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