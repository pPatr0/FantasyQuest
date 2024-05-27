<template>
  <main>
    
    <!-- <div id="preloader" class="flex items-center justify-center w-0 h-0 bg-gray-800 lg:h-full lg:w-full">
        <video id="preloader-video" class="object-cover video" autoplay loop muted>
          <source src="img/LoaderFantasyQuest.mp4" type="video/mp4">
        </video>
    </div> -->
    <div class="bg-[url('/images/hero_fixed.png')] w-full h-[100vh] bg-cover bg-no-repeat bg-center relative">
        <div class="container mx-auto">
          <NavbarMenu />
            <div class="flex flex-col items-center text-[#FFFFFF] pt-[12rem]">
                <h1 class="z-50 text-8xl">
                    <span class="text-shadow">Fantasy Quest</span>
                </h1>
                <p class="pt-20 text-3xl">
                    Explore fantasy world on your own
                </p>
                <div class="flex pt-8 space-x-4">
                    <div class="">
                        <a href="#about" @click="scrollTo('about')" class="btn text-[#002B59] pb-2 btn-second">
                            ABOUT
                        </a>
                    </div>
                    <div class="">
                        <a href="#" class="pb-2 btn">
                            BUY TICKET
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#002B59] py-12" id="about">
        <div class="container mx-auto">
            <div class="pt-16 pb-24">
                <h2 class="flex justify-center text-4xl text-white uppercase">About Quest</h2>
            </div>
            <div class="flex justify-center space-x-12">
                <div class="">
                    <iframe class="w-[70vh] h-[40vh]" src="https://www.youtube.com/embed/bk8Rl-tSxUQ?si=InljYER4wZKrGcSI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="max-w-sm">
                    <p class="text-xl font-semibold text-white inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget purus non urna vestibulum commodo a vitae nulla. Phasellus a pellentesque magna, eget varius metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ac turpis enim. Nulla luctus et eros ac blandit. In mattis purus et accumsan tincidunt. Praesent fringilla viverra porttitor.tincidunt. Praesent fringilla viverra porttitor.</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <img src="/images/divider.png" alt="Lemovani" class="h-auto w-[90%]">
        </div>
        <div class="container flex justify-center mx-auto">
            <div class="flex justify-center w-auto py-5 bg-white rounded-lg">
                <div class="flex px-5 space-x-4">
                    <div class="uppercase">
                        <button @click="selectedCategory = 'Day' " class="btn text-[#002B59] btn-second border-0 px-2" :class="{'btn-switch' : selectedCategory === 'Night', 'btn-second': selectedCategory === 'Day' }">
                            Day quest
                        </button>
                    </div>
                    <div class="uppercase">
                        <button @click="selectedCategory = 'Night' " class="px-2 pb-2 border-0 btn" :class="{'btn-switch' : selectedCategory === 'Day', 'btn-second': selectedCategory === 'Night' }">
                            Night quest
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container flex justify-center pt-24 mx-auto">
          <div v-if="selectedCategory === 'Day'" class="border-2 border-white bg-[#4EB4D5] w-[30rem] text-[#002B59] rounded-lg">
              <div class="flex flex-col items-center px-16 text-xl">
                <h2 class="pt-12 text-3xl uppercase">
                  Day quest
                </h2>
                <p class="py-8 inter">
                  <span class="text-4xl font-semibold inter">159</span>dkk / group
                </p>
                <p class="inter">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget purus non urna vestibulum commodo a vitae nulla. Phasellus a pellentesque magna, eget varius metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ac turpis enim. Nulla luctus et eros ac blandit.
                </p>
                <a href="#" class="pb-2 my-8 btn">
                  BUY TICKET
                </a>
              </div>
            </div>
            <div v-if="selectedCategory === 'Night'" class="border-2 border-white bg-[#002B59] w-[30rem] text-white rounded-lg">
              <div class="flex flex-col items-center px-16 text-xl">
                <h2 class="pt-12 text-3xl uppercase">
                  Night quest
                </h2>
                <p class="py-8 inter">
                  <span class="text-4xl font-semibold inter">243</span>dkk / group
                </p>
                <p class="inter">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget purus non urna vestibulum commodo a vitae nulla. Phasellus a pellentesque magna, eget varius metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ac turpis enim. Nulla luctus et eros ac blandit.
                </p>
                <a href="#" class="btn text-[#002B59] pb-2 btn-second my-8">
                  BUY TICKET
                </a>
              </div>
            </div>
        </div>
    </div>
  

  </main>
</template>

<script>
import { ref } from 'vue';
import NavbarMenu from '../components/NavbarMenu.vue'

export default {
  components: {
    NavbarMenu,
    
  },
  setup() {
    const selectedCategory = ref('Day');

    return {
      selectedCategory
    }
  }
}


</script>

<style lang="scss">
#preloader {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 50;
  transition: opacity 0.4s;
}

#preloader video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@font-face {
    font-family: myFont;
    src: url(img/CELTG___.TTF);
}

*{
    font-family: myFont;
}

.text-shadow {
    text-shadow: 2px 4px 4px rgba(255, 255, 255, 0.5); /* Define the drop shadow */
}

.btn {
    background: #002B59;
    color: #FFFFFF;
    border: solid 2px #FFFFFF;

    text-decoration: none;
    width: 20vh;
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 10px 18px;
    padding-bottom: 8px;
    padding-inline: 2px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    position: relative;
    z-index: 1;
    transition: 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    cursor: pointer;
    overflow: hidden;
    transition-delay: 0s !important;
    text-transform: uppercase !important;
    letter-spacing: 2px;
  }
  .btn::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 0%;
    height: 100%;
    background: #EAD000;
    z-index: -1;
    transition: 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
  .btn:hover::before {
    width: 100%;
    left: 0;
    right: unset;
  }
  .btn:hover {
    box-shadow: 0 0 #ffe00b, 0 0 #151515;
    color: white;
  }

  .inter{
    font-family: 'Inter', sans-serif;
  }

  .btn-second{
  background-color: #4EB4D5;
  color:#002B59;
}

.btn-switch{
  background: #002B59;
  color: #FFFFFF;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

</style>