<template>
   <div id="home">

    <home-hero />

    <the-tech-i-love />

    <flutter-experiments />

    <web-development />
    

  </div>
</template>


<script>
import TheTechILove from "../components/the-tech-i-love.vue"
import HomeHero from "../components/home-hero.vue"
import FlutterExperiments from "../components/flutter-experiments.vue"
import WebDevelopment from "../components/web-development.vue"

export default {
  
  name: 'Home',

  components: { 
    TheTechILove, 
    HomeHero, 
    FlutterExperiments, 
    WebDevelopment
  },

  // SEO
  head() {
    
    let avatar = require('@/assets/img/og-image.png');

    return {
     
      title: `Felipe Nobre | Software Developer`,

      meta: [
        {
          hid: `image`,
          property: "image",
          content: avatar
        },
        {
          hid: `canonical`,
          property: "canonical",
          href: `https://felipenobre.now.sh`
        },
        { hid: `og:type`, property: "og:type", content: "website" },
        {
          hid: `og:title`,
          property: "og:title",
          content: `Felipe Nobre | Software Developer`
        },
        {
          hid: `og:image`,
          property: "og:image",
          content: avatar
        },
        {
          hid: `og:description`,
          property: "og:description",
          content: `Hi there, I am Felipe Nobre, a front end developer with a passion for entrepreneurship and growth hacking techniques.`
        },
        { hid: `og:url`, property: "og:url", content: `https://felipenobre.now.sh` }
      ],

      link: [{ rel: "canonical", href: `https://felipenobre.now.sh` }]

    };
  }

}
</script>

