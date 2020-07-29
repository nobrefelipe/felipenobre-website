<template>

  <div id="app">
    <header id="header" :class="{showShadow:showShadow}">

      <div class="wrapper">

         <div style="display:flex; align-items:center;">

          <div @click="$router.go(-1)" class="back" v-if="showBack">
            &larr;
          </div>

          <router-link to="/" class="logo">

            <img alt="Felipe Nobre" src="@/assets/img/logo.png">

            <span>felipe nobre</span>

          </router-link>

        </div>


        <div class="menu">

          <router-link class="item" to="/web" title="Web">Web</router-link>

          <router-link class="item" to="/flutter" title="Flutter">Flutter</router-link>

          <button class="button" @click="scrollTo">CONTACT &amp; CV</button>

        </div>

      </div>

    </header>

     <nuxt />


    <footer id="footer">

      <a href="/Felipe-Nobre-Resume.pdf" target="_blank" title="DOWNLOAD MY CV" class="button big">DOWNLOAD MY CV</a>

      <div class="content">

        <div class="wrapper">

          <div class="work-with-me">

            <h2>
              Interested in working <br>with me?
            </h2>
            
            <a href="mailto:nobrefelipe1@gmail.com">nobrefelipe1@gmail.com</a>

          </div>

           <social-buttons class="white" />
          
        </div>

      </div>

    </footer>

  </div>
</template>


<script>

import SocialButtons  from "@/components/social-buttons.vue";
export default {

  components:{ SocialButtons},

  data(){
    return{
      showShadow: false,
    }
  },

  computed:{

    showBack(){

      return this.$route.path == "/" ? false : true;

    },

  },

  mounted(){

      let vm = this;

     window.addEventListener('scroll', (e) => { 

       if (window.scrollY > 120){

         vm.showShadow = true;

       }else{

         vm.showShadow = false;

       }
       
     })
  },
  
  methods:{
    
    // Scroll to footer
    scrollTo(){

      const footer = document.getElementById("footer")

      window.scrollTo({
        top: footer.offsetTop,
        behavior: 'smooth',
      });

    }

    
  }
}
</script>