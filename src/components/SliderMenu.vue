<template>
    <div class="relative py-20 overflow-hidden carousel bg-[#7A4686]">
        <div>
            <h2 class="pb-12 text-4xl text-center text-white uppercase">Characters</h2>
         </div>
        <div class="flex justify-center text-xl text-white carousel-inner">
            <div class="carousel-item w-[300px] h-[300px] mx-10 text-center">
                <h2 class="pb-2">Arkivaren</h2>
                <img src="/images/arkivaren.png" alt="" class="border-2 border-white rounded">
            </div>
            <div class="carousel-item w-[300px] h-[300px] mx-10 text-center">
                <h2 class="pb-2">Gnist</h2>
                <img src="/images/gnist.png" alt="" class="border-2 border-white rounded">
            </div>
            <div class="carousel-item w-[300px] h-[300px] mx-10 text-center">
                <h2 class="pb-2">Gygaz</h2>
                <img src="/images/gygaz.png" alt="" class="border-2 border-white rounded">
            </div>
            <div class="carousel-item w-[300px] h-[300px] hidden mx-10 text-center">
                <h2 class="pb-2">Havfruedronning</h2>
                <img src="/images/havfruedronning.png" alt="" class="border-2 border-white rounded">
            </div>
            <div class="carousel-item w-[300px] h-[300px]  hidden mx-10 text-center">
                <h2 class="pb-2">Malice</h2>
                <img src="/images/malice.png" alt="" class="border-2 border-white rounded">
            </div>
            <div class="carousel-item w-[300px] h-[300px]  hidden mx-10 text-center">
                <h2 class="pb-2">Vogterk</h2>
                <img src="/images/vogterk.png" alt="" class="border-2 border-white rounded">
            </div>
        </div>
        <div class="flex justify-center pt-12 mt-12 space-x-4">
            <button class="px-4 py-2 transform -translate-y-1/2 bg-white rounded-lg carousel-control prev">
                &lt;
            </button>
            <button class="px-4 py-2 transform -translate-y-1/2 bg-white rounded-lg carousel-control next">
                &gt;
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