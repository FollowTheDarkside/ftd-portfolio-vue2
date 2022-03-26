<template>
  <v-app>
    <HeaderMenu/>
    
    <div class="centering">
      <div>
        <h1 class="title">BreakGAN</h1>
        <p class="sub-title">2020/06</p>
        <div class="wrap-image">
          <div class="video">
            <iframe width="480" height="270" src="https://www.youtube.com/embed/WRGNWCJfY1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <p class="text-left">
          This video is generatede by AI (machine learning).<br/><br/>
          PGGAN (Progressive Growing of GANs) learnd my dance style and generated images. 
          Creativity is important for breakdance (bboying, breakin'). AI may help create new movements and silhouettes for bboys and bgirls.
        </p>
        <p class="text-left">
          DrumsRNN generated the drum beat. 
          I created <a class="link" href="https://twitter.com/eatora22/status/1266252076255858690" target="_blank" rel="noopener">a tool on browser</a> using DrumsRNN (by TensorFlow.js) & Tone.js & p5.js for this work. 
          Drums are very important in dance music. 
          Freestyle with fresh music will help you realize new possibilities.<br/>
        </p>
        <p class="text-left">
          I'm not trying to replace human creativity with AI. 
          I use machine learning to pursue fresher creativity. 
          Please also check out our <a class="link" href="https://followthedarkside.medium.com/dance-ai-classifies-and-visualizes-the-movements-of-breakdance-by-deep-learning-3a525300035" target="_blank" rel="noopener">DanceAI project</a>!
        </p>
        <p class="text-left">
          I also used TouchDesigner and Adobe Premiere Pro to improve the quality of the video work. 
          The quality of the work will be improved by increasing the learning data and using different models.
        </p>
        <p class="text-left">
          こちらの映像と音楽は機械学習の技術を使って制作されたものです。
          特に映像についてはBBOYでもある私が実際に踊っている様子をAIが学習して生成されました。
          詳細は以下のnote記事をご参照ください。
        </p>
        <p class="text-left">
          <ul>
            <li><a class="link" href="https://note.com/thedesignium/n/nb319920b15f8" target="_blank" rel="noopener">【作品解説】PGGANを使って新しいダンス表現を模索する話【BreakGAN】</a><br/></li>
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