if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let n={};const f=e=>d(e,a),b={module:{uri:a},exports:n,require:f};i[a]=Promise.all(c.map((e=>b[e]||f(e)))).then((e=>(r(...e),n)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/11/17/进入小李的世界吧！/index.html",revision:"220b9a66c72dd012f0683d5d36a833c6"},{url:"2023/03/04/代码块演示/演示/index.html",revision:"f1ec4a8aecacfb8fd48b925f7e7daa6b"},{url:"2023/05/04/关于小说blog/index.html",revision:"972c4c901fb8853fd704a8ab8896e02d"},{url:"2023/05/04/前言/index.html",revision:"9227e7f356da46999b20f8c222023d0c"},{url:"2023/05/04/第一回/index.html",revision:"2602c8cb47461bd15ad4b41fa5feffcd"},{url:"2023/06/16/php之数据库/index.html",revision:"92fd47ca56ecc5189686bf6698073920"},{url:"2023/06/16/php之表单/index.html",revision:"ba76a68d50c82afeb9be0055b896352d"},{url:"2023/10/08/php之文件上传/index.html",revision:"6c7fe3ed8f02696278c2c512b11d3e9d"},{url:"2024/05/19/脑机接口在神经康复中的应用/index.html",revision:"1069cea815904e65be9ae1b6fb027659"},{url:"2024/05/20/自然语言处理NLP/index.html",revision:"cd24f5ef4086ded1f0324e323794bdff"},{url:"2024/05/22/Web3介绍/index.html",revision:"f8eac4f6d27480f3ad195b7968a0835f"},{url:"2024/05/28/hexo框架原理/index.html",revision:"3de2332157428abdb7b11110b19b02e7"},{url:"2024/05/29/超算简介/index.html",revision:"e4e2a3dec89e1adbc75465086a306fb0"},{url:"2024/08/04/NLP入门/index.html",revision:"3646b9db6f0deebb63293b7cc493a2ff"},{url:"2024/08/04/基于Transformer解决机器翻译任务/index.html",revision:"9699b2ed45b2aa03603ef98f54402760"},{url:"2024/08/13/关于模型微调/index.html",revision:"c6dbcd852577a3eb98cbd47f6a818161"},{url:"2025/03/07/论文解读-Agent-AI-Surveying-the-Horizons-of-Multimodal-Interaction/index.html",revision:"962b279ce4b7e1712190d3b39d501923"},{url:"2025/03/10/论文解读-CLIP-Learning-Transferable-Visual-Models-From-Natural-Language-Supervision/index.html",revision:"babea726fb82324c9720573256fa9dd7"},{url:"404.html",revision:"3752002ff2601444862d4716830481cf"},{url:"about/index.html",revision:"16f90e21a9bcb1ba7de63c7bf94156fb"},{url:"archives/2022/11/index.html",revision:"34ae70c723f2af2b11aee34cf25dc014"},{url:"archives/2022/index.html",revision:"a143ce34b74c7c54fc3b1e3c795ef0a9"},{url:"archives/2023/03/index.html",revision:"63eb11219f74ac564113b47ceec7b2a3"},{url:"archives/2023/05/index.html",revision:"a2dff4d64aa703d00c729115729244da"},{url:"archives/2023/06/index.html",revision:"8042c17a77565697dda7248b3395110a"},{url:"archives/2023/10/index.html",revision:"e04ae4b71e18d3d019794ab56d4f78fc"},{url:"archives/2023/index.html",revision:"c47619b04e61d1dfb41dc23afb34feb6"},{url:"archives/2024/05/index.html",revision:"d6cc23e987464eb6f9068fca80f87f83"},{url:"archives/2024/08/index.html",revision:"c55c7099c5c6603a014a4bb682131617"},{url:"archives/2024/index.html",revision:"3ea6f45225cf027d0d41fcabba9fc660"},{url:"archives/2025/03/index.html",revision:"529415c8930174dd04e25ec5c4946ae2"},{url:"archives/2025/index.html",revision:"1a9891a7c3823f72b049a1886a5cfaa9"},{url:"archives/index.html",revision:"c28cc7d9c22a1c3fa028148eaedc2742"},{url:"archives/page/2/index.html",revision:"a0be6fcf8e2cca5f6692c99b49dbe048"},{url:"artitalk/index.html",revision:"d6915905fb48cec8232f60f683da1b5f"},{url:"categories/index.html",revision:"adbe7f10ecfa6111e3a7c9ec9e4d39b9"},{url:"comment/index.html",revision:"9d16543853f3f60054cad13e562a10fe"},{url:"css/background.css",revision:"c8d760a4449afd6a4edb3fd44b0716d2"},{url:"css/index.css",revision:"4ba26fab061be3d3d4cf5513d76c25e7"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/108-1.png",revision:"cc40fceca09acd95c40c7f1a4e54df7f"},{url:"img/108-2.png",revision:"70ddeadac77f2e8164f2f179906c1521"},{url:"img/20250307.png",revision:"2b4ee84fcf33ad472b70ef1d1db5a0ca"},{url:"img/20250310.png",revision:"4e8ce79c509f029926fc3db73f23704f"},{url:"img/3D眼镜.png",revision:"6419f897ae6b2a139753e1c95b853c42"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/519-1.png",revision:"4187c2e2ca6a19ad7bed6c5f3d863f45"},{url:"img/519-2.png",revision:"2e6d6405ba63e205aeb77232d6126d59"},{url:"img/519-3.png",revision:"3c986b0444bb99a0f8370aec47265fdd"},{url:"img/519-4.png",revision:"45f0e1a85f6d71ca0d0b803a3997f375"},{url:"img/520-1.png",revision:"c0049f673ce6ca202f93ce2d41c636b3"},{url:"img/520-2.png",revision:"7c53154687642cfc3b743dddcf4b0c75"},{url:"img/520-3.png",revision:"830678eede31bb64a4a19e869f83faa1"},{url:"img/520-4.png",revision:"5367607b8128a6e94c2d28e1ececddf3"},{url:"img/520-5.png",revision:"2a81d142dc2a7585a6cec3d454aa79e0"},{url:"img/520-6.png",revision:"af198e2d6b6d2cdda150f3071a5c5485"},{url:"img/520-7.png",revision:"dabd524f451c709e3957b9c58172e226"},{url:"img/520-8.png",revision:"11bb6c32c9bd515055b80d8d42dd7287"},{url:"img/529-1.webp",revision:"83c94e41b6bc59384b94db7436e06797"},{url:"img/529-2.webp",revision:"32f1a018c7e1a6f64d4f66c16650108a"},{url:"img/615-1.png",revision:"bd87057e0900fa945f78ab4a34ce1ca2"},{url:"img/615-2.png",revision:"23b7bb917698c9fdc27a3b8391e173f6"},{url:"img/615-3.png",revision:"95a83865541767fe1e8bdc597757fd34"},{url:"img/615-4.png",revision:"d89f57d6a336915d255d4aacdc80edcf"},{url:"img/615-5.png",revision:"b0dc62eb31b2ce701a25e363277d0659"},{url:"img/615-6.png",revision:"5b76854bec8188182b9ecdf2baa8848f"},{url:"img/616-1.png",revision:"d55a2a97ad40ba7d6553a34391a747af"},{url:"img/616-2.png",revision:"64bb86d8c23f5ba4b86e04344d0597cb"},{url:"img/616-3.png",revision:"a061a4d157368e222eeecffb5e6a7750"},{url:"img/616-4.png",revision:"c75ef13532a9166555e2a57e7d0cb6ea"},{url:"img/616-5.png",revision:"c6193ca34f323e562b4bcbd0526a2240"},{url:"img/616-6.png",revision:"1534236b86a18205c506b2b03c4c6c5f"},{url:"img/8-4nlp.jpg",revision:"3cc7ea5d9e28d5e2cc6128ec26483872"},{url:"img/8.4.1.png",revision:"ac27a5d80f8ffde1d5d051c45e65e48d"},{url:"img/8.4.2.png",revision:"84a6e77c7f14b0201deee586560e399c"},{url:"img/8.4.3.png",revision:"0dc50c0bed259f1034ad4d23cbfb907c"},{url:"img/8.4.4.png",revision:"597a8d86d75bba4b81eb919013c3c3f3"},{url:"img/8.4.5.png",revision:"411f8ae030481ebd1b70d2cc5b2be5e3"},{url:"img/8.4.6.png",revision:"09d71bdd9854f480dbf1fcaea92d8300"},{url:"img/8.4.7.png",revision:"ab403241bff9f94ee653eda450948c9d"},{url:"img/8.4.8.png",revision:"75db0620b7aa22f85286c3f1841119bc"},{url:"img/8.5.1.png",revision:"84e4bfaf57546040367a239aa746d8c4"},{url:"img/8.5.2.png",revision:"768d5a911b0ac9b3c3abd6bb2910432d"},{url:"img/8.5.3.png",revision:"98ee31e63b68625360bb52ab20866516"},{url:"img/8.5.4.png",revision:"138eeb9a826012c4d79241218f78a78f"},{url:"img/8.5.6.png",revision:"4cebb46754b737d8e49898c5ff824ba4"},{url:"img/813-1.png",revision:"cd026a18c4a890b79fc6977fbcc891c7"},{url:"img/813-2.png",revision:"47d3405e583c2062265db4a47e7f3f81"},{url:"img/813-3.png",revision:"73e2774844d5a00a08f91e5d3f5a263c"},{url:"img/813.jpg",revision:"fece3cdf3c5767fc634d9a09959dacef"},{url:"img/about.jpg",revision:"adc8f603874c992cf7f88cc6a0480295"},{url:"img/Agent-img12.png",revision:"f5559c7d02ae73c581cda30a136a51ea"},{url:"img/Agent-img13.png",revision:"0c4cd5b53d1a50a118f16ccc92c7c46d"},{url:"img/Agent-img5.png",revision:"bfb5a1f1e90a523123576af0150dd402"},{url:"img/Agent-img7.png",revision:"cd636d62f8fab71a9586c890c5489861"},{url:"img/alipay.jpg",revision:"37e5b0cb738da6289525d9d92dadd353"},{url:"img/archive_img.jpg",revision:"7234513a279cf9c8ad1872fd480c29c1"},{url:"img/background.jpg",revision:"035246ebc5ba57cb06fcf0a9b35be306"},{url:"img/category_img.jpg",revision:"6fb03f892acc801dace09f79d4cc4080"},{url:"img/CLIP-img1.png",revision:"07de5ab0a3f61d3ad6832daeb5293756"},{url:"img/CLIP-img2.png",revision:"0558df57d44b24385365194e9ecc8e9b"},{url:"img/CLIP-img3.png",revision:"3021dbbf062525c67fe42b896ac41a1c"},{url:"img/CLIP-img4.png",revision:"7df7a87443fa3653b2c9b56dee522bbb"},{url:"img/CLIP-img5.png",revision:"1ce30d7229e41b2dca04ea340b9e3e75"},{url:"img/CLIP-img6.png",revision:"ece2d746be8a2b1cb4e5d69b9ee51b6f"},{url:"img/comment.jpg",revision:"70eae5703f2841a991bdd09b048e6362"},{url:"img/default_cover.jpg",revision:"34643fd5308669424f85e446a48b40ca"},{url:"img/default.jpg",revision:"033713665236e8f4e81d18e2a347532d"},{url:"img/diyihui.jpg",revision:"cf6a33f66862090e9b653b9195eca6ff"},{url:"img/face.jpg",revision:"ecf6d82956462213d236bbe12f4e2c49"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/gm.jpg",revision:"6be1aea7d067dc37531a1f979a689ad9"},{url:"img/heart.png",revision:"1cc2d5cd193046ebd1d7a2c92d09d849"},{url:"img/hexokj.jpg",revision:"7e0d8f7e53de765240eb39d7e7785a82"},{url:"img/njjk.jpg",revision:"7e654d18bc8dd1e7025e15821bae6dcf"},{url:"img/NLP.png",revision:"2377596aaf757511546f99819d8e5dd8"},{url:"img/php.jpg",revision:"3434a6cfaa9038e028ec809aa190a391"},{url:"img/shuoshuo1.jpg",revision:"e8b08e572e714d9f4cbf2f93d977ca10"},{url:"img/sjksh.jpg",revision:"76e69452ff9b305bd23cd4890eef7032"},{url:"img/super.jpg",revision:"4d140f558c673acf731805c5774b38c2"},{url:"img/tag_img.jpg",revision:"11bc10b2a6f7ad201f78ee1d926b491a"},{url:"img/Top.jpg",revision:"aa2e74eedf5c1a06edafa1cc48c22b32"},{url:"img/transformer.jpg",revision:"8b742cc2d1959cef4e6de34bc858fb0d"},{url:"img/Web1.png",revision:"92f10159e8f4e36b4f71d3d9074e5780"},{url:"img/web2.png",revision:"9cb9a152e6a69e3a0b96614a299f1354"},{url:"img/Web3.jpg",revision:"e2bc22c645ec1565e2a01fde1e6c6a2f"},{url:"img/web33.png",revision:"e24b9cebe2d9674fcd7a3701dc70f1c0"},{url:"img/wechat.jpg",revision:"a0c0b92395cbdf0e33ed75284566de77"},{url:"img/yanshi.jpg",revision:"0844de5ef73ee09acd10fb47bfb8119b"},{url:"img/yt.jpg",revision:"532c783bf9867b1987697afacf7ce083"},{url:"index.html",revision:"e9724e725b1c1ef64dc7adaa333114a7"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"ffc4f9ad8ed268442ac4a30dc4e44827"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"84ae37027ae8fed1da33bfb75bd1188b"},{url:"link/index.html",revision:"6d8662cc3e1fd5fc1bfcedeac8082030"},{url:"movies/index.html",revision:"559340082cd29316814ff4005d358827"},{url:"music/index.html",revision:"8463a101d4aa26a1961c0fae58f0352f"},{url:"page/2/index.html",revision:"2998a4b000b26d7779d6600bb2fe26c7"},{url:"photos/index.html",revision:"636c283a3bf83ee063bd2f52594dcd33"},{url:"shuoshuo/index.html",revision:"3e92e617439cc8e2d3d7527899fda464"},{url:"tags/hexo/index.html",revision:"b7844f24c3256f4cd49b075fc9fd19d0"},{url:"tags/index.html",revision:"533ed45a41b909b10f6db88320e03416"},{url:"tags/NLP/index.html",revision:"5d626e25a34f19a370e632c544c3022d"},{url:"tags/php/index.html",revision:"61fb6c70dcfe5e06a01763a7ffb17972"},{url:"tags/shuoshuo/index.html",revision:"f326939f55a7dc1b3b428e16286ebdf7"},{url:"tags/专业前沿/index.html",revision:"9b11bddfffadee857f21547c2d5c027b"},{url:"tags/前沿技术解读/index.html",revision:"3574c0c9afb83b1b3311d2914a3d362b"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
