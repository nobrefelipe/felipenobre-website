<template>

    <div v-if="data" class="web-project-page">

     <div class="wrapper">

        <div  class="web-project-image">
            
            <img :src="getImgUrl(data.coverPath)" :alt="data.title" >

        </div>

        <div v-if="data" class="web-project-content">

            <div class="block-content">

                <h1 v-html="data.title"></h1>

                <p v-html="data.content"></p>
                
            </div>
               

            <div class="block-content" > 
                         
                <p v-html="data.fullContent"></p>
               
                <div v-if="data.appImages" class="images">
                    <img v-for="img in data.appImages" :src="getImgUrl(img)" :key="img" :alt="data.title">
                </div>

            </div>  

        </div>

        </div>

    </div>
    
</template>

<script>
export default {

    name: "ProjectWeb",

    data(){
        return{

            data: null,
            showPanel: false,

        }
    },

    mounted(){

        this.data =  this.getData();

    },

    methods:{

        getData(){

            let slug = this.$route.params.slug;

            let web_store_data = this.$store.state.store.web;

            return web_store_data.filter(element => {

                return element.slug == slug;
                
            })[0];

        },
            
        getImgUrl(pic) {
            return require('@/assets/img/'+pic)
        }
    },

     // SEO
    head() {

        let data =  this.getData();

        let cover = require(`@/assets/img/${data.coverPath}`);

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
                { 
                    hid: `og:type`, 
                    property: "og:type", 
                    content: "website"
                },
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

   
    
}
</script>