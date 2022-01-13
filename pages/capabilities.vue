<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <BreadcrumbOne :items="items" title="Capabilities Statement" backgroundUrl= "/images/bg/breadcrumb-bg-three.jpg" />

        <ServiceWrapper />


<!--        <FunfactWithTitle />-->

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
            ServiceWrapper: () => import('@/components/ServiceWrapper'),
            SuccessStory: () => import('@/components/SuccessStory'),
            AboutFour: () => import('@/components/AboutFour'),
            FunfactWithTitle: () => import('@/components/FunfactWithTitle'),
            ContactSectionTwo: () => import('@/components/ContactSectionTwo'),
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
                        text: 'Capabilities',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Capabilities'
            }
        },
    };
</script>


