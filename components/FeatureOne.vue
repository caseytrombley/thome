<template>
    <div class="section-padding-t90-b100">
        <div class="container">
            <!-- Section Title Start -->
            <SectionTitle
              title="We provide a range of community services"
              sub-title="Start heading in the right direction with our dedicated staff of trained professionals"
              add-class-name="mb-60"
            />
            <!-- Section Title End -->

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
                <div class="col mt-30" data-aos="fade-up" v-for="(feature, index) in features" :key="index">
                    <div class="icon-box text-center" :class="addClassName">
                        <div class="icon">
                            <img class="svgInject" :src="feature.iconSrc" :alt="feature.title">
                        </div>
                        <div class="content">
                            <h3 class="title">{{ feature.title }}</h3>
                            <div class="desc">
                                <p>{{ feature.text }}</p>
                            </div>
                            <n-link to="/about" class="link">Learn More</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["addClassName"],

        components: {
            SectionTitle: () => import("@/components/SectionTitle"),
        },

        data() {
            return {
                features: [
                    {
                        id: 1,
                        title: "Transportation",
                        text: "We provide safe, reliable, efficient, and cost-effective transit, Para-transit, and non-emergency rides for healthcare appointments",
                        iconSrc: "/images/svg/van.svg"
                    },
                    {
                        id: 2,
                        title: "Assisted Living",
                        text: "Services provided include homemaking, chore, personal care, meals, and other supports.",
                        iconSrc: "/images/svg/charity.svg"
                    },
                ]
            }
        },
    };
</script>
