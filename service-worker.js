if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let b={};const n=e=>c(e,r),f={module:{uri:r},exports:b,require:n};i[r]=Promise.all(a.map((e=>f[e]||n(e)))).then((e=>(d(...e),b)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/11/17/进入小李的世界吧！/index.html",revision:"66d5b58626187404181d82d0ad34d219"},{url:"2023/03/04/代码块演示/演示/index.html",revision:"7e6b1a6d24a563d849a2cf9cdc656cb7"},{url:"2023/05/04/关于小说blog/index.html",revision:"039b5ce358101f5a775411ca904d0ba6"},{url:"2023/05/04/前言/index.html",revision:"667c04780a5db96b606914c16b3802b0"},{url:"2023/05/04/第一回/index.html",revision:"5f5af4dcd0cf4c6de0748c51c52bba43"},{url:"2023/06/16/php之数据库/index.html",revision:"04ab1b50f73abde069a443b0f1f93e01"},{url:"2023/06/16/php之表单/index.html",revision:"c32aaf95756d374d63c43443c6a558bb"},{url:"2023/10/08/php之文件上传/index.html",revision:"276b5607339803db63d34abb9dd9655c"},{url:"2024/05/19/脑机接口在神经康复中的应用/index.html",revision:"94965721724b94485bc6f1d335c3793c"},{url:"2024/05/20/自然语言处理NLP/index.html",revision:"dafbe5c77f1583ae7e2d6be6a18283ee"},{url:"2024/05/22/Web3介绍/index.html",revision:"0b23df7ef8bff554b15a5d86b5a632ca"},{url:"2024/05/28/hexo框架原理/index.html",revision:"663aebee90ddf37ee28b6c975f48a9d2"},{url:"2024/05/29/超算简介/index.html",revision:"b01aade35dc4e419fc3cc25491ea7051"},{url:"2024/08/04/NLP入门/index.html",revision:"1936c3596ad237941f51baa4650ad753"},{url:"2024/08/04/基于Transformer解决机器翻译任务/index.html",revision:"8c7d7214cf4b11ee89e39fe3a9544c5f"},{url:"2024/08/13/关于模型微调/index.html",revision:"e43b84464006e13e33cc76b0c039a109"},{url:"2025/03/07/论文解读-Agent-AI-Surveying-the-Horizons-of-Multimodal-Interaction/index.html",revision:"2ff95bac8b524154d91c6822703cc231"},{url:"2025/03/10/大模型发展历程/index.html",revision:"c9a397cc20febf2adc96d1b20a590c2d"},{url:"2025/03/10/论文解读-CLIP-Learning-Transferable-Visual-Models-From-Natural-Language-Supervision/index.html",revision:"d247d2645874ce1f4c8eba03ecce3dc7"},{url:"2025/03/13/Prompt-最大程度榨干大模型/index.html",revision:"b3e7952a1f7deb96e97b9cf86926601c"},{url:"2025/03/15/大模型技术基础/index.html",revision:"226bc4aa64544ebeba02ffa06bad5a87"},{url:"2025/03/17/GPT、DeepSeek发展历程/index.html",revision:"067656edf754e2a342fb3abaa3c5a4f9"},{url:"404.html",revision:"7db750a7d0c8b27293b03ac012e261ec"},{url:"about/index.html",revision:"f1b1ae48fe4a2eca359851e3676a3288"},{url:"archives/2022/11/index.html",revision:"ac6b2fb322899d301fb3a7a566e9b39f"},{url:"archives/2022/index.html",revision:"524bcb35729574cc39cc2b53c4a1e6d0"},{url:"archives/2023/03/index.html",revision:"b88bd92186cb583c607b904d70e26786"},{url:"archives/2023/05/index.html",revision:"5620e7b0d06dae7117ce98be820e03e9"},{url:"archives/2023/06/index.html",revision:"98af82f85771109cb5518bb6d8b115c7"},{url:"archives/2023/10/index.html",revision:"ff8f1b815eeb3fd387f4ce2e4e02e3e6"},{url:"archives/2023/index.html",revision:"72a72a8146af0b082bfd941d4b599aee"},{url:"archives/2024/05/index.html",revision:"2515386eb98204bc877e183d028f8d54"},{url:"archives/2024/08/index.html",revision:"7af019954e683fb0fbb72cf58c2c1963"},{url:"archives/2024/index.html",revision:"754d2b139708edafcf02c256272f1326"},{url:"archives/2025/03/index.html",revision:"fae3823518ceda18c48769a2a4815e4f"},{url:"archives/2025/index.html",revision:"038763d5950ce09eec6bc9e00efa90f3"},{url:"archives/index.html",revision:"b92a1ca857f9cb6232c7d85830f085df"},{url:"archives/page/2/index.html",revision:"dfc7858994ac44e5f33c4caa4ff8b900"},{url:"archives/page/3/index.html",revision:"c19f7985159c8d385ac3eda943055a54"},{url:"artitalk/index.html",revision:"5ac50195fcb243250fa97ac856fb6719"},{url:"categories/index.html",revision:"480e4d3e05ec6d9250fd451850870d6c"},{url:"categories/前沿/index.html",revision:"c53546350fcc920c285c97ac254f21fa"},{url:"categories/大模型/index.html",revision:"0b2e55ed93da2bfebccee4a4ab73d113"},{url:"categories/学习笔记/index.html",revision:"5381ec1630279a8736b72fe88fa05b84"},{url:"categories/小说/index.html",revision:"bc40149f15c90b1284de3b799af4bd0c"},{url:"categories/论文/index.html",revision:"feddda469492cef6ce5480ce08f96c14"},{url:"comment/index.html",revision:"9d829a7abd0a71f0b9a8edb9267b2240"},{url:"css/background.css",revision:"c8d760a4449afd6a4edb3fd44b0716d2"},{url:"css/index.css",revision:"4ba26fab061be3d3d4cf5513d76c25e7"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/0313-1.png",revision:"4e2e39af9ed023720779ab9976371a32"},{url:"img/0313-2.png",revision:"2b68697c6a9ead612bb5bf63208e32f7"},{url:"img/0314-1.png",revision:"fb9a8d73aaab8daa9de6bf5877f37255"},{url:"img/0315-1.png",revision:"7eff33abae650680b6a386dacc986b85"},{url:"img/0315-10.png",revision:"acb83c584f2b8451009d3f05514d45f7"},{url:"img/0315-11.png",revision:"0c0e0e418c2f05f7cd58ec795b7a2414"},{url:"img/0315-2.png",revision:"585696d2b5a8917dd519a2e57c107fae"},{url:"img/0315-3.png",revision:"230c66e7426e03ec1379dbbecb8b94e5"},{url:"img/0315-4.png",revision:"bb38fd1cfd40b50374594321a778bf49"},{url:"img/0315-5.png",revision:"11fb4ba8ed7c5cad439e3c17a01104fa"},{url:"img/0315-6.png",revision:"ecc71a5b1ff1b6ac40c1ef7d3d61e778"},{url:"img/0315-7.png",revision:"7b357749d89ccdacbc820043150bc3bb"},{url:"img/0315-8.png",revision:"88c20f507b09bc05806489bcf8c39e17"},{url:"img/0315-9.png",revision:"452d93a8ad49d07193de9fe5687574ac"},{url:"img/0318-1.png",revision:"4e666b6406adc101e9a907cc65f517de"},{url:"img/0318-2.png",revision:"f1f239ef859d9b3e81f70b7a200f1e42"},{url:"img/0318-3.png",revision:"b8254e006c07ebb19859244e6de80a05"},{url:"img/0318-4.png",revision:"6f69f6b98cd0edb08bf0f7b32c3dcfa8"},{url:"img/0318-5.png",revision:"4233086a57f6fbafc7abed6399eed995"},{url:"img/0318-6.png",revision:"6b5af7a2582e3840146cb3907d05c07a"},{url:"img/0318-7.png",revision:"bfd84f7659ab583ae5c8245cdd0876bd"},{url:"img/108-1.png",revision:"cc40fceca09acd95c40c7f1a4e54df7f"},{url:"img/108-2.png",revision:"70ddeadac77f2e8164f2f179906c1521"},{url:"img/20250307.png",revision:"2b4ee84fcf33ad472b70ef1d1db5a0ca"},{url:"img/20250310.png",revision:"4e8ce79c509f029926fc3db73f23704f"},{url:"img/3D眼镜.png",revision:"6419f897ae6b2a139753e1c95b853c42"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/519-1.png",revision:"4187c2e2ca6a19ad7bed6c5f3d863f45"},{url:"img/519-2.png",revision:"2e6d6405ba63e205aeb77232d6126d59"},{url:"img/519-3.png",revision:"3c986b0444bb99a0f8370aec47265fdd"},{url:"img/519-4.png",revision:"45f0e1a85f6d71ca0d0b803a3997f375"},{url:"img/520-1.png",revision:"c0049f673ce6ca202f93ce2d41c636b3"},{url:"img/520-2.png",revision:"7c53154687642cfc3b743dddcf4b0c75"},{url:"img/520-3.png",revision:"830678eede31bb64a4a19e869f83faa1"},{url:"img/520-4.png",revision:"5367607b8128a6e94c2d28e1ececddf3"},{url:"img/520-5.png",revision:"2a81d142dc2a7585a6cec3d454aa79e0"},{url:"img/520-6.png",revision:"af198e2d6b6d2cdda150f3071a5c5485"},{url:"img/520-7.png",revision:"dabd524f451c709e3957b9c58172e226"},{url:"img/520-8.png",revision:"11bb6c32c9bd515055b80d8d42dd7287"},{url:"img/529-1.webp",revision:"83c94e41b6bc59384b94db7436e06797"},{url:"img/529-2.webp",revision:"32f1a018c7e1a6f64d4f66c16650108a"},{url:"img/615-1.png",revision:"bd87057e0900fa945f78ab4a34ce1ca2"},{url:"img/615-2.png",revision:"23b7bb917698c9fdc27a3b8391e173f6"},{url:"img/615-3.png",revision:"95a83865541767fe1e8bdc597757fd34"},{url:"img/615-4.png",revision:"d89f57d6a336915d255d4aacdc80edcf"},{url:"img/615-5.png",revision:"b0dc62eb31b2ce701a25e363277d0659"},{url:"img/615-6.png",revision:"5b76854bec8188182b9ecdf2baa8848f"},{url:"img/616-1.png",revision:"d55a2a97ad40ba7d6553a34391a747af"},{url:"img/616-2.png",revision:"64bb86d8c23f5ba4b86e04344d0597cb"},{url:"img/616-3.png",revision:"a061a4d157368e222eeecffb5e6a7750"},{url:"img/616-4.png",revision:"c75ef13532a9166555e2a57e7d0cb6ea"},{url:"img/616-5.png",revision:"c6193ca34f323e562b4bcbd0526a2240"},{url:"img/616-6.png",revision:"1534236b86a18205c506b2b03c4c6c5f"},{url:"img/8-4nlp.jpg",revision:"3cc7ea5d9e28d5e2cc6128ec26483872"},{url:"img/8.4.1.png",revision:"ac27a5d80f8ffde1d5d051c45e65e48d"},{url:"img/8.4.2.png",revision:"84a6e77c7f14b0201deee586560e399c"},{url:"img/8.4.3.png",revision:"0dc50c0bed259f1034ad4d23cbfb907c"},{url:"img/8.4.4.png",revision:"597a8d86d75bba4b81eb919013c3c3f3"},{url:"img/8.4.5.png",revision:"411f8ae030481ebd1b70d2cc5b2be5e3"},{url:"img/8.4.6.png",revision:"09d71bdd9854f480dbf1fcaea92d8300"},{url:"img/8.4.7.png",revision:"ab403241bff9f94ee653eda450948c9d"},{url:"img/8.4.8.png",revision:"75db0620b7aa22f85286c3f1841119bc"},{url:"img/8.5.1.png",revision:"84e4bfaf57546040367a239aa746d8c4"},{url:"img/8.5.2.png",revision:"768d5a911b0ac9b3c3abd6bb2910432d"},{url:"img/8.5.3.png",revision:"98ee31e63b68625360bb52ab20866516"},{url:"img/8.5.4.png",revision:"138eeb9a826012c4d79241218f78a78f"},{url:"img/8.5.6.png",revision:"4cebb46754b737d8e49898c5ff824ba4"},{url:"img/813-1.png",revision:"cd026a18c4a890b79fc6977fbcc891c7"},{url:"img/813-2.png",revision:"47d3405e583c2062265db4a47e7f3f81"},{url:"img/813-3.png",revision:"73e2774844d5a00a08f91e5d3f5a263c"},{url:"img/813.jpg",revision:"fece3cdf3c5767fc634d9a09959dacef"},{url:"img/about.jpg",revision:"adc8f603874c992cf7f88cc6a0480295"},{url:"img/Agent-img12.png",revision:"f5559c7d02ae73c581cda30a136a51ea"},{url:"img/Agent-img13.png",revision:"0c4cd5b53d1a50a118f16ccc92c7c46d"},{url:"img/Agent-img5.png",revision:"bfb5a1f1e90a523123576af0150dd402"},{url:"img/Agent-img7.png",revision:"cd636d62f8fab71a9586c890c5489861"},{url:"img/alipay.jpg",revision:"37e5b0cb738da6289525d9d92dadd353"},{url:"img/archive_img.jpg",revision:"7234513a279cf9c8ad1872fd480c29c1"},{url:"img/background.jpg",revision:"035246ebc5ba57cb06fcf0a9b35be306"},{url:"img/category_img.jpg",revision:"6fb03f892acc801dace09f79d4cc4080"},{url:"img/CLIP-img1.png",revision:"07de5ab0a3f61d3ad6832daeb5293756"},{url:"img/CLIP-img2.png",revision:"0558df57d44b24385365194e9ecc8e9b"},{url:"img/CLIP-img3.png",revision:"3021dbbf062525c67fe42b896ac41a1c"},{url:"img/CLIP-img4.png",revision:"7df7a87443fa3653b2c9b56dee522bbb"},{url:"img/CLIP-img5.png",revision:"1ce30d7229e41b2dca04ea340b9e3e75"},{url:"img/CLIP-img6.png",revision:"ece2d746be8a2b1cb4e5d69b9ee51b6f"},{url:"img/comment.jpg",revision:"70eae5703f2841a991bdd09b048e6362"},{url:"img/default_cover.jpg",revision:"34643fd5308669424f85e446a48b40ca"},{url:"img/default.jpg",revision:"033713665236e8f4e81d18e2a347532d"},{url:"img/diyihui.jpg",revision:"cf6a33f66862090e9b653b9195eca6ff"},{url:"img/face.jpg",revision:"ecf6d82956462213d236bbe12f4e2c49"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/gm.jpg",revision:"6be1aea7d067dc37531a1f979a689ad9"},{url:"img/GPT.jpg",revision:"54bd2a6bf339caf096cdcf281db5bb6c"},{url:"img/heart.png",revision:"1cc2d5cd193046ebd1d7a2c92d09d849"},{url:"img/hexokj.jpg",revision:"7e0d8f7e53de765240eb39d7e7785a82"},{url:"img/LLM-img1.png",revision:"d2d760e00a504c290d24e89034ed500d"},{url:"img/LLM-img2.png",revision:"cb9d02a471b6277dd4658df4e6e7f6b3"},{url:"img/njjk.jpg",revision:"7e654d18bc8dd1e7025e15821bae6dcf"},{url:"img/NLP.png",revision:"2377596aaf757511546f99819d8e5dd8"},{url:"img/php.jpg",revision:"3434a6cfaa9038e028ec809aa190a391"},{url:"img/prompt.jpg",revision:"0501702c64e2147241a78ad20ea58003"},{url:"img/shuoshuo1.jpg",revision:"e8b08e572e714d9f4cbf2f93d977ca10"},{url:"img/sjksh.jpg",revision:"76e69452ff9b305bd23cd4890eef7032"},{url:"img/super.jpg",revision:"4d140f558c673acf731805c5774b38c2"},{url:"img/tag_img.jpg",revision:"11bc10b2a6f7ad201f78ee1d926b491a"},{url:"img/Top.jpg",revision:"aa2e74eedf5c1a06edafa1cc48c22b32"},{url:"img/transformer.jpg",revision:"8b742cc2d1959cef4e6de34bc858fb0d"},{url:"img/Web1.png",revision:"92f10159e8f4e36b4f71d3d9074e5780"},{url:"img/web2.png",revision:"9cb9a152e6a69e3a0b96614a299f1354"},{url:"img/Web3.jpg",revision:"e2bc22c645ec1565e2a01fde1e6c6a2f"},{url:"img/web33.png",revision:"e24b9cebe2d9674fcd7a3701dc70f1c0"},{url:"img/wechat.jpg",revision:"a0c0b92395cbdf0e33ed75284566de77"},{url:"img/yanshi.jpg",revision:"0844de5ef73ee09acd10fb47bfb8119b"},{url:"img/yt.jpg",revision:"532c783bf9867b1987697afacf7ce083"},{url:"index.html",revision:"01de74fc3e02183728a600ba839b438b"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"ffc4f9ad8ed268442ac4a30dc4e44827"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"84ae37027ae8fed1da33bfb75bd1188b"},{url:"link/index.html",revision:"5ab8181bad71ae2247d5206ab1d88420"},{url:"movies/index.html",revision:"53a97c4c69581cc52ad3e2626c1eaa97"},{url:"music/index.html",revision:"3e6e72f036053f9385dd1ebd05fbf2a3"},{url:"page/2/index.html",revision:"663a9d73f75f6899e3b7a683bb53fb86"},{url:"page/3/index.html",revision:"c104a821962de2518a7f50c873cd4f89"},{url:"photos/index.html",revision:"182db7618ffe98bf94ca78ea3822188f"},{url:"shuoshuo/index.html",revision:"1fae32d873fd197bfad2dcba01cf53b8"},{url:"tags/hexo/index.html",revision:"a726ab185efca373716cb0bd7fa17a83"},{url:"tags/index.html",revision:"2403ad01a382b27449fa87508cdba744"},{url:"tags/NLP/index.html",revision:"c5a471c62206f25c5c1bf2f23e2badf1"},{url:"tags/php/index.html",revision:"7af89fd16239e6c8d07a41f846f862fa"},{url:"tags/shuoshuo/index.html",revision:"841cff525fb44574db9851504f86a82a"},{url:"tags/专业前沿/index.html",revision:"5320ea8221332a08d39375c7093f192a"},{url:"tags/人工智能通识/index.html",revision:"0a6df3720fc1fa93eb0fb7cf79cb101a"},{url:"tags/前沿技术解读/index.html",revision:"20cf139b7ea7cafdcfcdd14940991128"},{url:"tags/大模型系列/index.html",revision:"4f7581c66d1e92c797675503b769b02f"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
