<template>
    <div class="relative py-20 overflow-hidden carousel bg-[#7A4686]">
        <div>
            <h2 class="pb-12 text-4xl text-center text-white uppercase">Characters</h2>
         </div>
        <div class="flex justify-center text-xl text-white carousel-inner">
            <div class="carousel-item w-[300px] h-[300px] lg:mx-10 mx-[20rem] text-center">
                <h2 class="pb-2">Arkivaren</h2>
                <img src="/images/arkivaren.png" alt="Arkivaren" class="border-2 border-white rounded">
            </div>
            <div class="carousel-item w-[300px] h-[300px] lg:mx-10 mx-[20rem] text-center">
                <h2 class="pb-2">Gnist</h2>
                <img src="/images/gnist.png" alt="Gnist" class="border-2 border-white rounded">
            </div>
            <div class="carousel-item w-[300px] h-[300px] lg:mx-10 mx-[20rem] text-center">
                <h2 class="pb-2">Gygaz</h2>
                <img src="/images/gygaz.png" alt="Gygaz" class="border-2 border-white rounded">
            </div>
            <div class="carousel-item w-[300px] h-[300px] hidden lg:mx-10 mx-[20rem] text-center">
                <h2 class="pb-2">Havfruedronning</h2>
                <img src="/images/havfruedronning.png" alt="Havfruedronning" class="border-2 border-white rounded">
            </div>
            <div class="carousel-item w-[300px] h-[300px]  hidden lg:mx-10 mx-[20rem] text-center">
                <h2 class="pb-2">Malice</h2>
                <img src="/images/malice.png" alt="Malice" class="border-2 border-white rounded">
            </div>
            <div class="carousel-item w-[300px] h-[300px]  hidden lg:mx-10 mx-[20rem] text-center">
                <h2 class="pb-2">Vogterk</h2>
                <img src="/images/vogterk.png" alt="Vogterk" class="border-2 border-white rounded">
            </div>
        </div>
        <div class="flex justify-center pt-12 mt-12">
            <button class="flex justify-center -mr-4 transform carousel-control prev">
                <img src="/images/arrow.png" alt="Arrow" class="w-1/2 rotate-180">
            </button>
            <button class="flex justify-center -ml-4 transform carousel-control next">
                <img src="/images/arrow.png" alt="Arrow" class="w-1/2">
            </button>
        </div>
    </div>
</template>
<style>
.carousel {
    overflow: hidden;
}

.carousel-inner {
    display: flex;
    transition: transform 0.3s ease-in-out;
}

.carousel-item {
    flex: 0 0 auto;
}

.carousel-control {
    cursor: pointer;
}

.prev, .next {
    top: 50%;
    transform: translateY(-50%);
}

</style>