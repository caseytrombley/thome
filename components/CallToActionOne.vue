<template>
    <div class="section-padding-t90-b100">
        <div class="container shape-animate">
            <!-- Section Title Start -->
            <SectionTitle title="We provide a range of transportation services" sub-title="Our team of professionals truly care for our customers, our neighbors, our friends, and our family. We are proud to serve our community with the highest sense of dignity and respect. where they work" add-class-name="mb-30" />
            <!-- Section Title End -->

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
                <div class="col mt-30" data-aos="fade-up">
                    <div class="contact-info" data-vivus-hover>
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-map.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">Our Location</h4>
                            <span class="info-text">
                              85 Swanson Rd <br> Suite 320 C <br> Boxborough MA, 01719</span>
                        </div>
                    </div>
                </div>

<!--                <div class="col mt-30" data-aos="fade-up">-->
<!--                    <div class="contact-info" data-vivus-hover>-->
<!--                        <div class="icon">-->
<!--                            <img class="svgInject" src="/images/svg/linea/linea-basic-message-txt.svg" alt="Icon">-->
<!--                        </div>-->
<!--                        <div class="info">-->
<!--                            <h4 class="title">Give Us A Call</h4>-->
<!--                            <span class="info-text"> (+1) 978-620-7091 </span>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

                <div class="col mt-30" data-aos="fade-up">
                    <div class="contact-info" data-vivus-hover>
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-mail-open-text.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">Email Us</h4>
                            <span class="info-text">
                                <a href="mailto:info@thomelegacy.com">info@thomelegacy.com</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <shape-with-animation add-class-name="shape-1" data-depth="4" img-src="/images/shape-animation/video-shape-1.png" />

        </div>
    </div>
</template>

<script>

    export default {
        components: {
            SectionTitle: () => import("@/components/SectionTitle"),
            ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
        },
    };
</script>
