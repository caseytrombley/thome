<template>
    <div class="footer-section" :style="{backgroundColor: '#030e22'}">
        <div class="container">
            <!-- Footer Top Widgets Start -->
            <div class="row section-padding pt-0 mtn-30">
                <!-- Footer Widget Start -->
                <div class="col-md-4 col-sm-6 col-12 mt-30">
                    <div class="footer-widget">
                        <div class="footer-logo">
                            <n-link to="/">
                              <svg-logo light />
<!--                                <img :src="footerData.footerAboutWidget.logoSrc" alt="Logo">-->
                            </n-link>
                        </div>
                        <div class="footer-widget-content">
                            <div class="content">
<!--                                <p><a href="tel:(+1)978-620-7091">{{ footerData.footerAboutWidget.telephone }}</a></p>-->
                                <p><a href="mailto:info@thomelegacy.com">{{ footerData.footerAboutWidget.email }}</a></p>
                            </div>
<!--                            <div class="footer-social-inline">-->
<!--                                <a :href="footerData.footerAboutWidget.twitterUrl" target="_blank">-->
<!--                                    <i class="fab fa-twitter-square"></i>-->
<!--                                </a>-->
<!--                                <a :href="footerData.footerAboutWidget.fbUrl" target="_blank">-->
<!--                                    <i class="fab fa-facebook-square"></i>-->
<!--                                </a>-->
<!--                                <a :href="footerData.footerAboutWidget.instagramUrl" target="_blank">-->
<!--                                    <i class="fab fa-instagram"></i>-->
<!--                                </a>-->
<!--                            </div>-->
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->

<!--                &lt;!&ndash; Footer Widget Start &ndash;&gt;-->
<!--                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30">-->
<!--                    <div class="footer-widget">-->
<!--                        <h4 class="footer-widget-title">{{ footerData.footerLinkTitleOne }}</h4>-->
<!--                        <div class="footer-widget-content">-->
<!--                            <ul>-->
<!--                                <li v-for="(nav, index) in footerData.navListOne" :key="index">-->
<!--                                    <n-link :to="nav.navUrl">{{ nav.navTitle }}</n-link>-->
<!--                                </li>-->
<!--                            </ul>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                &lt;!&ndash; Footer Widget End &ndash;&gt;-->

<!--                &lt;!&ndash; Footer Widget Start &ndash;&gt;-->
<!--                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30">-->
<!--                    <div class="footer-widget">-->
<!--                        <h4 class="footer-widget-title">{{ footerData.footerLinkTitleTwo }}</h4>-->
<!--                        <div class="footer-widget-content">-->
<!--                            <ul>-->
<!--                                <li v-for="(nav, index) in footerData.navListTwo" :key="index">-->
<!--                                    <n-link :to="nav.navUrl">{{ nav.navTitle }}</n-link>-->
<!--                                </li>-->
<!--                            </ul>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                &lt;!&ndash; Footer Widget End &ndash;&gt;-->

<!--                &lt;!&ndash; Footer Widget Start &ndash;&gt;-->
<!--                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30">-->
<!--                    <div class="footer-widget">-->
<!--                        <h4 class="footer-widget-title">{{ footerData.footerLinkTitleThree }}</h4>-->
<!--                        <div class="footer-widget-content">-->
<!--                            <ul>-->
<!--                                <li v-for="(nav, index) in footerData.navListThree" :key="index">-->
<!--                                    <n-link :to="nav.navUrl">{{ nav.navTitle }}</n-link>-->
<!--                                </li>-->
<!--                            </ul>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                &lt;!&ndash; Footer Widget End &ndash;&gt;-->

<!--                &lt;!&ndash; Footer Widget Start &ndash;&gt;-->
<!--                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30">-->
<!--                    <div class="footer-widget">-->
<!--                        <h4 class="footer-widget-title">{{ footerData.footerLinkTitleFour }}</h4>-->
<!--                        <div class="footer-widget-content">-->
<!--                            <ul>-->
<!--                                <li v-for="(nav, index) in footerData.navListFour" :key="index">-->
<!--                                    <n-link :to="nav.navUrl">{{ nav.navTitle }}</n-link>-->
<!--                                </li>-->
<!--                            </ul>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                &lt;!&ndash; Footer Widget End &ndash;&gt;-->
            </div>
            <!-- Footer Top Widgets End -->

            <!-- Footer Copyright Start -->
            <div class="row">
                <div class="col">
                    <p class="copyright">Copyright &copy; 2021 Thome Legacy Services. All Rights Reserved.</p>
                </div>
            </div>
            <!-- Footer Copyright End -->
        </div>
    </div>
</template>

<script>
    import footerData from '~/data/footer.json';

    export default {
        data() {
            return {
                footerData
            }
        },
    };
</script>
