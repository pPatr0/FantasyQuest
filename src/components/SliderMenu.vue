<template>
    <div class="relative py-20 overflow-hidden carousel bg-[#7A4686]">
        <div>
            <h2 class="pb-12 text-4xl text-center text-white uppercase">Characters</h2>
         </div>
        <div class="flex justify-center carousel-inner">
            <div class="carousel-item bg-black w-[300px] h-[300px] mx-10"></div>
            <div class="carousel-item bg-primary w-[300px] h-[300px] mx-10"></div>
            <div class="carousel-item bg-secondary w-[300px] h-[300px] mx-10"></div>
            <div class="carousel-item bg-black w-[300px] h-[300px] hidden mx-10"></div>
            <div class="carousel-item bg-black w-[300px] h-[300px]  hidden mx-10"></div>
            <div class="carousel-item bg-secondary w-[300px] h-[300px]  hidden mx-10"></div>
        </div>
        <div class="flex justify-center pt-12 space-x-4">
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