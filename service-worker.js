if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let f={};const s=e=>d(e,a),n={module:{uri:a},exports:f,require:s};i[a]=Promise.all(c.map((e=>n[e]||s(e)))).then((e=>(r(...e),f)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/11/17/进入小李的世界吧！/index.html",revision:"e65565d5164e620d4288d1ce4f715058"},{url:"2023/03/04/代码块演示/演示/index.html",revision:"244f6a08073ffd0e93fce87950cc90e8"},{url:"2023/05/04/关于小说blog/index.html",revision:"e442fdecf18d639b474a7ba6f2b9939f"},{url:"2023/05/04/前言/index.html",revision:"2feb2b12341879c0ea82bf752e212bf3"},{url:"2023/05/04/第一回/index.html",revision:"400d5180f8f286e1597e9cf4560f2539"},{url:"404.html",revision:"5fc702943f90057ea63581263e74621d"},{url:"about/index.html",revision:"a5dd2dd4dc8873fa28ec14c60ddc76fb"},{url:"archives/2022/11/index.html",revision:"c11415eae76deebb2a16da02ad13c392"},{url:"archives/2022/index.html",revision:"8d07b5584c759e0ae35c7f1964530de4"},{url:"archives/2023/03/index.html",revision:"1b2dae9ec4a1d3fda186774dbdbd6c87"},{url:"archives/2023/05/index.html",revision:"0a67e819cb500e6bd99933be0db93fba"},{url:"archives/2023/index.html",revision:"a522cd0b92b556195720f4185d8b6d37"},{url:"archives/index.html",revision:"c0efce8e1ffbf75efeb6ab7a00eb23e2"},{url:"artitalk/index.html",revision:"ae708108bae9120e1651220854435d4d"},{url:"categories/index.html",revision:"4bbe133f5a3bbe8ec401c4aaef8c49fa"},{url:"comment/index.html",revision:"25d312664aebd901d5aaec6765511cc6"},{url:"css/background.css",revision:"c8d760a4449afd6a4edb3fd44b0716d2"},{url:"css/index.css",revision:"4ba26fab061be3d3d4cf5513d76c25e7"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/3D眼镜.png",revision:"6419f897ae6b2a139753e1c95b853c42"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/about.jpg",revision:"adc8f603874c992cf7f88cc6a0480295"},{url:"img/alipay.jpg",revision:"37e5b0cb738da6289525d9d92dadd353"},{url:"img/archive_img.jpg",revision:"7234513a279cf9c8ad1872fd480c29c1"},{url:"img/background.jpg",revision:"035246ebc5ba57cb06fcf0a9b35be306"},{url:"img/category_img.jpg",revision:"6fb03f892acc801dace09f79d4cc4080"},{url:"img/comment.jpg",revision:"70eae5703f2841a991bdd09b048e6362"},{url:"img/default_cover.jpg",revision:"34643fd5308669424f85e446a48b40ca"},{url:"img/default.jpg",revision:"033713665236e8f4e81d18e2a347532d"},{url:"img/diyihui.jpg",revision:"cf6a33f66862090e9b653b9195eca6ff"},{url:"img/face.jpg",revision:"ecf6d82956462213d236bbe12f4e2c49"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/gm.jpg",revision:"6be1aea7d067dc37531a1f979a689ad9"},{url:"img/heart.png",revision:"1cc2d5cd193046ebd1d7a2c92d09d849"},{url:"img/shuoshuo1.jpg",revision:"e8b08e572e714d9f4cbf2f93d977ca10"},{url:"img/tag_img.jpg",revision:"11bc10b2a6f7ad201f78ee1d926b491a"},{url:"img/Top.jpg",revision:"aa2e74eedf5c1a06edafa1cc48c22b32"},{url:"img/wechat.jpg",revision:"a0c0b92395cbdf0e33ed75284566de77"},{url:"img/yanshi.jpg",revision:"0844de5ef73ee09acd10fb47bfb8119b"},{url:"img/yt.jpg",revision:"532c783bf9867b1987697afacf7ce083"},{url:"index.html",revision:"4b2a126a6f8015d6331b3ecedb54244b"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"ffc4f9ad8ed268442ac4a30dc4e44827"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"84ae37027ae8fed1da33bfb75bd1188b"},{url:"link/index.html",revision:"d7786a42768d9a473c9bfb3c91a5a88b"},{url:"movies/index.html",revision:"655762962e5261e96ec84f73ea6558e4"},{url:"music/index.html",revision:"1b230d4c2469b65189c7a62a161fcfea"},{url:"photos/index.html",revision:"13c255921d6dadaf5cd28fc46729d917"},{url:"shuoshuo/index.html",revision:"47f707e5db23f95d1f1f0dde52b84202"},{url:"tags/index.html",revision:"9a83f53c4c3d91a8a599e3f5babe5a34"},{url:"tags/shuoshuo/index.html",revision:"ede0a4c04a933d95e74d26f505d4f875"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
