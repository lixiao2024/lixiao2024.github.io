if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const b=e=>a(e,c),f={module:{uri:c},exports:n,require:b};i[c]=Promise.all(d.map((e=>f[e]||b(e)))).then((e=>(r(...e),n)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/11/17/进入小李的世界吧！/index.html",revision:"79962fc043faf6f526525a6a0723939f"},{url:"2023/03/04/代码块演示/演示/index.html",revision:"849f50064342a06384cbd65d857a928b"},{url:"2023/05/04/关于小说blog/index.html",revision:"086a6b30591281eaa390ba47b51575f7"},{url:"2023/05/04/前言/index.html",revision:"c50a80d2fe3af39b1e6362c38de05542"},{url:"2023/05/04/第一回/index.html",revision:"86db47e52c3b9c8084e1c59a9428e46b"},{url:"2023/06/16/php之数据库/index.html",revision:"c3012704acae3f87ea1c937fd5420116"},{url:"2023/06/16/php之表单/index.html",revision:"c9ba4adb2d5ba3bb5bd8827cbfa58994"},{url:"2023/10/08/php之文件上传/index.html",revision:"c8f9642f765b3df8cb76f5f460cd5dda"},{url:"2024/05/19/脑机接口在神经康复中的应用/index.html",revision:"57574f1d97ffe670afa7e2101cd5128c"},{url:"2024/05/20/自然语言处理NLP/index.html",revision:"40b5b1ede58b4a7282e5b400d4e0cd30"},{url:"2024/05/22/Web3介绍/index.html",revision:"d933eabcfdf895f3bae25d4d97d2aa18"},{url:"2024/05/28/hexo框架原理/index.html",revision:"daa816176633425b597293c58ef72b10"},{url:"2024/05/29/超算简介/index.html",revision:"69a010fc60407353fce4c7c52f5fcc24"},{url:"2024/08/04/NLP入门/index.html",revision:"cf1113aa73376e5492f79e8a3dd82b8d"},{url:"2024/08/04/基于Transformer解决机器翻译任务/index.html",revision:"fb7a6799f9c3075ca56815df4b869297"},{url:"404.html",revision:"b1c7aad543910004f0f069e28d0f8635"},{url:"about/index.html",revision:"8bb3ea67b8dcd3a35584ff3a621431ab"},{url:"archives/2022/11/index.html",revision:"6196f2e5fcd6f8f1159bca4f41ac2670"},{url:"archives/2022/index.html",revision:"263a279512a391fdd3c8b19b9188448c"},{url:"archives/2023/03/index.html",revision:"02e060a0c79970a248966b49e6aa1ea4"},{url:"archives/2023/05/index.html",revision:"f24ea61ad80e456eba581b606bc3b48a"},{url:"archives/2023/06/index.html",revision:"0ee45afec4a51b624b75c334984fa2b4"},{url:"archives/2023/10/index.html",revision:"f37cab89cb18ade0bb6f924205f23d13"},{url:"archives/2023/index.html",revision:"d0bdb09bc55a26aba8e4542215be1f91"},{url:"archives/2024/05/index.html",revision:"a94b80d6af038334ffca6938601e725f"},{url:"archives/2024/08/index.html",revision:"67b43b9cc3e8d6145000512a542c9eb0"},{url:"archives/2024/index.html",revision:"8d02ae926e30937b85e42066f337f612"},{url:"archives/index.html",revision:"432229e95c2e3375317d36c0e374807f"},{url:"archives/page/2/index.html",revision:"3956736d8c324a9d1e67daffef5ad5cb"},{url:"artitalk/index.html",revision:"23343272c2a718f7f7b1f32a3b7a4156"},{url:"categories/index.html",revision:"d42d572574c6e92dd25d8cb52c81d8bb"},{url:"comment/index.html",revision:"12a2b8e32824121079d470c301ed6b49"},{url:"css/background.css",revision:"c8d760a4449afd6a4edb3fd44b0716d2"},{url:"css/index.css",revision:"4ba26fab061be3d3d4cf5513d76c25e7"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/108-1.png",revision:"cc40fceca09acd95c40c7f1a4e54df7f"},{url:"img/108-2.png",revision:"70ddeadac77f2e8164f2f179906c1521"},{url:"img/3D眼镜.png",revision:"6419f897ae6b2a139753e1c95b853c42"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/519-1.png",revision:"4187c2e2ca6a19ad7bed6c5f3d863f45"},{url:"img/519-2.png",revision:"2e6d6405ba63e205aeb77232d6126d59"},{url:"img/519-3.png",revision:"3c986b0444bb99a0f8370aec47265fdd"},{url:"img/519-4.png",revision:"45f0e1a85f6d71ca0d0b803a3997f375"},{url:"img/520-1.png",revision:"c0049f673ce6ca202f93ce2d41c636b3"},{url:"img/520-2.png",revision:"7c53154687642cfc3b743dddcf4b0c75"},{url:"img/520-3.png",revision:"830678eede31bb64a4a19e869f83faa1"},{url:"img/520-4.png",revision:"5367607b8128a6e94c2d28e1ececddf3"},{url:"img/520-5.png",revision:"2a81d142dc2a7585a6cec3d454aa79e0"},{url:"img/520-6.png",revision:"af198e2d6b6d2cdda150f3071a5c5485"},{url:"img/520-7.png",revision:"dabd524f451c709e3957b9c58172e226"},{url:"img/520-8.png",revision:"11bb6c32c9bd515055b80d8d42dd7287"},{url:"img/529-1.webp",revision:"83c94e41b6bc59384b94db7436e06797"},{url:"img/529-2.webp",revision:"32f1a018c7e1a6f64d4f66c16650108a"},{url:"img/615-1.png",revision:"bd87057e0900fa945f78ab4a34ce1ca2"},{url:"img/615-2.png",revision:"23b7bb917698c9fdc27a3b8391e173f6"},{url:"img/615-3.png",revision:"95a83865541767fe1e8bdc597757fd34"},{url:"img/615-4.png",revision:"d89f57d6a336915d255d4aacdc80edcf"},{url:"img/615-5.png",revision:"b0dc62eb31b2ce701a25e363277d0659"},{url:"img/615-6.png",revision:"5b76854bec8188182b9ecdf2baa8848f"},{url:"img/616-1.png",revision:"d55a2a97ad40ba7d6553a34391a747af"},{url:"img/616-2.png",revision:"64bb86d8c23f5ba4b86e04344d0597cb"},{url:"img/616-3.png",revision:"a061a4d157368e222eeecffb5e6a7750"},{url:"img/616-4.png",revision:"c75ef13532a9166555e2a57e7d0cb6ea"},{url:"img/616-5.png",revision:"c6193ca34f323e562b4bcbd0526a2240"},{url:"img/616-6.png",revision:"1534236b86a18205c506b2b03c4c6c5f"},{url:"img/8-4nlp.jpg",revision:"3cc7ea5d9e28d5e2cc6128ec26483872"},{url:"img/8.4.1.png",revision:"ac27a5d80f8ffde1d5d051c45e65e48d"},{url:"img/8.4.2.png",revision:"84a6e77c7f14b0201deee586560e399c"},{url:"img/8.4.3.png",revision:"0dc50c0bed259f1034ad4d23cbfb907c"},{url:"img/8.4.4.png",revision:"597a8d86d75bba4b81eb919013c3c3f3"},{url:"img/8.4.5.png",revision:"411f8ae030481ebd1b70d2cc5b2be5e3"},{url:"img/8.4.6.png",revision:"09d71bdd9854f480dbf1fcaea92d8300"},{url:"img/8.4.7.png",revision:"ab403241bff9f94ee653eda450948c9d"},{url:"img/8.4.8.png",revision:"75db0620b7aa22f85286c3f1841119bc"},{url:"img/8.5.1.png",revision:"84e4bfaf57546040367a239aa746d8c4"},{url:"img/8.5.2.png",revision:"768d5a911b0ac9b3c3abd6bb2910432d"},{url:"img/8.5.3.png",revision:"98ee31e63b68625360bb52ab20866516"},{url:"img/8.5.4.png",revision:"138eeb9a826012c4d79241218f78a78f"},{url:"img/8.5.6.png",revision:"4cebb46754b737d8e49898c5ff824ba4"},{url:"img/about.jpg",revision:"adc8f603874c992cf7f88cc6a0480295"},{url:"img/alipay.jpg",revision:"37e5b0cb738da6289525d9d92dadd353"},{url:"img/archive_img.jpg",revision:"7234513a279cf9c8ad1872fd480c29c1"},{url:"img/background.jpg",revision:"035246ebc5ba57cb06fcf0a9b35be306"},{url:"img/category_img.jpg",revision:"6fb03f892acc801dace09f79d4cc4080"},{url:"img/comment.jpg",revision:"70eae5703f2841a991bdd09b048e6362"},{url:"img/default_cover.jpg",revision:"34643fd5308669424f85e446a48b40ca"},{url:"img/default.jpg",revision:"033713665236e8f4e81d18e2a347532d"},{url:"img/diyihui.jpg",revision:"cf6a33f66862090e9b653b9195eca6ff"},{url:"img/face.jpg",revision:"ecf6d82956462213d236bbe12f4e2c49"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/gm.jpg",revision:"6be1aea7d067dc37531a1f979a689ad9"},{url:"img/heart.png",revision:"1cc2d5cd193046ebd1d7a2c92d09d849"},{url:"img/hexokj.jpg",revision:"7e0d8f7e53de765240eb39d7e7785a82"},{url:"img/njjk.jpg",revision:"7e654d18bc8dd1e7025e15821bae6dcf"},{url:"img/NLP.png",revision:"2377596aaf757511546f99819d8e5dd8"},{url:"img/php.jpg",revision:"3434a6cfaa9038e028ec809aa190a391"},{url:"img/shuoshuo1.jpg",revision:"e8b08e572e714d9f4cbf2f93d977ca10"},{url:"img/super.jpg",revision:"4d140f558c673acf731805c5774b38c2"},{url:"img/tag_img.jpg",revision:"11bc10b2a6f7ad201f78ee1d926b491a"},{url:"img/Top.jpg",revision:"aa2e74eedf5c1a06edafa1cc48c22b32"},{url:"img/transformer.jpg",revision:"8b742cc2d1959cef4e6de34bc858fb0d"},{url:"img/Web1.png",revision:"92f10159e8f4e36b4f71d3d9074e5780"},{url:"img/web2.png",revision:"9cb9a152e6a69e3a0b96614a299f1354"},{url:"img/Web3.jpg",revision:"e2bc22c645ec1565e2a01fde1e6c6a2f"},{url:"img/web33.png",revision:"e24b9cebe2d9674fcd7a3701dc70f1c0"},{url:"img/wechat.jpg",revision:"a0c0b92395cbdf0e33ed75284566de77"},{url:"img/yanshi.jpg",revision:"0844de5ef73ee09acd10fb47bfb8119b"},{url:"img/yt.jpg",revision:"532c783bf9867b1987697afacf7ce083"},{url:"index.html",revision:"5ae3ef79fc1ca5b7f8d8ccada6809a53"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"ffc4f9ad8ed268442ac4a30dc4e44827"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"84ae37027ae8fed1da33bfb75bd1188b"},{url:"link/index.html",revision:"3633dcebe11feb702e3c6aa8901b9c7b"},{url:"movies/index.html",revision:"79e28de307a9027e072d61ed02323aa0"},{url:"music/index.html",revision:"d914cf1ebc6583dee582d488ab45c7b8"},{url:"page/2/index.html",revision:"69c13f3d3a78d46f01de8a7d00e4e2f2"},{url:"photos/index.html",revision:"937367d9796526665ead532b1dc362f6"},{url:"shuoshuo/index.html",revision:"9279725bfe7e09d51388171b3d3513d1"},{url:"tags/hexo/index.html",revision:"f445fdb25c32fb0e546ebbc6297c87e7"},{url:"tags/index.html",revision:"6fd60eee46a0063c565b17aef2767303"},{url:"tags/NLP/index.html",revision:"c058e1eaa6fed41994a44aaf295941ae"},{url:"tags/php/index.html",revision:"91167f613995ca408ab025202a5c2472"},{url:"tags/shuoshuo/index.html",revision:"150b01a719bafac09dcba1d279a25805"},{url:"tags/专业前沿/index.html",revision:"f66294ed166a6c37646e64d4005c4555"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
