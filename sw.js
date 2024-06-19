importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"835a371996fb4b61d885467c519e830e","url":"contributors.html"},{"revision":"d61483db0030ef2ceab6e6327193ee5f","url":"feedback.html"},{"revision":"700bc5113be1b8d3c5726a478c84c88e","url":"images/AMCA-standard-fan-testing-set-up.jpg"},{"revision":"39b1198a9fc85248db8503dcc661c4b4","url":"images/Egg-crate-straightener.jpg"},{"revision":"f2f1e415d681eb68a9d2c3598b1b80ec","url":"images/iitkgp.png"},{"revision":"3be32cb7f3926f2810ff33e046cfb8e0","url":"index.html"},{"revision":"fb3b775be09b1b4834e13dc4a8d545ec","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"06e73063fb9793ffee66c1817b031e99","url":"posttest.html"},{"revision":"414b5ac381aec0385cc4c8fe07c61a7a","url":"posttest.json"},{"revision":"40d83b4c64d1d1cde7a3e2fe7827a6c7","url":"pretest.html"},{"revision":"440fb4ff2791217d8b93312fea8b0bc3","url":"pretest.json"},{"revision":"2d65b6bd06f3b52c0bc263a769074b4a","url":"procedure.html"},{"revision":"6a080eb322f8e91c10410e1cad9c52f8","url":"references.html"},{"revision":"ae311785f08089f8919158ac86950955","url":"simulation.html"},{"revision":"65976a328037cb64e554c520316fee18","url":"simulation/css/bootstrap.min.css"},{"revision":"f9d68584d740d1dd58e7399bdfee4115","url":"simulation/css/font-awesome.min.css"},{"revision":"f06f2893ee1e6eb46886bc88ff662744","url":"simulation/css/katex.min.css"},{"revision":"af501ce56e8d96e14ee88c8436f927bf","url":"simulation/css/main.css"},{"revision":"cdf197078e6b4496f7dd4624bd74e0a1","url":"simulation/images/anemometerr.png"},{"revision":"56a8245b9124204c257ead5774a3121f","url":"simulation/images/fan.png"},{"revision":"ca92124421992afa9b9024ddd7b2d573","url":"simulation/images/fantest-duct.png"},{"revision":"4b625638e8bb4e25c77484292e080e0f","url":"simulation/images/fantest.png"},{"revision":"cdf3cc15e3ff55d761b3449fbe9fa948","url":"simulation/images/logo.jpg"},{"revision":"85b7f324630847ef368b7bd01bde6c31","url":"simulation/images/off.png"},{"revision":"bf03d0b7bd26ddad19a1b72c633fee1c","url":"simulation/images/on.png"},{"revision":"9bbd05df50b5209ce934b249c77812ef","url":"simulation/images/plate1_0.5.png"},{"revision":"739c65f91eea6c76eeaa21913ef5a680","url":"simulation/images/plate2_0.52.png"},{"revision":"a7e1cbf974908d3246bfeab63eb1212c","url":"simulation/images/plate3_0.55.png"},{"revision":"73bf2d6dad8ecd812d5138b4ba96919f","url":"simulation/images/plate4_0.58.png"},{"revision":"941f3fb06d665ea56f8f53b95189a3e3","url":"simulation/images/plate5_0.6.png"},{"revision":"065d399c4648917d672aa4e77d01000f","url":"simulation/images/ptube.png"},{"revision":"6bc402ab05ea8dff6d0dd1d3c5c9f58f","url":"simulation/images/user.png"},{"revision":"672cac08d690e9ac3da6f3b557e55ff6","url":"simulation/index.html"},{"revision":"a27cfc2759d8c8e0ff537832cad70598","url":"simulation/js/addinptotable5.js"},{"revision":"6beaaaff3fd0463371728b4c96a813ae","url":"simulation/js/auto-render.min.js"},{"revision":"90146f01d8a2028ed6f2c3d2fba4ac9b","url":"simulation/js/bootstrap.bundle.min.js"},{"revision":"c4b879ecbace444abe76d92e781d2cf2","url":"simulation/js/Chart.js"},{"revision":"7b21a475617408f4e1373dc4557cb071","url":"simulation/js/checkdlexp5.js"},{"revision":"cf1f122ab725b1a7b0966a521bec03a6","url":"simulation/js/graphplotly5.js"},{"revision":"ddb84c1587287b2df08966081ef063bf","url":"simulation/js/jquery-1.7.1.min.js"},{"revision":"c7393ff783202680516ed44393d69897","url":"simulation/js/jquery.slim.min.js"},{"revision":"78c0024516f299be41b76645dacf567e","url":"simulation/js/katex.min.js"},{"revision":"0c9e773a27ace4243f7875be99a0cb27","url":"simulation/js/main.js"},{"revision":"22175d95b973a74d3bcab1f3fbb6e2c2","url":"simulation/js/modernizr-1.5.min.js"},{"revision":"1db8fd79ce2e5d14918726b61342318e","url":"simulation/js/popper.min.js"},{"revision":"9070412e89ecee1c34d8c356246e92d2","url":"theory.html"},{"revision":"dc5d4dcb895a95535cc3aa9c64c6afd8","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );