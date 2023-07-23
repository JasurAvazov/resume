import Swiper, { Navigation } from "swiper";

export function init() {
    const works = new Swiper(".works-swiper", {
		modules: [Navigation],
		navigation: {
			nextEl: ".works-swiper-button-next",
			prevEl: ".works-swiper-button-prev",
		},
	});
}