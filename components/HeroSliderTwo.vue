<template>
    <div class="intro-slider">
        <swiper :options="swiperOptions">
            <swiper-slide class="swiper-slide" v-for="(banner, index) in sliderData" :key="index">
                <div class="intro-section overlay bg-cover" :style="{ backgroundImage: `url(${banner.bgImgSrc})` }">
                    <div class="container">
                        <div class="row row-cols-lg-1 row-cols-1">
                            <div class="col align-self-center">
                                <div class="intro-content m-auto text-center">
                                    <h2 class="title">{{ banner.heading }}</h2>
                                    <div class="desc">
                                        <p>{{ banner.text }}</p>
                                    </div>
                                    <n-link to="/about" class="btn btn-primary btn-hover-secondary">Get Started</n-link>
                                    <n-link to="/about" class="btn btn-outline-white btn-hover-primary">Learn More</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <!-- pagination class -->
        <div class="home-slider-prev swiper-button-prev main-slider-nav">
            <i class="fal fa-angle-left"></i>
        </div>
        <div class="home-slider-next swiper-button-next main-slider-nav">
            <i class="fal fa-angle-right"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOptions: {
                    speed: 1000,
                    loop: true,
                    autoplay: false,
                    spaceBetween : 30,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },

                sliderData: [
                    {
                        id: 1,
                        heading: "Services with Integrity",
                        text: "Thome Legacy Enterprise LLC is a transportation company that specializes in non-Emergency medical transportation service, Leisure transportation and social engagement transportations. We transport and care for those that require wheelchairs or any other mobility assistance.",
                        bgImgSrc: "/images/hero-image/hero-3.jpg"
                    },
                    {
                        id: 2,
                        heading: "Services with Integrity",
                        text: "Thome Legacy Enterprise LLC is a transportation company that specializes in non-Emergency medical transportation service, Leisure transportation and social engagement transportations. We transport and care for those that require wheelchairs or any other mobility assistance.",
                        bgImgSrc: "/images/hero-image/hero-4.jpg"
                    }
                ]
            }
        },
    };
</script>
