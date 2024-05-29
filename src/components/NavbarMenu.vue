<template>
    <div class="relative w-full text-white uppercase bg-secondary lg:bg-transparent">
        <nav id="navbar" class="flex lg:flex-row flex-col py-4 px-8 lg:pt-12 pt-4 items-center justify-center text-[#FFFFFF] relative">
            <div class="flex justify-between w-full lg:block lg:w-fit">
                <button id="toggleButton" class="text-white lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-primary">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>                      
                </button>
            </div>
            <div id="navbarContent" class="hidden pt-4 lg:pt-0 lg:block lg:text-white text-primary">
                <ul class="flex flex-col mt-2 space-x-0 space-y-2 text-lg text-center lg:text-xl lg:space-y-0 lg:space-x-12 lg:flex-row">
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </ul>
            </div>
            <div id="navbarButton" class="relative hidden pt-4 pb-2 lg:pt-0 lg:pb-0 lg:block lg:absolute lg:right-0">
                <a class="pb-2 btn buy-ticket">
                    Buy Ticket
                </a>
            </div>
        </nav>
    </div>
</template>
