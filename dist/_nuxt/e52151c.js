(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{320:function(t,e,n){"use strict";n.r(e);n(8),n(9);var r=n(327),o=n.n(r),l={props:["addClassName","imgSrc","dataDepth"],mounted:function(){var t=document.querySelectorAll(".scene");t&&t.forEach((function(t,i){new o.a(t)}))}},c=n(49),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"shape scene",class:this.addClassName},[e("span",{attrs:{"data-depth":this.dataDepth}},[e("img",{attrs:{src:this.imgSrc,alt:"shape image"}})])])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,n){"use strict";n.r(e);var r={name:"SectionTitle",props:["title","subTitle","addClassName"]},o=n(49),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title text-center",class:t.addClassName,attrs:{"data-aos":"fade-up"}},[n("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v(t._s(t.subTitle))])])}),[],!1,null,null,null);e.default=component.exports},332:function(t,e,n){"use strict";n.r(e);n(16);var r={props:["addClassName"],components:{SectionTitle:function(){return Promise.resolve().then(n.bind(null,321))}},data:function(){return{features:[{id:1,title:"Transportation",text:"We provide safe, reliable, efficient, and cost-effective transit, Para-transit, and non-emergency rides for healthcare appointments",iconSrc:"/images/svg/van.svg"},{id:2,title:"Assisted Living",text:"Services provided include homemaking, chore, personal care, meals, and other supports.",iconSrc:"/images/svg/charity.svg"}]}}},o=n(49),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding-t90-b100"},[n("div",{staticClass:"container"},[n("SectionTitle",{attrs:{title:"We provide a range of community services","sub-title":"Start heading in the right direction with our dedicated staff of trained professionals","add-class-name":"mb-60"}}),t._v(" "),n("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"},t._l(t.features,(function(e,r){return n("div",{key:r,staticClass:"col mt-30",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"icon-box text-center",class:t.addClassName},[n("div",{staticClass:"icon"},[n("img",{staticClass:"svgInject",attrs:{src:e.iconSrc,alt:e.title}})]),t._v(" "),n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"desc"},[n("p",[t._v(t._s(e.text))])]),t._v(" "),n("n-link",{staticClass:"link",attrs:{to:"/about"}},[t._v("Learn More")])],1)])])})),0)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:n(321).default})},334:function(t,e,n){"use strict";n.r(e);n(16);var r={components:{SectionTitle:function(){return Promise.resolve().then(n.bind(null,321))},ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,320))}}},o=n(49),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-padding-t90-b100"},[e("div",{staticClass:"container shape-animate"},[e("SectionTitle",{attrs:{title:"We provide a range of transportation and care services","sub-title":"Our team of professionals truly care for our customers, our neighbors, our friends, and our family. We are proud to serve our community with the highest sense of dignity and respect. where they work","add-class-name":"mb-30"}}),this._v(" "),this._m(0),this._v(" "),e("shape-with-animation",{attrs:{"add-class-name":"shape-1","data-depth":"4","img-src":"/images/shape-animation/video-shape-1.png"}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"},[n("div",{staticClass:"col mt-30",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"contact-info",attrs:{"data-vivus-hover":""}},[n("div",{staticClass:"icon"},[n("img",{staticClass:"svgInject",attrs:{src:"/images/svg/linea/linea-basic-map.svg",alt:"Icon"}})]),t._v(" "),n("div",{staticClass:"info"},[n("h4",{staticClass:"title"},[t._v("Our Location")]),t._v(" "),n("span",{staticClass:"info-text"},[t._v("\n                          85 Swanson Rd "),n("br"),t._v(" Suite 320 C "),n("br"),t._v(" Boxborough MA, 01719")])])])]),t._v(" "),n("div",{staticClass:"col mt-30",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"contact-info",attrs:{"data-vivus-hover":""}},[n("div",{staticClass:"icon"},[n("img",{staticClass:"svgInject",attrs:{src:"/images/svg/linea/linea-basic-message-txt.svg",alt:"Icon"}})]),t._v(" "),n("div",{staticClass:"info"},[n("h4",{staticClass:"title"},[t._v("Give Us A Call")]),t._v(" "),n("span",{staticClass:"info-text"},[t._v(" (+1) 978-620-7091 ")])])])]),t._v(" "),n("div",{staticClass:"col mt-30",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"contact-info",attrs:{"data-vivus-hover":""}},[n("div",{staticClass:"icon"},[n("img",{staticClass:"svgInject",attrs:{src:"/images/svg/linea/linea-basic-mail-open-text.svg",alt:"Icon"}})]),t._v(" "),n("div",{staticClass:"info"},[n("h4",{staticClass:"title"},[t._v("Email Us")]),t._v(" "),n("span",{staticClass:"info-text"},[n("a",{attrs:{href:"mailto:thomelegacy@icloud.com"}},[t._v("thomelegacy@icloud.com")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:n(321).default,ShapeWithAnimation:n(320).default})},366:function(t,e,n){"use strict";n.r(e);n(16);var r={components:{SectionTitle:function(){return Promise.resolve().then(n.bind(null,321))},ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,320))}}},o=n(49),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-padding-t110-b120 newsletter-section bg-cover",style:{backgroundImage:"url('/images/bg/newsletter.jpg')"},attrs:{"data-overlay":"0.7"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"newsletter-content"},[e("SectionTitle",{attrs:{title:"Let’s get in touch","sub-title":"The contact information collected through this form will only be used to send information and updates about our services.","add-class-name":"color-light"}}),this._v(" "),this._m(0)],1)])])]),this._v(" "),e("ShapeWithAnimation",{attrs:{"add-class-name":"shape-1","data-depth":"1","img-src":"/images/shape-animation/newsletter-shape.png"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"newsletter-form"},[e("form",[e("input",{attrs:{type:"email",placeholder:"Enter your email",name:"mail"}}),this._v(" "),e("button",{staticClass:"btn btn-primary btn-hover-secondary"},[this._v("Submit")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:n(321).default,ShapeWithAnimation:n(320).default})},367:function(t,e,n){"use strict";n.r(e);n(16);var r={components:{ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,320))}}},o=n(49),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding-t90 section-padding-bottom-200"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-7 col-lg-6",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"about-image-area"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-1",dataDepth:"1",imgSrc:"/images/shape-animation/about-shape-1.png"}})],1)]),t._v(" "),n("div",{staticClass:"col-xl-5 col-lg-6",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"about-content-area about-one"},[t._m(3),t._v(" "),n("p",[t._v("We’re boldly committed, and refreshingly easy-going. Our passion for helping others is matched by our dedication to a customer-first approach.")]),t._v(" "),n("n-link",{staticClass:"btn btn-primary btn-hover-secondary mt-4",attrs:{to:"/about"}},[t._v("About Us")])],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title text-center",attrs:{"data-aos":"fade-up"}},[e("h2",{staticClass:"title"},[this._v("We provide a range of transportation and care services")]),this._v(" "),e("p",{staticClass:"sub-title"},[this._v("Our team of professionals truly care for our customers, our neighbors, our friends, and our family. We are proud to serve our community with the highest sense of dignity and respect.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-image js-tilt"},[e("img",{attrs:{src:"/images/about/agency_about_1.jpg",alt:"images"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-image js-tilt"},[e("img",{attrs:{src:"/images/about/agency_about_2.jpg",alt:"images"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title-two"},[e("span",{staticClass:"sub-title"},[this._v("Every day brings new challenges")]),this._v(" "),e("h3",{staticClass:"title"},[this._v("We provide a range of services under the MFP Waiver Program")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ShapeWithAnimation:n(320).default})},368:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{swiperOptions:{speed:1e3,loop:!0,autoplay:!1,spaceBetween:30,navigation:{nextEl:".home-slider-next",prevEl:".home-slider-prev"}},sliderData:[{id:1,heading:"Services with Integrity",text:"We specialize in providing non-emergency transportation and care services for those with health or accessibility needs. We transport and care for those that require wheelchairs or any other mobility assistance.",bgImgSrc:"/images/hero-image/hero-1.jpg"},{id:2,heading:"Services with Integrity",text:"We specialize in providing non-emergency transportation and care services for those with health or accessibility needs. We transport and care for those that require wheelchairs or any other mobility assistance.",bgImgSrc:"/images/hero-image/hero-2.jpg"}]}}},o=n(49),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro-slider"},[n("swiper",{attrs:{options:t.swiperOptions}},t._l(t.sliderData,(function(e,r){return n("swiper-slide",{key:r,staticClass:"swiper-slide"},[n("div",{staticClass:"intro-section overlay bg-cover",style:{backgroundImage:"url("+e.bgImgSrc+")"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row row-cols-lg-1 row-cols-1"},[n("div",{staticClass:"col align-self-center"},[n("div",{staticClass:"intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8"},[n("h2",{staticClass:"title"},[t._v(t._s(e.heading))]),t._v(" "),n("div",{staticClass:"desc"},[n("p",[t._v(t._s(e.text))])]),t._v(" "),n("n-link",{staticClass:"btn btn-primary btn-hover-secondary",attrs:{to:"/about"}},[t._v("Get Started")]),t._v(" "),n("n-link",{staticClass:"btn btn-outline-white btn-hover-primary",attrs:{to:"/about"}},[t._v("Learn More")])],1)])])])])])})),1),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-slider-prev swiper-button-prev main-slider-nav"},[e("i",{staticClass:"fal fa-angle-left"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-slider-next swiper-button-next main-slider-nav"},[e("i",{staticClass:"fal fa-angle-right"})])}],!1,null,null,null);e.default=component.exports},384:function(t,e,n){"use strict";n.r(e);n(16);var r={components:{TheHeader:function(){return Promise.resolve().then(n.bind(null,323))},OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,324))},SearchPopup:function(){return Promise.resolve().then(n.bind(null,325))},HeroSliderOne:function(){return Promise.resolve().then(n.bind(null,368))},AboutOne:function(){return Promise.resolve().then(n.bind(null,367))},FeatureOne:function(){return Promise.resolve().then(n.bind(null,332))},Newsletter:function(){return Promise.resolve().then(n.bind(null,366))},CallToActionOne:function(){return Promise.resolve().then(n.bind(null,334))},TheFooter:function(){return Promise.resolve().then(n.bind(null,326))}},head:function(){return{title:"Services with Integrity"}}},o=n(49),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("TheHeader"),t._v(" "),n("OffCanvasMobileMenu"),t._v(" "),n("SearchPopup"),t._v(" "),n("HeroSliderOne"),t._v(" "),n("AboutOne"),t._v(" "),n("FeatureOne",{style:{backgroundColor:"#f8faff"}}),t._v(" "),n("Newsletter"),t._v(" "),n("CallToActionOne"),t._v(" "),n("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:n(323).default,OffCanvasMobileMenu:n(324).default,SearchPopup:n(325).default,HeroSliderOne:n(368).default,AboutOne:n(367).default,FeatureOne:n(332).default,Newsletter:n(366).default,CallToActionOne:n(334).default,TheFooter:n(326).default})}}]);