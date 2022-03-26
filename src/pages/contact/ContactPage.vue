<template>
  <v-app>
    <HeaderMenu/>
    
    <div class="centering">
      <div>
        <h1 class="title">CONTACT</h1>
        <p class="text-center">
          mail: hahaeatora@gmail.com
        </p>
        <p class="text-left">
          Please email me for video production, development, and writing requests. 
          I am also open to contact for collaborative productions and research.
        </p>
        <p class="text-left">
          映像制作や開発、執筆のご依頼はこちらから。
          共同制作・研究のご連絡もお待ちしております。
          ただの質問や雑談もお気軽にどうぞ（SNSのDMでも大丈夫です）。
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