import * as functions from "./modules/functions.js";
import * as cursor from "./modules/cursor.js";
import * as swiper from "./modules/swiper.js";
import * as alerts from "./modules/alerts.js";

functions.isWebp();
document.addEventListener('DOMContentLoaded', () => {
    cursor.init();
    swiper.init();
    alerts.init();
});
