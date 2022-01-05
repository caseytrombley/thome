<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="Contact Us" backgroundUrl= "/images/bg/breadcrumb-bg-five.jpg" />

        <CallToActionOne />

        <!--Google Map Area Start-->
        <div class="google-map-area section-padding-bottom">
            <div class="container">
                <div class="contact-map-area">
                    <iframe
                      class="contact-map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.1179182645396!2d-71.54839758410537!3d42.48904567917846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e393158ab08e59%3A0x853c4711e1546c8a!2s85%20Swanson%20Rd%2C%20Boxborough%2C%20MA%2001719!5e0!3m2!1sen!2sus!4v1641402437248!5m2!1sen!2sus"                      aria-hidden="false"
                      tabindex="0"
                      loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
        <!--Google Map Area Start-->

<!--        <ContactForm />-->

        <TheFooter />

    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BreadcrumbOne: () => import('@/components/BreadcrumbOne'),
            CallToActionOne: () => import('@/components/CallToActionOne'),
            ContactForm: () => import('@/components/ContactForm'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Contact Us',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Contact Us'
            }
        },
    };
</script>


