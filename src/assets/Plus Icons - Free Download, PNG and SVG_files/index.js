(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1012:function(t,e,r){"use strict";r(17),r(8);var n=r(23),o=r.n(n).a.create({baseURL:"https://inceptum.icons8.com"});e.a={createRequest:function(t){var e,title=t.title,r=t.description,n=t.attachments,c=void 0===n?[]:n,d=t.platforms,l=void 0===d?[]:d,h=t.authToken,data={title:title,description:r,attachments:c,platforms:l};return h&&(e={Authorization:"Bearer ".concat(h)}),new Promise((function(t,r){o.request({url:"/api/requests",method:"put",data:data,headers:e}).then((function(e){e.data.success&&t(e.data)})).catch(r)}))},fetchRequests:function(t){var e,r=t.sort,n=t.page,c=void 0===n?1:n,d=t.limit,l=void 0===d?15:d,h=t.isMine,f=void 0!==h&&h,m=t.isAssignedToMe,v=void 0!==m&&m,y=t.isUnassigned,k=void 0===y?null:y,_=t.isAssignedTo,w=void 0===_?null:_,x=t.status,T=void 0===x?null:x,O=t.term,j=void 0===O?null:O,z=t.authToken,P={sort:r,page:c,limit:l,type:"icon"};return f&&(P.isMine=f),v&&(P.isAssignedToMe=v),k&&(P.isUnassigned=k),w&&(P.isAssignedTo=w),T&&(P.status=T),j&&(P.term=j),z&&(e={Authorization:"Bearer ".concat(z)}),new Promise((function(t,r){o.request({url:"/api/requests",method:"get",params:P,headers:e}).then((function(e){e.data.success&&t(e.data)})).catch(r)}))},fetchMakers:function(t){var e,r=t.authToken;return r&&(e={Authorization:"Bearer ".concat(r)}),new Promise((function(t,r){o.request({url:"/api/makers",method:"get",headers:e}).then((function(e){e.data.success&&t(e.data)})).catch(r)}))},fetchDetail:function(t){var e,r=t.id,n=t.authToken;return n&&(e={Authorization:"Bearer ".concat(n)}),new Promise((function(t,n){o.request({url:"/api/requests/".concat(r),method:"get",headers:e}).then((function(e){e.data.success&&t(e.data)})).catch(n)}))},togglevote:function(t){var e,r=t.action,n=t.id,c=t.authToken;return c&&(e={Authorization:"Bearer ".concat(c)}),new Promise((function(t,c){o.request({url:"/api/requests/".concat(n,"/").concat(r),method:"post",headers:e}).then((function(e){e.data.success&&t(e.data)})).catch(c)}))},assignMaker:function(t){var e,r=t.id,n=t.makerId,c=t.authToken;return c&&(e={Authorization:"Bearer ".concat(c)}),new Promise((function(t,c){o.request({url:"/api/requests/".concat(r,"/assignMaker"),method:"post",headers:e,data:{makerId:n}}).then((function(e){e.data.success&&t(e.data)})).catch(c)}))},takeToWork:function(t){var e,r=t.id,n=t.authToken;return n&&(e={Authorization:"Bearer ".concat(n)}),new Promise((function(t,n){o.request({url:"/api/requests/".concat(r,"/takeToWork"),method:"post",headers:e}).then((function(e){e.data.success&&t(e.data)})).catch(n)}))},deleteRequest:function(t){var e,r=t.id,n=t.authToken;return n&&(e={Authorization:"Bearer ".concat(n)}),new Promise((function(t,n){o.request({url:"/api/requests/".concat(r),method:"delete",headers:e}).then((function(e){e.data.success&&t(e.data)})).catch(n)}))},resolveRequest:function(t){var e,r=t.resolvedItems,n=t.id,c=t.authToken;return c&&(e={Authorization:"Bearer ".concat(c)}),new Promise((function(t,c){o.request({url:"/api/requests/".concat(n,"/resolve"),method:"post",headers:e,data:{resolvedItems:r}}).then((function(e){e.data.success&&t(e.data)})).catch(c)}))},uploadFiles:function(t){var e=t.file,r=t.authToken,n={"Content-Type":"multipart/form-data"};r&&(n.Authorization="Bearer ".concat(r));var c=new FormData;return c.append("file",e,e.name),new Promise((function(t,e){o.request({url:"/api/uploadFiles",method:"post",headers:n,data:c}).then((function(e){e.data.success&&t(e.data)})).catch(e)}))}}},1043:function(t,e,r){var content=r(1175);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("f5a66386",content,!0,{sourceMap:!1})},1174:function(t,e,r){"use strict";r(1043)},1175:function(t,e,r){(e=r(5)(!1)).push([t.i,'[data-v-7758d8dc]:root{--c-white:#fff;--c-transparent-black_100:rgba(0,0,0,0.03);--c-transparent-black_200:rgba(0,0,0,0.08);--c-transparent-black_300:rgba(0,0,0,0.15);--c-transparent-black_400:rgba(0,0,0,0.26);--c-transparent-black_500:rgba(0,0,0,0.4);--c-transparent-black_600:rgba(0,0,0,0.55);--c-transparent-black_700:rgba(0,0,0,0.7);--c-transparent-black_800:rgba(0,0,0,0.8);--c-transparent-black_900:rgba(0,0,0,0.9);--c-black_100:#f7f7f7;--c-black_200:#ebebeb;--c-black_300:#d9d9d9;--c-black_400:#bdbdbd;--c-black_500:#999;--c-black_600:#737373;--c-black_700:#4d4d4d;--c-black_800:#333;--c-black_900:#1a1a1a;--c-green_100:#e7f9eb;--c-green_200:#c3efcd;--c-green_300:#88dd9f;--c-green_400:#47d16c;--c-green_500:#1fb141;--c-green_600:#189a2e;--c-green_700:#0d731e;--c-green_800:#085e16;--c-green_900:#04490f;--c-red_100:#ffe3e3;--c-red_200:#ffbdbd;--c-red_300:#ff9b9b;--c-red_400:#f86a6a;--c-red_500:#ef4e4e;--c-red_600:#e12d39;--c-red_700:#cf1124;--c-red_800:#ab091e;--c-red_900:#8a041a;--c-yellow_100:#fffbea;--c-yellow_200:#fff3c4;--c-yellow_300:#fce588;--c-yellow_400:#fadb5f;--c-yellow_500:#f7c948;--c-yellow_600:#f0b429;--c-yellow_700:#de911d;--c-yellow_800:#cb6e17;--c-yellow_900:#b44d12;--c-blue_100:#e6f6ff;--c-blue_200:#bae3ff;--c-blue_300:#7cc4fa;--c-blue_400:#47a3f3;--c-blue_500:#2186eb;--c-blue_600:#0967d2;--c-blue_700:#0552b5;--c-blue_800:#03449e;--c-blue_900:#01337d;--c-body:var(--c-white);--c-text:var(--c-black_900);--spacer-2xs:0.25rem;--spacer-xs:0.5rem;--spacer-sm:1rem;--spacer-base:1.5rem;--spacer-lg:2rem;--spacer-xl:2.5rem;--spacer-2xl:5rem;--spacer-3xl:10rem}@media (min-width:1024px){.mobile-only[data-v-7758d8dc]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-7758d8dc]{display:none!important}}[data-v-7758d8dc]:root{--font-family-primary:"Roboto",serif;--font-family-secondary:"Raleway",sans-serif;--font-light:300;--font-normal:400;--font-medium:500;--font-semibold:600;--font-bold:700;--font-extra-bold:800;--font-extra-extra-bold:900;--font-2xs:0.625rem;--font-xs:0.75rem;--font-sm:0.875rem;--font-base:1rem;--font-lg:1.125rem;--font-xl:1.5rem;--h1-font-size:2rem;--h2-font-size:1.5rem;--h3-font-size:1rem;--h4-font-size:0.875rem;--h5-font-size:0.75rem;--h6-font-size:0.75rem;--h1-line-height:40px;--h2-line-height:32px;--h3-line-height:24px;--h4-line-height:20px;--p-line-height:24px;--ui-14-line-height:20px;--font-h1:_font(--font-h1,var(--font-extra-extra-bold),var(--h1-font-size),var(--h1-line-height),var(--font-family-primary));--font-h2:_font(--font-h2,var(--font-bold),var(--h2-font-size),var(--h2-line-height),var(--font-family-primary));--font-h3:_font(--font-h3,var(--font-bold),var(--h3-font-size),var(--h3-line-height),var(--font-family-primary));--font-h4:_font(--font-h4,var(--font-bold),var(--h4-font-size),var(--h4-line-height),var(--font-family-primary));--font-p:_font(--font-p,var(--font-normal),var(--font-base),var(--p-line-height),var(--font-family-primary));--font-ui-14-regular:_font(--font-ui-14-regular,var(--font-normal),var(--font-sm),var(--ui-14-line-height),var(--font-family-primary))}@media (min-width:1024px){[data-v-7758d8dc]:root{--h1-font-size:2.5rem;--h2-font-size:1.5rem;--h3-font-size:1.125rem;--h4-font-size:0.875rem;--h1-line-height:48px}}@-webkit-keyframes spin-data-v-7758d8dc{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin-data-v-7758d8dc{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.request-page[data-v-7758d8dc]{padding:32px 24px}h1[data-v-7758d8dc]{margin-bottom:16px}.request-placeholders[data-v-7758d8dc]{position:relative;overflow:hidden}.request-placeholders[data-v-7758d8dc]:after{content:"";position:absolute;bottom:0;left:0;right:0;height:70%;background:linear-gradient(0deg,#fff,hsla(0,0%,100%,0))}.request-list[data-v-7758d8dc]{min-height:300px}.request-list[data-v-7758d8dc] .infinite-scroller .preloader{height:120px}.request-list[data-v-7758d8dc] .post+.post{margin-top:40px}.empty[data-v-7758d8dc]{height:500px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.empty .empty-icon[data-v-7758d8dc]{width:58px;height:58px;margin:0 auto 16px}.empty .empty-icon[data-v-7758d8dc] svg{display:block}.empty .empty-title[data-v-7758d8dc]{margin-bottom:8px;font-weight:600}.empty .empty-detail[data-v-7758d8dc]{max-width:360px}',""]),t.exports=e},3616:function(t,e,r){"use strict";r.r(e);r(14),r(12);var n=r(20),o=r(39),c=(r(172),r(17),r(25),r(13)),d=(r(30),r(10),r(8),r(11),r(1)),l=r(4),h=r(1012);r(32);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={layout:"request-icon",components:{requestSearch:function(){return r.e(83).then(r.bind(null,3671))},requestForm:function(){return r.e(76).then(r.bind(null,3669))},requestPost:function(){return r.e(80).then(r.bind(null,3668))},requestPlaceholder:function(){return r.e(79).then(r.bind(null,3667))}},data:function(){return{initialUser:!1,page:1,makers:null,pages:1,limit:15,query:"",sortBy:"-createdAt",filterBy:"all",total:0,initialEmpty:!1,searchNotfound:!1,loading:!1,loadingMore:!1,posts:[]}},computed:m(m(m({},Object(l.c)("request-icons",["getDesigners"])),Object(l.e)({user:function(t){return t.auth.user},platforms:function(t){return t.appInfo.platforms}})),{},{requestedPlatforms:function(){var t=this,e=["ultraviolet","dusk","Dusk_Wired","cotton","pastel_glyph","win10","win8","android"],r={};return Object.keys(this.platforms).map((function(n){e.includes(n)||(r[n]=t.platforms[n])})),r}}),watch:{user:function(t){!this.posts.length||t.isGuest||this.initialUser&&t.loaded||(this.page=1,this.posts=[],this.makers=[],this.fetchRequests(),this.fetchMakers())},query:function(t){if(0===t.length)return this.page=1,this.posts=[],void this.fetchRequests();this.searchHandler()}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,d,l,f,m,v,y,k,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.route,r=t.store,t.env,t.query,t.req,t.redirect,t.error,n=0,o=[],c=1,d=15,l=null,f=!1,m=!1,v=r.state.auth.user.authToken,e.prev=10,e.next=13,h.a.fetchRequests({sort:"-createdAt",authToken:v,limit:d});case 13:if(y=e.sent,o=y.docs,n=y.total,c=y.pages,o.length||(m=!0),k=r.state["request-icons"]&&r.state["request-icons"].designers,!v||k){e.next=25;break}return e.next=22,h.a.fetchMakers({authToken:v});case 22:(_=e.sent).docs&&_.docs.length&&_.docs.map((function(t){t.name||(t.name=t.email)})),l=_.docs;case 25:e.next=29;break;case 27:e.prev=27,e.t0=e.catch(10);case 29:return r.dispatch("updateSEO",{title:"Request an icon | Icons8",description:"Request icons in your favourite style. Help us make our iconic world a better place."}),e.abrupt("return",{total:n,pages:c,limit:d,posts:o,makers:l,initialEmpty:m,initialUser:f});case 31:case"end":return e.stop()}}),e,null,[[10,27]])})))()},mounted:function(){var t=this;window.addEventListener("load",this.notify),this.searchHandler=this.$utils.debounce((function(){t.search()}),500),this.makers?this.setDesigners(this.makers):this.makers=this.getDesigners()},beforeDestroy:function(){window.removeEventListener("load",this.notify)},methods:m(m({},Object(l.d)("request-icons",{setDesigners:"SET_DESIGNERS"})),{},{notify:function(){void 0===localStorage.requestFirstVisit&&this.$notify({icon:this.$icons["request/thumbsUp"],title:"You can vote for the icons",text:"The requested icons with the most votes we draw first",delay:0,onCloseHandler:function(){localStorage.requestFirstVisit=Date.now()}})},loadMore:function(){!this.loadingMore&&this.page<this.pages&&(this.page+=1,this.fetchRequests())},fetchRequests:function(){var t=this;if(!this.loading&&!this.loadingMore){this.searchNotfound=!1;var e={sort:this.sortBy,page:this.page,limit:this.limit,term:this.query,authToken:this.user.authToken};"object"===Object(o.a)(this.filterBy)&&Object.assign(e,this.filterBy),1===this.page&&(this.loading=!0),this.page>1&&(this.loadingMore=!0),h.a.fetchRequests(e).then((function(e){t.total=e.total,t.pages=e.pages,t.$nextTick((function(){t.posts=[].concat(Object(n.a)(t.posts),Object(n.a)(e.docs))})),t.posts.length||(t.searchNotfound=!0)})).catch((function(t){return console.warn(t)})).finally((function(){t.loading=!1,t.loadingMore=!1}))}},fetchMakers:function(){var t=this;h.a.fetchMakers({authToken:this.user.authToken}).then((function(e){t.makers=e.docs})).catch((function(t){return console.warn(t)}))},updateVotes:function(t,e){e.votesCount=t},requestAdd:function(data){this.pages>1&&this.pages>this.page&&this.posts.pop(),this.posts.unshift(data)},search:function(){this.page=1,this.posts=[],this.sortBy="-createdAt",this.filterBy="all",this.fetchRequests()},sort:function(param){this.sortBy=param,this.page=1,this.posts=[],this.fetchRequests()},filter:function(param){this.page=1,this.posts=[],this.filterBy=param,this.fetchRequests()}})},y=(r(1174),r(0)),component=Object(y.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"request-page"},[r("div",{staticClass:"container"},[r("h1",[t._v("Icon Request")]),r("request-form",{attrs:{styles:t.requestedPlatforms,user:t.user},on:{"request:create":t.requestAdd}}),t.initialEmpty?t._e():r("request-search",{attrs:{user:t.user,makers:t.makers},on:{"request:sort":t.sort,"request:filter":t.filter},model:{value:t.query,callback:function(e){t.query="string"==typeof e?e.trim():e},expression:"query"}}),r("div",{staticClass:"request-list"},[t.loading?[r("div",{staticClass:"request-placeholders"},t._l(5,(function(i){return r("request-placeholder",{key:i,attrs:{width:400,height:80}},[r("rect",{attrs:{x:"75",y:"20",rx:"4",ry:"4",width:"250",height:"8"}}),r("rect",{attrs:{x:"75",y:"35",rx:"4",ry:"4",width:"220",height:"8"}}),r("rect",{attrs:{x:"75",y:"50",rx:"4",ry:"4",width:"280",height:"8"}}),r("rect",{attrs:{x:"75",y:"0",rx:"6",ry:"6",width:"320",height:"12"}}),r("rect",{attrs:{x:"0",y:"0",rx:"6",ry:"6",width:"60",height:"65"}})])})),1)]:t.posts.length?[r("app-infinite-scroll",{attrs:{throttle:50,preloader:t.loadingMore},on:{infinite:t.loadMore}},t._l(t.posts,(function(e,n){return r("request-post",{key:n,attrs:{post:e,user:t.user,makers:t.makers,platforms:t.platforms},on:{"update:votes":function(r){return t.updateVotes(r,e)}}})})),1)]:t.searchNotfound?[r("div",{staticClass:"empty"},[r("div",{staticClass:"empty-icon",domProps:{innerHTML:t._s(t.$icons["request/requestSad"])}}),r("div",{staticClass:"empty-title"},[t._v("No requests found")])])]:t.initialEmpty?[r("div",{staticClass:"empty"},[r("div",{staticClass:"empty-icon",domProps:{innerHTML:t._s(t.$icons["request/requestEmpty"])}}),r("div",{staticClass:"empty-title"},[t._v("There are no requests")]),r("div",{staticClass:"empty-detail"},[t._v("Here you can request icons that you haven't found. By the way, your request will be the first.")])])]:t._e()],2)],1)])}),[],!1,null,"7758d8dc",null);e.default=component.exports}}]);