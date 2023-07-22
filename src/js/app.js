import * as functions from "./modules/functions.js";
import * as cursor from "./modules/cursor.js";
import * as swiper from "./modules/swiper.js";
import * as alerts from "./modules/alerts.js";
import * as preloader from "./modules/preloader.js";
import SmoothScroll from "smoothscroll-for-websites";

SmoothScroll({
    animationTime: 400,
    stepSize: 60,
    keyboardSupport: true,
    arrowScroll: 100,
    touchpadSupport: true,
});

functions.isWebp();
swiper.init();
cursor.init();
alerts.init();
preloader.init();
