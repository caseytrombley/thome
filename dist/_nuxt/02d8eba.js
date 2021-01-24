(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{320:function(t,e,n){"use strict";n.r(e);n(8),n(9);var o=n(327),l=n.n(o),r={props:["addClassName","imgSrc","dataDepth"],mounted:function(){var t=document.querySelectorAll(".scene");t&&t.forEach((function(t,i){new l.a(t)}))}},c=n(49),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"shape scene",class:this.addClassName},[e("span",{attrs:{"data-depth":this.dataDepth}},[e("img",{attrs:{src:this.imgSrc,alt:"shape image"}})])])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,n){"use strict";n.r(e);var o={name:"SectionTitle",props:["title","subTitle","addClassName"]},l=n(49),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title text-center",class:t.addClassName,attrs:{"data-aos":"fade-up"}},[n("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v(t._s(t.subTitle))])])}),[],!1,null,null,null);e.default=component.exports},322:function(t,e,n){"use strict";n.r(e);var o={props:["items","title","backgroundUrl"]},l=n(49),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-title-section section-padding-top bg-cover",style:{backgroundImage:"url("+this.backgroundUrl+")"},attrs:{"data-overlay":"0.7"}},[e("div",{staticClass:"page-title"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v(this._s(this.title))])])]),this._v(" "),e("div",{staticClass:"page-breadcrumb position-static"},[e("div",{staticClass:"container"},[e("b-breadcrumb",{staticClass:"page-breadcrumb",attrs:{items:this.items}})],1)])])}),[],!1,null,null,null);e.default=component.exports},328:function(t){t.exports=JSON.parse('[{"id":1,"title":"How your sales can work together in account-based marketing","date":"Apr 06, 2020","view":70,"imgSrc":"/images/blog/370/blog-1.jpg","bigImgSrc":"/images/blog/770/blog-1.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":"8"},{"id":2,"title":"The six things marketers need to understand about DTC marketing","date":"Jun 26, 2020","view":92,"imgSrc":"/images/blog/370/blog-2.jpg","bigImgSrc":"/images/blog/770/blog-2.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":"9"},{"id":3,"title":"Eleven top tips for developing agile marketing","date":"May 16, 2020","view":55,"imgSrc":"/images/blog/370/blog-3.jpg","bigImgSrc":"/images/blog/770/blog-3.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":"15"},{"id":4,"title":"Eleven top tips for developing agile marketing","date":"Feb 14, 2020","view":36,"imgSrc":"/images/blog/370/blog-4.jpg","bigImgSrc":"/images/blog/770/blog-1.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":"40"},{"id":5,"title":"How your sales can work together in account-based marketing","date":"Aug 26, 2020","view":46,"imgSrc":"/images/blog/370/blog-5.jpg","bigImgSrc":"/images/blog/770/blog-2.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":"32"},{"id":6,"title":"The six things marketers need to understand about DTC marketing","date":"Jun 22, 2020","view":34,"imgSrc":"/images/blog/370/blog-6.jpg","bigImgSrc":"/images/blog/770/blog-3.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":"64"}]')},329:function(t,e,n){"use strict";n.r(e);n(16);var o={components:{SectionTitle:function(){return Promise.resolve().then(n.bind(null,321))},ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,320))}}},l=n(49),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-padding-t110-b120 newsletter-section bg-cover",style:{backgroundImage:"url('/images/bg/newsletter.jpg')"},attrs:{"data-overlay":"0.7"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"cta-content text-center"},[e("SectionTitle",{attrs:{title:"Let’s get in touch","sub-title":"The contact information collected through this form will only be used to send a response to your inquiry.","add-class-name":"color-light"}}),this._v(" "),e("n-link",{staticClass:"btn btn-primary btn-hover-secondary mt-6",attrs:{to:"/contact-us"}},[this._v("Get Started")])],1)])])]),this._v(" "),e("ShapeWithAnimation",{attrs:{"add-class-name":"shape-1","data-depth":"1","img-src":"/images/shape-animation/newsletter-shape.png"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:n(321).default,ShapeWithAnimation:n(320).default})},333:function(t,e,n){"use strict";n.r(e);var o={props:["blog"]},l=n(49),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog"},[n("div",{staticClass:"thumbnail"},[n("n-link",{staticClass:"image",attrs:{to:"/blog-details"}},[n("img",{attrs:{src:t.blog.imgSrc,alt:t.blog.title}})])],1),t._v(" "),n("div",{staticClass:"info"},[n("ul",{staticClass:"meta"},[n("li",[n("i",{staticClass:"far fa-calendar"}),t._v(t._s(t.blog.date))]),t._v(" "),n("li",[n("i",{staticClass:"far fa-eye"}),t._v(t._s(t.blog.view)+" Views")])]),t._v(" "),n("h3",{staticClass:"title"},[n("n-link",{attrs:{to:"/blog-details"}},[t._v(t._s(t.blog.title))])],1),t._v(" "),n("n-link",{staticClass:"link",attrs:{to:"/blog-details"}},[n("mark",[t._v("Read More")])])],1)])}),[],!1,null,null,null);e.default=component.exports},393:function(t,e,n){"use strict";n.r(e);n(16);var o=n(328),l={components:{TheHeader:function(){return Promise.resolve().then(n.bind(null,323))},OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,324))},SearchPopup:function(){return Promise.resolve().then(n.bind(null,325))},BreadcrumbOne:function(){return Promise.resolve().then(n.bind(null,322))},BlogGridItem:function(){return Promise.resolve().then(n.bind(null,333))},CallToActionTwo:function(){return Promise.resolve().then(n.bind(null,329))},TheFooter:function(){return Promise.resolve().then(n.bind(null,326))}},data:function(){return{blogData:o,items:[{text:"Home",to:"/"},{text:"Blog Grid",active:!0}]}},head:function(){return{title:"Blog Grid"}}},r=n(49),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("TheHeader"),t._v(" "),n("OffCanvasMobileMenu"),t._v(" "),n("SearchPopup"),t._v(" "),n("BreadcrumbOne",{attrs:{items:t.items,title:"Find all our latest news, insights, and events",backgroundUrl:"/images/bg/breadcrumb-bg-four.jpg"}}),t._v(" "),n("div",{staticClass:"section-padding fix"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"},t._l(t.blogData,(function(t,e){return n("div",{key:e,staticClass:"col mt-30"},[n("BlogGridItem",{attrs:{blog:t}})],1)})),0),t._v(" "),n("div",{staticClass:"row mt-50"},[n("div",{staticClass:"col"},[n("paginate",{attrs:{"page-count":4,"page-range":3,"margin-pages":2,"prev-text":"Prev","next-text":"Next","container-class":"pagination center","page-class":"page-item"}})],1)])])]),t._v(" "),n("CallToActionTwo"),t._v(" "),n("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:n(323).default,OffCanvasMobileMenu:n(324).default,SearchPopup:n(325).default,BreadcrumbOne:n(322).default,BlogGridItem:n(333).default,CallToActionTwo:n(329).default,TheFooter:n(326).default})}}]);