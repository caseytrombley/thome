<template>
    <div class="header-section" :class="{'is-sticky': isSticky}">
        <div class="header-inner">
            <div class="container position-relative">
                <div class="row justify-content-between align-items-center">

                    <!-- Header Logo Start -->
                    <div class="col-xl-3 col-auto order-0">
                        <div class="header-logo">
                            <n-link to="/">
                              <svg-logo class="svg-logo" />
                            </n-link>
                        </div>
                    </div>
                    <!-- Header Logo End -->

                    <!-- Header Main Menu Start -->
                    <div class="col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1">
                        <div class="menu-column-area d-none d-xl-block position-static">
                            <Navigation />
                        </div>
                        <!-- Header Search Start -->
                        <div class="header-search-area">
                            <!-- Header Login Start -->
                            <div class="header-search">
                                <a href="javascript:void(0)" class="header-search-toggle" @click="toggleClass('addClass', 'search-popup-open')">
                                    <i class="pe-7s-search pe-2x pe-va"></i>
                                </a>
                            </div>
                            <!-- Header Login End -->
                        </div>
                        <!-- Header Search End -->

                        <!-- Header Mobile Menu Toggle Start -->
                        <div class="header-mobile-menu-toggle d-xl-none ml-sm-2">
                            <button class="toggle" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                <i class="icon-top"></i>
                                <i class="icon-middle"></i>
                                <i class="icon-bottom"></i>
                            </button>
                        </div>
                        <!-- Header Mobile Menu Toggle End -->
                    </div>
                    <!-- Header Main Menu End -->

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            Navigation: () => import("@/components/Navigation"),
        },

        data() {
            return {
                isSticky: false,
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },

        methods: {
            // offcanvas mobilemenu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

            //offcanvas search
            toggleClass(addRemoveClass, className) {
                const el = document.querySelector('#search-popup');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>
<style lang="scss" scoped>
  .svg-logo {
      height: 70px;
  }

  .header-section {
      &.is-sticky {
          .svg-logo {
              fill: $thome-blue;

              path {
                fill: $thome-blue;
              }
          }

          ::v-deep {
              .link {
                color: white;
              }
          }
      }
  }
</style>
