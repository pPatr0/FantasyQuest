<template>
  <main>
    <div id="preloader" class="items-center justify-center invisible hidden w-0 h-0 bg-gray-800 lg:h-full lg:w-full lg:flex lg:visible">
        <video id="preloader-video" class="object-cover video" autoplay loop muted>
          <source src="/images/LoaderFantasyQuest.mp4" type="video/mp4">
        </video>
    </div>
    <div class="bg-[url('/images/hero_fixed.png')] w-full h-[100vh] bg-cover bg-no-repeat bg-center relative">
        <div class="mx-auto lg:container">
          <NavbarMenu />
            <div class="flex flex-col text-center items-center text-[#FFFFFF] pt-[12rem]">
                <h1 class="z-50 text-5xl lg:text-8xl">
                    <span class="text-shadow">Fantasy Quest</span>
                </h1>
                <p class="pt-10 text-2xl lg:pt-20">
                    Explore fantasy world on your own
                </p>
                <div class="flex pt-8 space-x-4">
                    <div class="">
                        <a href="#about" @click="scrollTo('about')" class="btn text-[#002B59] pb-2 btn-second">
                            ABOUT
                        </a>
                    </div>
                    <div class="">
                        <a href="#buyticket" class="pb-2 btn buy-ticket">
                            BUY TICKET
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#002B59] py-12" id="about">
        <div class="container mx-auto">
            <div class="pb-12 lg:pb-24 lg:pt-16 pt-1/2">
                <h2 class="flex justify-center text-4xl text-white uppercase">About Quest</h2>
            </div>
            <div class="flex justify-center px-6">
              <div id="slides" class="flex flex-col items-center justify-center px-8 py-8 space-x-0 border-2 border-white rounded max-w-7xl lg:space-x-10 lg:flex-row bg-secondary slide">
                  <div class="flex justify-center ">
                      <iframe class="lg:w-[70vh] md:w-[55vh] w-[45vh] h-[20vh] lg:h-[43vh]" src="https://www.youtube.com/embed/bk8Rl-tSxUQ?si=InljYER4wZKrGcSI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <div class="flex justify-center max-w-lg px-6 pt-6 lg:max-w-sm lg:px-0 lg:pt-0">
                      <p class=" text-primary text-md md:text-lg lg:text-xl inter">
                        Are you ready to enter a magical world where you are a hero on a quest to overcome evil forces and save the world? Welcome to Fantasy Quest Esbjerg. Imagine "Prisoner in the Fortress" with magic, theatre, role-playing, heroes, villains and the battle of good versus evil. This is your journey in Fantasy Quest Esbjerg. In 2024, Fantasy Quest Esbjerg will offer a challenging evening edition and a daytime edition for the whole family during the Fantasy Festival. This event, created in collaboration with youtuber Lakserytteren, is open to everyone.
                      </p>  
                  </div>
              </div>
            </div>
        </div>
        <div class="flex justify-center">
            <img src="/images/divider.png" alt="Lemovani" class="h-auto lg:w-[90%] md:w-[70%]"  id="buyticket">
        </div>
        <div class="container flex justify-center mx-auto">
            <div class="flex justify-center w-auto py-5 bg-white rounded-lg">
                <div class="flex flex-col px-5 space-x-0 lg:pace-x-4 lg:flex-row">
                    <div class="uppercase">
                        <button @click="selectedCategory = 'Day' " class="btn-nothing text-[#002B59] btn-second border-0 px-2" :class="{'btn-switch' : selectedCategory === 'Night', 'btn-second': selectedCategory === 'Day' }">
                            Day quest
                        </button>
                    </div>
                    <div class="uppercase">
                        <button @click="selectedCategory = 'Night' " class="px-2 pb-2 border-0 btn-nothing" :class="{'btn-switch' : selectedCategory === 'Day', 'btn-second': selectedCategory === 'Night' }">
                            Night quest
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container flex justify-center pt-12 mx-auto lg:pt-24">
          <div v-if="selectedCategory === 'Day'" class="border-2 border-white bg-[#4EB4D5] lg:w-[30rem] w-[20rem] text-[#002B59] rounded-lg ">
            <div class="flex flex-col items-center px-8 text-xl lg:px-16">
              <h2 class="pt-12 text-2xl uppercase md:text-3xl lg:text-3xl">
                Day quest
              </h2>
              <p class="py-8 inter">
                <span class="text-3xl font-semibold lg:text-4xl inter">159</span>dkk / group
              </p>
              <p class="text-base lg:text-lg inter">
                Fantasy Quest Esbjerg is an adventure race that takes place during the Esbjerg Fantasy Festival on 14 September 2024. Participants will embark on a quest full of challenges to be completed on a route inspired by a unique fantasy story created in collaboration with Lakserytteren. <br><br> The event is divided into two segments: the Family Challenge and the Fantasy Challenge. The Daily Quest invites families to participate together. Everyone becomes a hero, with children playing a key role in saving Esbjerg. The challenges are designed for children to complete, but teamwork and skill from all participants is essential. The family version of the quest takes place during the daytime hours of the Festival of Imagination.              </p>
              <a href="https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3" class="pb-2 my-8 btn-nothing">
                BUY TICKET
              </a>
            </div>
          </div>
          <div v-if="selectedCategory === 'Night'" class="border-2 border-white bg-[#002B59] lg:w-[30rem] w-[20rem] text-white rounded-lg ">
            <div class="flex flex-col items-center px-8 text-xl lg:px-16">
              <h2 class="pt-12 text-2xl uppercase md:text-3xl lg:text-3xl">
                Night quest
              </h2>
              <p class="py-8 inter">
                <span class="text-3xl font-semibold lg:text-4xl inter">243</span>dkk / group
              </p>
              <p class="text-base lg:text-lg inter">
                Fantasy Quest Esbjerg is an adventure race that you can join during the Fantasy Festival in Esbjerg on 14 September 2024. The race includes a quest with different tasks to solve along the route, based on a unique fantasy story created in collaboration with Lakserytteren. <br><br>The event is divided into two parts: the Family Quest and the Fantasy Quest. As darkness falls over Esbjerg, the difficulty of the quest increases. Participants have to think creatively and solve challenges that require courage, teamwork and ingenuity to complete the task and save Esbjerg. You can participate in the Evening Challenge either alone or with friends.
              </p>
              <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" class="btn text-[#002B59] pb-2 btn-second my-8">
                BUY TICKET
              </a>
            </div>
          </div>
        </div>
    </div>
    <div class="pt-20 bg-primary">
        <img src="/images/city.png" alt="City">
    </div>  

    <SliderMenu />

    <div id="slides2" class="bg-[#7A4686] lg:pb-16">
      <div class="container flex justify-center mx-auto ">
        <div class="bg-[#002B59] border-2 border-white rounded flex lg:flex-row md:flex-row flex-col justify-center text-white lg:max-w-3xl max-w-xs items-center p-8 slide2">
          <div class="space-y-6">
            <h2 class="text-xl uppercase">
              Visit us
            </h2>
            <p class="max-w-xl inter">
              This year's Fantasy Quest Esbjerg revolves around portals through which magical characters enter our world. During your quest, you will meet these fantastic creatures and solve the challenges they bring. Each portal offers a unique adventure and mixes reality with the mystical realm. Whether you join the Family Quest during the day or the Evening Quest, prepare to go through a portal and embark on an extraordinary journey.            </p>
          </div>
          <div class="flex justify-center pt-6 lg:pt-0 md:pt-0">
            <img src="/images/portal.png" alt="Portal" class="w-[90%]">
          </div>
        </div>
      </div>
      <SponsorMenu />
    </div>

    <FooterMenu/>
  </main>
</template>

<script>
document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
            preloader.style.opacity = 0;
        }, 3430);

        setTimeout(() => {
            preloader.style.display = "none";
        }, 3730);

    });

document.addEventListener("DOMContentLoaded", function () {
            var navbar = document.getElementById("navbar");
            var toggleButton = document.getElementById("toggleButton");
            var navbarContent = document.getElementById("navbarContent");
            var navbarButton = document.getElementById("navbarButton");

            toggleButton.addEventListener("click", toggleNavbar);

            function toggleNavbar() {
                navbarContent.classList.toggle("!block");
                navbarButton.classList.toggle("!block");
            }
        });

document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    for (let i = 0; i < 3; i++) {
        carouselItems[i].classList.remove('hidden');
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            carouselItems[currentIndex + 2].classList.add('hidden');
            currentIndex--;
            for (let i = currentIndex; i < currentIndex + 3; i++) {
                carouselItems[i].classList.remove('hidden');
            }
        } else {
            for (let i = 0; i < carouselItems.length; i++) {
                carouselItems[i].classList.add('hidden');
            }
            currentIndex = carouselItems.length - 3;
            for (let i = currentIndex; i < currentIndex + 3; i++) {
                carouselItems[i].classList.remove('hidden');
            }
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < carouselItems.length - 3) {
            for (let i = currentIndex; i < currentIndex + 3; i++) {
                carouselItems[i].classList.add('hidden');
            }
            currentIndex++;
            for (let i = currentIndex; i < currentIndex + 3; i++) {
                carouselItems[i].classList.remove('hidden');
            }
        } else {
            for (let i = 0; i < carouselItems.length; i++) {
                carouselItems[i].classList.add('hidden');
            }
            currentIndex = 0;
            for (let i = currentIndex; i < currentIndex + 3; i++) {
                carouselItems[i].classList.remove('hidden');
            }
        }
    });
});


import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ref } from 'vue';
import NavbarMenu from '../components/NavbarMenu.vue'
import SliderMenu from '../components/SliderMenu.vue'
import SponsorMenu from '../components/SponsorMenu.vue'
import FooterMenu from '../components/FooterMenu.vue'


export default {
  methods: {
    animateSlide() {
      gsap.from(".slide",{
          opacity: 0, 
          x: -200, 
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
              trigger: "#slides",
              start: "10% bottom"
          }
      });
      gsap.from(".slide2",{
          opacity: 0, 
          x: -200, 
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
              trigger: "#slides2",
              start: "10% bottom"
          }
      });
    }
  },
  components: {
    NavbarMenu,
    SliderMenu,
    SponsorMenu,
    FooterMenu
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    this.animateSlide()
  },
  setup() {
    const selectedCategory = ref('Day');

    return {
      selectedCategory,
      gsap
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
    background: #002B59;
    z-index: -1;
    transition: 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
  
  .btn-nothing{
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
  .btn:hover::before {
    width: 100%;
    left: 0;
    right: unset;
  }
  .btn:hover {
    box-shadow: 0 0 #ffe00b, 0 0 #151515;
    color: white;
  }

  .buy-ticket::before{
    background-color: #4EB4D5;
  }

  .buy-ticket:hover{
    color:#002B59;
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

@media (max-width: 991.98px) {
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
    font-size: 12px;
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
}

@media (max-width:500px){
  .btn{
    font-size:10px;
  }

  .btn-nothing{
    width: 12rem;
    display:flex;
    text-align: center;
  }
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

</style>
