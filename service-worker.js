if(!self.define){let e,a={};const s=(s,f)=>(s=new URL(s+".js",f).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(f,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let d={};const c=e=>s(e,r),b={module:{uri:r},exports:d,require:c};a[r]=Promise.all(f.map((e=>b[e]||c(e)))).then((e=>(i(...e),d)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-c10c4d67.js",revision:"9ed0aa6e9da1028e2261517c6a47b8d0"},{url:"assets/404.html-da293cf9.js",revision:"289f34d384372354b59c4b50fd49a171"},{url:"assets/app-6a4b4afa.js",revision:"327cc41b2ec2dbed0de8be32fc0786e7"},{url:"assets/arc-6a157e00.js",revision:"dfd10005bd10f1144f79c2d887f869d8"},{url:"assets/array-9f3ba611.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/auto-fe80bb03.js",revision:"9d99a020735f021d88a203c78f7e0ee0"},{url:"assets/c4Diagram-c0b17d02-9655191c.js",revision:"dbb902ab739841b841b189bc761fbf16"},{url:"assets/classDiagram-a8cc8886-35cb0bb8.js",revision:"6c5dc46e29aa509fdddd756485e00119"},{url:"assets/classDiagram-v2-802a48d3-9e65238e.js",revision:"c7fcb9ba784c4091fcd56d6a383c16ce"},{url:"assets/codemirror-editor-1c6f45b4.js",revision:"3f74463039724be117d604d9d9460edf"},{url:"assets/commonjs-dynamic-modules-302442b1.js",revision:"2afbf9a8021b44e8591299a7a7dbfc94"},{url:"assets/commonjsHelpers-de833af9.js",revision:"e2be7f3e66571d8f9280caf91c5e9b86"},{url:"assets/createText-3b1f58a4-e7b627f9.js",revision:"110c92091b0b2a88334f2ddacec40227"},{url:"assets/edges-0005682e-9349561c.js",revision:"1415a63e5efeb175ac38a4467f398a2e"},{url:"assets/ementa.html-605ebe98.js",revision:"2fca1ad6404dee5fda126089fe4994f7"},{url:"assets/ementa.html-85731d41.js",revision:"8e38aeaa2b078fcbeae2a16327be4fa1"},{url:"assets/erDiagram-dedf2781-afb17861.js",revision:"572cda4438325606261a594d187826f0"},{url:"assets/flowchart-c441f34d.js",revision:"d0922e56732b0ff9f2eb72eccb4e7e36"},{url:"assets/flowchart-elk-definition-56584a6c-e276de47.js",revision:"863d079d6c339ca994c1890bbbe8f1f7"},{url:"assets/flowDb-ff651a22-d82d746c.js",revision:"0d4e45579c4390c36eeaa89c45452f06"},{url:"assets/flowDiagram-d6f8fe3a-85fa7170.js",revision:"34d642b2e5c5f03e6682c8acab616c0e"},{url:"assets/flowDiagram-v2-58f49b84-190ee357.js",revision:"4a7e04c0222ba72478fe73cf673b8045"},{url:"assets/ganttDiagram-088dbd90-9518a7eb.js",revision:"36cd48e29da38c69b7629e88b010b243"},{url:"assets/gitGraphDiagram-e0ffc2d1-4b852edb.js",revision:"de35ea20e5179945a59a40e1196e9111"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-2bf332f6.js",revision:"15b6a4a48574f26d02d692ce0cac07fb"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-f58d48f9-713c02b1.js",revision:"69fe85255fd3ac5b5b8e8779feb13e43"},{url:"assets/index.html-06ff02bf.js",revision:"9196331f93b31c9450616338ff82af25"},{url:"assets/index.html-1cf3e291.js",revision:"dd03c1f854af1b118157b77db2f17f35"},{url:"assets/index.html-1fdaea6b.js",revision:"0eb882295801f6252cb4353f5462e671"},{url:"assets/index.html-3d9bc4e7.js",revision:"b1b17aca7f29ca654573301db8f70f26"},{url:"assets/index.html-44118d08.js",revision:"b6c152125cc37e25b1fb98d4a9e67b24"},{url:"assets/index.html-4774f4d7.js",revision:"b1b17aca7f29ca654573301db8f70f26"},{url:"assets/index.html-653b98f5.js",revision:"fd598dc50bde95ba3b777a6acbd454df"},{url:"assets/index.html-6fe987e9.js",revision:"b1b17aca7f29ca654573301db8f70f26"},{url:"assets/index.html-70024d65.js",revision:"b1b17aca7f29ca654573301db8f70f26"},{url:"assets/index.html-886a10e3.js",revision:"472f1e2cb736570e8354baf8d03deddc"},{url:"assets/index.html-94de7c33.js",revision:"b1b17aca7f29ca654573301db8f70f26"},{url:"assets/index.html-b75aa5ba.js",revision:"b1b17aca7f29ca654573301db8f70f26"},{url:"assets/index.html-d23f50d8.js",revision:"bf278701cd11d0f4eac6dc36fd2915c6"},{url:"assets/index.html-d79ab8db.js",revision:"7ca524c02fe54c0977690cd909737f7b"},{url:"assets/index.html-da71773c.js",revision:"41c1e232414e4bfdcc4877fdbff4e34e"},{url:"assets/index.html-e012283f.js",revision:"b1b17aca7f29ca654573301db8f70f26"},{url:"assets/index.html-ed85e7f6.js",revision:"117bf014b652bce9d554160dcfeeb30e"},{url:"assets/index.html-f98bc46d.js",revision:"b1b17aca7f29ca654573301db8f70f26"},{url:"assets/infoDiagram-64895a6e-048cf923.js",revision:"b74a8c0aa521c825ece0073a7b4de907"},{url:"assets/init-77b53fdd.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/intro.html-716f3ad4.js",revision:"75e5faa325c83d76b59a81600c58c088"},{url:"assets/intro.html-899b4736.js",revision:"70bac72ca0b36e94420485f81876bc60"},{url:"assets/journeyDiagram-adaa34f8-ab1c11e9.js",revision:"86620fd629b8df38a09a381e72eb51f0"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/layout-ab198b3f.js",revision:"2df1214b5e883c9e818d62015ff93303"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/line-2d9bcc97.js",revision:"473b58f95fe54426bb899f71001c5f3d"},{url:"assets/linear-0bc1857e.js",revision:"6039e78714354d33af490bbdebd11556"},{url:"assets/markdown.esm-abe06b83.js",revision:"3e2668565c994b015ab82cac0075bf97"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.core-28e162dc.js",revision:"0a6ba57dae5ef3c66f43174df3a08d99"},{url:"assets/mindmap-definition-57868176-79b0b5e9.js",revision:"ab5987c6105122301fd1018a28d2e28b"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/ordinal-ba9b4969.js",revision:"3a57ceba2c0d70da5e704aad84f79b46"},{url:"assets/path-53f90ab3.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/photoswipe.esm-5794cde2.js",revision:"2687434a99577ed4fa4b1050a3f0ac90"},{url:"assets/pieDiagram-3fca7ce7-3acb0d76.js",revision:"1afb496621c729ed0aa66bbd5e2686ec"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/quadrantDiagram-0ca4be02-a9f3a698.js",revision:"ef2e789e8f04e3f0af50d6de75ae4df3"},{url:"assets/requirementDiagram-e13af0f0-4a2f3185.js",revision:"77e902fc76790e2c5c551ca356c7b95c"},{url:"assets/reveal.esm-ec5549c1.js",revision:"40498a0448b327f408a5db6b67491b8a"},{url:"assets/sankeyDiagram-a7f8e230-b7ae83a1.js",revision:"a3dd11133d37050c8ab11c0e48a4c329"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/sequenceDiagram-84aa38e3-8fa97b15.js",revision:"cf80f2b079ee0a478092217b8465bfd4"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/stateDiagram-9a586ac6-b76809e0.js",revision:"7137b04eaf1a5bbd99ede0a5fc1a2e0f"},{url:"assets/stateDiagram-v2-96f2b9df-7a5e5e7e.js",revision:"40397f08b8af867d167a4b2121b48b7e"},{url:"assets/style-26ead7b2.css",revision:"58095e3757e77baaca26bcfcf8fda7ed"},{url:"assets/styles-1b0c237a-cac263ba.js",revision:"01658353d3c47c39744329b398f52c4f"},{url:"assets/styles-622362e4-58ddcbd4.js",revision:"5d586ebefd80da0e1417d20102fa470c"},{url:"assets/styles-a1a6e33f-5d553390.js",revision:"852f8e0aaec45aadfecdc9f748d4424c"},{url:"assets/svgDraw-70101091-d2fc7c86.js",revision:"df5c757acb7be1d2215b480133e9a86b"},{url:"assets/svgDrawCommon-42e92da3-c8e396b1.js",revision:"fc7475af84d1198a4fd0a56136ad14bd"},{url:"assets/timeline-definition-1a90b03d-8709540f.js",revision:"42fd232e0b19bcd42cc3b0806517ffc3"},{url:"assets/utils-a5e1dbae-143be013.js",revision:"7c6f998ca9a809acdca07301595257b8"},{url:"assets/vue-repl-1e417ebf.js",revision:"a2daee5ad5065e43a2e91c4d2038e095"},{url:"assets/VuePlayground-10dfeda4.js",revision:"2be6fcc08a3d1a6ce52f298c27292084"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"d158cad89bd4ee16f84caad47d744e7f"},{url:"404.html",revision:"08217eb4c6c87d6b289b574ef78949cc"},{url:"article/index.html",revision:"41a66f094a3a92b6cdee4c88c2956086"},{url:"category/index.html",revision:"e5dcb8875668d112402f803077d7a804"},{url:"category/plano-de-curso/index.html",revision:"1dc6b256f3642486ec6de2358d23416c"},{url:"index.html",revision:"7ac58faa601a0adf2f15bdedca18d8f8"},{url:"intro.html",revision:"241e7da58a96b46b28d02df64a29178f"},{url:"posts/ementa.html",revision:"54ca50e2022ee621603453c92870cea3"},{url:"posts/index.html",revision:"eeb25cda240aede9378c533fbe191fd7"},{url:"star/index.html",revision:"e5ed144b26cb670ddfc7a648a3dfd0ed"},{url:"tag/ementa/index.html",revision:"c206009d6958511fe2cc1446d7683aee"},{url:"tag/index.html",revision:"e23a353063e1ab3de2a362b31384d00a"},{url:"timeline/index.html",revision:"e1f925836f1b45db8c48535c7608a1bc"},{url:"assets/hero-197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/apple-icon-152.png",revision:"72cda603cbf834c3728db9b1c7e8234f"},{url:"assets/icon/chrome-192.png",revision:"5db057d64f8d3948b1b8bf030a3d71dd"},{url:"assets/icon/chrome-512.png",revision:"72cda603cbf834c3728db9b1c7e8234f"},{url:"assets/icon/chrome-mask-192.png",revision:"5db057d64f8d3948b1b8bf030a3d71dd"},{url:"assets/icon/chrome-mask-512.png",revision:"72cda603cbf834c3728db9b1c7e8234f"},{url:"assets/icon/ms-icon-144.png",revision:"72cda603cbf834c3728db9b1c7e8234f"},{url:"avatar.jpg",revision:"8d82aafb3eec10baf4fff8f070f36ccc"},{url:"logo.png",revision:"bbb2548edfb38614fa2c5348b4734609"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
