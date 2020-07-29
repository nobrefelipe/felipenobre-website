<template>

    <div>

        <div class="block-content-full-wrapper flutter" id="flutter">

            <div class="wrapper">

                <div class="block-content">

                <h2>Flutter Experiments</h2>
                <p>
                    When I first tried
                    <strong>Flutter</strong> I was a bit sceptical. Having logic, structure and styling all in the same place
                    doesn’t make much sense for web developers.
                    But I fell in love with it after the results I archived.
                    <br><br>

                    I tried many times to get into native development, but it wasn't fun at all so I have always dropped it. 
                    Flutter makes it so much fun to develop. It's quicker, more productive and I feel like I can do anything with it.
                    <br>
                    I still have a long path to go but in the near future I hope to be working a lot with Flutter.
                    <br />
                    <br />Now I like to go to
                    <strong>Dribbble</strong> and choose a nice app design and challenge myself
                    with the task of making it real. Below you will find some of the ideias I found there and also
                    some personal projects that I put together while trying Flutter.
                </p>
                </div>

            </div>
            
        </div>


        <div class="sticky-content-wrapper">

            <div class="wrapper">

                <div  v-for="item in $store.state.store.flutterExperimentsData"
                    :key="item.title" 
                    class="sticky-content">

                <div class="img">

                    <img :src="getImgUrl(item.imagePath)" :alt="item.title">

                </div>
                
                <div class="cnt">

                    <div class="block-content">

                    <h2>{{item.title}}</h2>
                    <p v-html="item.content"></p>

                    <router-link :to="`/flutter/${item.slug}`" class="button">MORE</router-link>

                    </div>

                </div>
                
                </div>

            </div>
        

        </div>

    </div>
        
</template>

<script>
export default {
    
    methods:{

        getImgUrl(pic) {
        return require('@/assets/img/'+pic)
        }

    },

}
</script>