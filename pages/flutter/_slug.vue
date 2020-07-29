<template>
  <div v-if="data" class="project-page">

    <div class="wrapper">
    
      <div class="project-image">
    
        <img
          :src="getImgUrl(data.imagePath)"
          :alt="data.title"
          :class="{'has-preview': data.appPreview}"
        />

        <a v-if="!data.appPreview" href="#" title="WATCH VIDEO" target="_blank">
          WATCH VIDEO
          <img src="@/assets/img/play-icon-rounded.png" alt=" WATCH VIDEO" />
        </a>

        <iframe
          v-if="data.appPreview && !isMobile()"
          :src="data.appPreview"
          width="414"
          height="812"
          frameborder="0"
          preload
        ></iframe>

        <span v-if="data.appPreview && !isMobile()">
          You can interact with this demo.
          <br />Refresh the page if it doesn't show properly
        </span>
    
      </div>

      <div v-if="data" class="project-content">
    
        <div class="block-content">
    
          <h1 v-html="data.title"></h1>

          <p v-html="data.content"></p>
        </div>

        <div class="block-content">
       
          <p v-html="data.fullContent"></p>

          <router-link
            v-if="data.appPreview && isMobile()"
            :to="`/${data.slug}/preview`"
            title="Check the app live"
            class="button"
          >TRY THE WEB VERSION</router-link>

          <div v-if="data.appImages && data.localAppImages" class="images">
            <img v-for="img in data.appImages" :src="getImgUrl(img)" :key="img" :alt="data.title" />
          </div>

          <div v-if="data.appImages && !data.localAppImages" class="images">
            <img v-for="img in data.appImages" :src="img" :key="img" :alt="data.title" />
          </div>
       
        </div>
      
      </div>
    
    </div>
  
  </div>
</template>

<script>
export default {
  name: "ProjectFlutter",

  data() {
    return {
      data: null,
      showPanel: false
    };
  },

  mounted() {
    this.data =  this.getData();
  },

  methods: {

			getData(){

				let slug = this.$route.params.slug;
        let flutter_store_data = this.$store.state.store.flutterExperimentsData;

        return flutter_store_data.filter(element => {

          return element.slug == slug;

        })[0];

			},

    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },

    getImgUrl(pic) {
      return require("@/assets/img/" + pic);
    }
  },

  // SEO
  head() {
			
      let data =  this.getData();
      let cover = require(`@/assets/img/${data.imagePath}`);

      return {
        title: `${data.title} | Felipe Nobre`,

        meta: [
          {
            hid: `image`,
            property: "image",
            content: `https://felipenobre.now.sh${cover}`
          },
          {
            hid: `canonical`,
            property: "canonical",
            href:  `https://felipenobre.now.sh/flutter/${data.slug}`
          },
          { hid: `og:type`, property: "og:type", content: "website" },
          {
            hid: `og:title`,
            property: "og:title",
            content: `${data.title} | Felipe Nobre`,
          },
          {
            hid: `og:image`,
            property: "og:image",
            content: `https://felipenobre.now.sh${cover}`
          },
          {
            hid: `og:description`,
            property: "og:description",
            content: data.content
          },
          {
            hid: `og:url`,
            property: "og:url",
            content: `https://felipenobre.now.sh/flutter/${data.slug}`
          }
        ],

        link: [{ rel: "canonical", href:  `https://felipenobre.now.sh/flutter/${data.slug}` }]
      };
    }










};
</script>