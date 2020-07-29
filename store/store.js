import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    
    state: {

        web: [

          {
            title: "Flavy app",
            slug: "flavy-app",
            content: "Flavy is a project I co-founded with a friend from Italy to help restaurants and pubs to serve customers more efficiently using smartphones as digital menus. We decided to test the market firstly in Milan but we had to put it on hold due to covid-19 pandemic.",
            coverPath: "screens/flavy.png",
            fullContent: "<i>You can check the entire project on the landing page.</i><br><br><a href='https://flavy.now.sh/en' title='CHECK THE LANDING PAGE' target='_blank' class='button'>CHECK THE LANDING PAGE</a> <h2>The idea</h2> <p>Help restaurants get into digital by providing a faster and effective mobile ordering experience. Customers browse the menu directly from their smartphone, order without any waiting time and reorder independently, without needing to download any app.</p><h2>How it works</h2> <p>The restaurant provides a QR code on the tables so the customers can scan it with their smartphones. After scanning, the web app opens the right restaurant and customers can start browsing the menu and make orders. Once the order is in place, they pay with a debit/credit card.</p><p>After the payment, the restaurant receives a notification on their Flavy Backend App with the order details so they can proceed and take the order to the kitchen.</p><h2>Try the demo </h2><p>Simply scan the QR Code to open a restaurand interactive menu.</p><img src='https://flavy.now.sh/assets/img/qr-code.png' width='200'/><p style='display:none'>Check on your phone : <a href='https://bit.ly/36biipO' target='_blank'>https://bit.ly/36biipO </a></p><br><br><h2>Technologies</h2> <h3>Vue.js</h3> <p>Flavy is primary a web app, developed with Vue.js. It has a Restaurant Back-end section where they can manage the orders and edit the menu.</p><h3>Flutter</h3> <p>I am in the process of developing a native app using Flutter. </p><h3>API</h3> <p>The database is Google's Cloud Firestore, this app makes heavy use of Google's Cloud Functions to communicate with Stripe in order to accept card payments.</p><h3>Stripe</h3> <p>The app accepts card payments in order to pay the restaurants. Stripe is used to make it happen.</p><i>Feel free to try the demo and check the website. Use credit card number 4242 4242 4242 4242 for payment</i> <br><br><i style='margin-bottom:-20px; margin-top:40px; float:left;width:100%;'>Restaurant back end app screenshot</i>",
            appPreview: "https://flavy.app/4cVrPW9qAL39DmSw5ocp/",
            appImages: ["flavy-backend.png"],
          },

          // {
          //   title: "Flavy project",
          //   slug: "flavy-project",
          //   content: "Wedday is a share platform for weddings where guests can share their pictures with other guests and make it quicker to find everybody else's pictures. <br>This a personal project that I hope to finish soon and publish it on the App Store and Google Play.",
          //   coverPath: "screens/flavy.png",
          //   fullContent: "<a href='https://flavy.io' title='Mauve Group Website' target='_blank' class='button'>CHECK IT LIVE</a> <h2>Technologies</h2><h3>Vue / Nuxt</h3><p>desciption here</p><h3>Wordpress</h3><p>desciption here</p>",
          //   appImages: false,
          // },

          {
            title: "Mauve Group Website",
            slug: "mauve-group-website",
            content: "Mauve is a leading provider of global HR and employment solutions and expatriate services. Mauve required their website to showcase a lot of services and pack a lot of features. This website makes heavy use of Advanced Custom Fields (ACF) plugin and contains many custom post types.",
            coverPath: "screens/mauve.png",
            fullContent: "<a href='https://mauvegroup.com' title='Mauve Group Website' target='_blank' class='button'>CHECK IT LIVE</a> <p>I worked on this project from the prototype to the latest optimisations for the past 3 years. It was first developed fully in Wordpress (back-end and front-end).</p><p>The back-end is managed by Wordpress and has some big functionalities, for instance: </p><span style='padding-left:30px;float:left;margin-bottom:20px;'><i>Mauve wants to show that they operate in all the countries in the world, so we have 203 countries categories for the Services Post Type. And we need to filter and relate services and countries on the home page, when the user click on a continent. They offer seven specific services and different services for different countries.</i></span> <br><p>You can imagine that doing all these relationship and filtering is not very healthy and optimised</p><p>The home page is the most complex page and pack a lot of carousels and showcase many things, the website perfomance was really bad, than we decided to re develop the front end using Vue.js so we could have a better perfomance overall.</p><p>Today the front end is fully done in Nuxt.js and results are amazing: </p><ul> <li>Huge boost in perfomance and speed, indeed the last time I checked it was scoring 92 points on Google Speed Test. Before Nuxt it was 15.</li><li>SEO improved as well, because instead of using Wordpress plugis for that we use Nuxt to set the meta tags. SSR makes sure Google Crawlers can see everything.</li></ul> <p>There is always room for improvement of course, I have advised to make the home page leaner and reduce the number of carousels so we could have a better perfomance on first load (I still think it is a bit slow), but Mauve loves the carousels :)</p><p>The back-end remained pretty much the same. A big challenge there was to keep the old contact form plugin and make it work on the front end using Nuxt.<br>They use Gravity Form plugin, luckily they have a rest api so I could communicate with the form with Javascript.</p><h2>Technologies</h2> <h3>Wordpress</h3> <p>The back end is a Wordpress installation with custom post types and plugins. The website has also a Spanish version with fewer pages translated using the WPML Plugin.</p><h3>Vue / Nuxt</h3> <p>The front-end is developed with Nuxt.js, and communicates with Wordpress by it's Rest Api. Apart communicating with Wordpress Api, it also connects with some Wordpress plugins</p><i>Below you can see a screenshot of the Countries Info custom post type and all the counties categories. And on the left side the endless list of Custom Post Types.</i> <br>",
            appImages: ["screens/mauve-backend-countries.jpg"],
          },

          {
            title: "OCLU Website",
            slug: "oclu-website",
            content: "OCLU is an action camera brand that came to market recently. I worked on the website for a couple of years when I was the lead front end developer for WMP Creative and I can literally say that my hands are all over the place. Literally, the hand you see on the picture is mine. ",
            coverPath: "screens/oclu.png",
            fullContent: "<a href='https://oclu.com' title='Mauve Group Website' target='_blank' class='button'>CHECK IT LIVE</a><p>Apart from lending my hands for some product pictures, I helped develop the website a couple of times. The first version was a Wordpress website, featuring WooCommerce for the e-commerce side. Later on the leadership decided to change it to the BigCommerce Platform.</p><p>The migration to BigCommerce wasn't a smooth transition, after months of development in Wordpress, change it to another platform was a bit of a disappointment. We did it and we would able to reuse some pieces of the code already written.</p><p>Even though BigCommerce is a nice platform for e-commerce, it doesn't provide a nice workflow for custom design implementations. We suffer for a while. However, I was pleased to know that the platform itself (BigCommerce) got in touch with WMP and told us that our site was one of the best implementations of their platform.</p><p>Now BigCommerce has a Wordpress plugin to allow us implement custom designs easily while using their platform for the e-commerce part.</p><p>Working on OCLU helped me to understand all the layers of a big player's project. Many people were involved (designers, developers, managers, sellers, warehouses, copywriter, consultants, the CEO, and many more). From the developer point of view at the time it was really tiring, but now I can see clearly the things I learned and how to proceed next time.</p><h2>Technologies</h2> <p>The website doesn't use a lot of different technologies so to say. As I mentioned before, it was completely developed in Wordpress before the migration to BigCommerce.</p><h3>Wordpress [old version]</h3> <p>When developing with Wordpress I like to use Twig (Timber theme) for the the templating and Advanced Custom Fields (ACF plugin) for all the customisations.</p><h3>BigCommerce [live version]</h3> <p>BigCommerce doesn't provide us a lot of customisations so most of the content was hardcoded (I wish there was a ACF plugin for BigCommerce). However it makes it nice and easy for the selling and marketing team to control the store.</p>",
            appImages: false,
          },

          {
            title: "Amerisleep Touchscreen Webapp",
            slug: "amerisleep-touchscreen-webapp",
            content: "Amerisleep is an American manufacturer of memory foam mattresses, they have some nice boutique stores to showcase their products.<br>They wanted to create a genuinely immersive in-store experience, and I was assigned with the task to create interactive displays to give customers the opportunity to gain more detailed information about the technology in the product, in their own time.",
            coverPath: "screens/amerisleep.png",
            fullContent: " <i>Before checking the working app, make sure to set the screen size to 1024x768px as this is not a responsive app and was made to work only on their in-store tablets.</i> <br><br><a href='http://staging.wmpcreative.com/clients/amerisleep-touchscreen/product/#/as1' title='CHECK IT LIVE' target='_blank' class='button'>CHECK IT LIVE</a><br><p>Check the source code <a href='https://github.com/nobrefelipe/Amerisleep-app' title='Amerisleep Source code' target='_blank'> here</a></p><p>Amerisleep has 5 different mattress that range from soft to firm and called AS1, AS2, AS3, AS4 and AS5.</p><p>The app was developed in Vue.js and and has a custom CMS for editing the content. The data is stored on Google's Firebase Real Time Database. That app is not responsive and was developed to work only on a restrict screen size of 1024x768px, to fit their in-store tablets.</p><p>The CMS was really fun to develop and see integration between Vue.js and Firebase is amazing, the real time database is really cool.</p><p>There is a section in the app called The Technology, where we display all the layers of the mattress. It was really a challenge to develop the designer's idea. We wanted to have a video animation when the user reaches the page and display a tooltip for each layer, then when the user taps on a layer the video will continue and animate to the next page giving to it a very immersive experience. You can check it by navigating from the first screen to Discover then Our Technology.</p><h2>Technologies</h2> <h3>Vue</h3> <p>Front end and back-end(CMS) developed with Vue.js</p><h3>Firebase</h3> <p>The database is Google's Firebase and connects in real time with the application.</p><h3>PWA</h3> <p>The app works offline and is installable on the device. It also receives notifications when there is a new version of the app.</p><i>Below it's an image demonstrating the app being displayed in-store as well as some screens of the CMS</i><br>",
            appImages: ["screens/amerisleep-store-app.jpg", "screens/amerisleep-cms-login.png", "screens/amerisleep-cms-listing.png", "screens/amerisleep-cms-detail.png"],
          },

        ],
        
        flutterExperimentsData: [

            {
              title: "Wedday app",
              slug: "wedday-app",
              content: "Wedday is a share platform for weddings where guests can share their pictures with other guests and make it quicker to find everybody else's pictures. <br>This a personal project that I hope to finish soon and publish it on the App Store and Google Play.",
              imagePath: "screens/wedday-app.png",
              fullContent: "<strong>Status</strong>: development ( 80% done )<br><strong>What’s missing</strong>: Groom on boarding and wedding creation. </p><a href='https://github.com/nobrefelipe/weddy-app' title='SKIP & SEE THE CODE ON GITHUB' target='_blank' class='button'>SKIP & SEE THE CODE ON GITHUB</a> <h2>The idea</h2> <p> People love to take and share pictures of their social life, specially in weddings. The idea of the app is to make it simpler for the guests to get all the pictures the other guests are taking. So no one needs to ask anybody to send the pictures over. </p><h2>Tecnologies</h2> <h3>Flutter</h3> <p> The app is being developed using Flutter framework, Flutter makes it Easier and quicker to develop cross-platform native apps. </p><h3>Flutter Modular</h3> <p> This is my go to library for project structure and dependency injection. Flutter Modular gives us a structure that allows us to manage dependency injection and routes in just one file per module, so we can organize our files with that in mind. </p><h3>MobX</h3> <p> for state management </p><h3>API</h3> <p> For the database I decided to use GraphQL and Hasura; Hasura GraphQL Engine is an extremely lightweight, high performance product that gives me instant realtime GraphQL APIs on a Postgres database. </p><h2>Authentication with Firebase</h2> <p> Hasura doesn’t have authentication implemented (yet) but it allow us to access the api using JWT. So I use Firebase for authentication. When the user is created I set a custom claim to the new user via Cloud Functions to set a signature that Hasura will understand. <br><br>Whe the user is logged in I get the token generated by firebase and send it with the requests to Hasura. </p><h2>User journey</h2> <p> Hasura doesn’t have authentication implemented (yet) but it allow us to access the api using JWT. So I use Firebase for authentication. When the user is created I set a custom claim to the new user via Cloud Functions to set a signature that Hasura will understand. <br><br>Whe the user is logged in I get the token generated by firebase and send it with the requests to Hasura. </p><h3>For the guests</h3> <p> The guest download the app and register to it. The app will ask the guest to provide a 6 number code for the wedding. On the home screen the user will be able to view all the pictures the other guests are posting and will be able to download them. They can also see the list of all guests. </p><h3>For the brooms [todo]</h3> <p> The marrying people download the app, register and create the wedding. The app will generate a wedding passcode and attach it to the wedding ID. <br><br>The passcode will be needed for the guests to access the wedding. So the brooms need to provide the code to all guests. They can do it manually or by giving the app the email address of the guests, so the app send it to everybody. </p><h3>For photographers</h3> <p> I have this idea that the booms could hire a junior photographer to be at the weeding using a high end smartphone and taking nice pictures of the wedding and the guests and publishing them to Wedday, so the guests could just enjoy the party and grab their pictures later from the app. </p>",
              appPreview: false,
              appImages: false,
            },

            {
              title: "Cooking App concept",
              slug: "cooking-app-concept",
              content: "This is an app concept from designer Pham Huy I found on Dribbble. I used this app to study page transitions and controllers in flutter, you can check it by swapping the recipes and clicking/tapping on them.",
              imagePath: "screens/restaurant-concept.png",
              fullContent: "<a href='https://github.com/nobrefelipe/flutter-cooking-receipe-experiment' title='SKIP & SEE THE CODE ON GITHUB' target='_blank' class='button'>SKIP & SEE THE CODE ON GITHUB</a> <p>You can check the original <a href='https://dribbble.com/shots/6720256-Cooking-Recipe-App' title='designs here' target='_blank'>designs here</a>.</p><p>Using Flutter's Page View Controller makes it really fun to animate things, it detects the amount we swipe so we can pass it to the other widgets, like the food plate and the carousel item itself. In this case I rotate the plate and translate the recipes apart from each other to give it a more elastic animation.</p><p>The page transition is another nice touch. You can see the smooth transition between the retangular carousel item to the full page background color.</p><i>This is the web version of the app. Flutter compiles to Android, IOS and Web.<br>It might contains erros or bugs as Flutter Web is still on beta.</i> <i>Refresh the page if you cant see it properly.</i> ",
              appPreview: "https://cooking-recipe-app.felipenobre.now.sh",
              appImages: ["https://cdn.dribbble.com/users/1715186/screenshots/6720256/attachments/1435127/final_4.png"]
            },
    
    
            {
              title: "Favorite Cartoons App",
              slug: "favorite-cartoons-app",
              content: "Cartoons, vivid colors, animations and transitions. What's better than that? Flutter! In this experiment I implemented a concept from Dribbble designer Brio6.",
              imagePath: "screens/favorite-cartoons-app.png",
              fullContent: "<a href='https://github.com/nobrefelipe/flutter-cartoons-app' title='SKIP & SEE THE CODE ON GITHUB' target='_blank' class='button'>SKIP & SEE THE CODE ON GITHUB</a> <p>You can check the original <a href='https://dribbble.com/shots/6403829-Movie-Character-UI-Animation' title='designs here' target='_blank'>designs here</a>.<p>This is a simple concept but full of nice opportunities to learn what Flutter has to offer. </p><p>The main focus here is the carousel, where we can swipe to the next character and animate the image.</p><p>Other than that, we have a nice transition between the carousel and the character detail page.</p><p>As Flutter web is still in beta, the app doesnt works very nice on the web. So I recorded the native working version,   <a href='' title='you can try it here'>you can try it here</a></p>",
              appPreview: "https://flutter-cartoons-app.felipenobre.now.sh/",
              localAppImages: true,
              appImages: ["cartoons-app.jpg"],
            },

            {
              title: "App profile concept",
              slug: "app-profile-concept",
              content: "In this Flutter experiment I implemented some simple but nice animations created by the youtuber Daniel White aka Dansky. It is an app profile concept where he animates the page transition between the three categories (reviews, followers and comments).",
              imagePath: "screens/app-profile-concept.png",
              fullContent: "<a href='https://github.com/nobrefelipe/weddy-app' title='SKIP & SEE THE CODE ON GITHUB' target='_blank' class='button'>SKIP & SEE THE CODE ON GITHUB</a> <h2>Try it</h2> <p>By tapping/cliking on each of those categories the content will revel with a fade in animation and the avatar border will animate to indicate the current page.</p><p>Check Bansky's his video <a href='https://youtu.be/D9_nvt80bSM?t=63' title='Auto-Animate Like a Pro in Adobe XD'>here</a></p><i>This is the web version of the app. Flutter compiles to Android, IOS and Web.<br>It might contains erros or bugs as Flutter Web is still on beta.</i> <i>Refresh the page if you cant see it properly.</i> <br>",
              appPreview: "https://web.felipenobre.now.sh",
              localAppImages: true,
              appImages: ["screens/app-profile-design.png"],
            }
    
          ]
    
        }

    })