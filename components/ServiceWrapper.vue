<template>
    <div class="section-padding-t90 section-padding-bottom">
        <div class="container">
            <!-- Section Title Start -->
<!--            <div class="section-title text-center" data-aos="fade-up">-->
<!--                <h2 class="title fz-32"></h2>-->
<!--                <p class="sub-title">We produce beautifully crafted creative solutions that transcend business goals. We provide the exceptional service we’d want to experience ourselves!</p>-->
<!--            </div>-->
            <!-- Section Title End -->

          <div class="section-statement">
            <p>
              <strong>Thome Legacy Enterprise LLC</strong> is a transportation company that specializes in non-Emergency medical transportation service, Leisure transportation and social engagement transportations.
            </p>
            <p>
              During the pandemic we have also be called upon to assist in Covid testing by multiple companies who worked to ensure safety in their workplaces.
              Teamed up with CIC Health and the Broad Institute, we facilitated weekly testing for multiple car Dealership in New England.

            </p>
            <p>
              As a minority owned small business with an MBE in certification in the commonwealth of Massachusetts, we are fully committed to delivering high quality service with integrity to all our clients.
            </p>
            <p>
              Thome Legacy provides a dependable option for transportation to ensure the continued progress of the patients care plan or maintenance of their all-around health and wellness.
              We are committed to providing quality and the most efficient services to our clients throughout the commonwealth of MA.
              We are fully committed to being on time for all transportation calls and requirements.
            </p>
          </div>

          <!-- About Wrapper Start -->
          <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 icon-box-shape-animation mtn-30">
            <div class="col mt-30" data-aos="fade-up" v-for="(service, index) in serviceData" :key="index">
              <ServiceItem :service="service" addClassName="box-border" />
            </div>

            <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/video-shape-1.png" />
          </div>
          <!-- About Wrapper End -->


        </div>
    </div>
</template>

<script>
    import serviceData from '~/data/service.json';

    export default {
        components: {
            ServiceItem: () => import('@/components/ServiceItem'),
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },

        data() {
            return {
                serviceData
            }
        },
    };
</script>
