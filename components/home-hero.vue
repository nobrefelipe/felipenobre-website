<template>
    <div class="wrapper">

      <div class="hero">

        <div class="avatar">

          <img src="@/assets/img/felipe-nobre.png" alt="Felipe Nobre Head Image">

        </div>

        <div class="block-content">

          <h1>
            Hi there, I am Felipe Nobre, <br>
            a front end developer with a  <br>passion
            for entrepreneurship and <br>growth hacking techniques.
            <!-- with focus on 
            Vue.js and Wordpress development. -->
          </h1>

          <p>
            Front end development is what I love to do. I have been doing it since 2011.<br>
            I like being part of the creative process and work close with creative people.
            <br><br>
            On this website you can check some of my latest works
            and experiments. I have been experimenting a lot with 
            Flutter and finding it awesome. 

          </p>

          <social-buttons />

        </div>

      </div>

    </div>
</template>

<script>

import SocialButtons  from "@/components/social-buttons.vue";
export default {
  components:{ SocialButtons}
}
</script>