<template>

    <div class="web">

        <div class="block-content-full-wrapper " id="web">

            <div class="wrapper">

                <div class="block-content">

                    <h2>Web Development</h2>
                    <p>
                        I have been developing websites for the past nine years and and I feel glad that I got to witness the evolution of the technologies.
                    </p>
                    <p>
                        I remember the hard times when I had to implement responsive designs for the first time and support IE6. I remember the time I had to make a website look perfect on an old Blackberry because the CEO of the company (LaRinascente) would  check the website only from it.
                    </p>
                    <p>
                        It was so nice when jQuery came out and the mobile version of it helped a lot when mobile first methodologies started to gain traction.
                    </p>
                    <p>
                        Today we have amazing technologies and the browsers are flawless. Who would say that one day Microsoft would come out with one of the best browsers ever and be built on Chromium? 
                    </p>
                    <p>
                        Indeed, things are much better and I am glad that I am still here developing web applications. We can do much more now, anything is possible. 
                    </p>
                    <p>
                        Anyway, below you can find some of my latest works. Unfortunately I can't share the source code for all of them but I am glad to talk about any project on this website.
                    </p>
                    
                </div>

            </div>
            
        </div>


        <div class="sticky-content-wrapper">

            <div class="wrapper">

                <div  v-for="item in $store.state.store.web"
                    :key="item.title" 
                    class="sticky-content">

                <div class="img">

                    <img :src="getImgUrl(item.coverPath)" :alt="item.title">

                </div>
                
                <div class="cnt">

                    <div class="block-content">

                    <h2>{{item.title}}</h2>
                    <p v-html="item.content"></p>

                    <router-link :to="`/web/${item.slug}`" class="button">MORE</router-link>

                    </div>

                </div>
                
                </div>

            </div>
        

        </div>

    </div>
        
</template>

<script>
export default {
    
    name: "web-development",

    methods:{

        getImgUrl(pic) {
        return require('../assets/img/'+pic)
        }

    }


}
</script>