import Swiper from 'swiper';

export function init() {
	const worksSwiper = new Swiper('.works-swiper', {
        pagination: {
            el: '.works-swiper-pagination',
            clickable: true,
        },
    });
}
