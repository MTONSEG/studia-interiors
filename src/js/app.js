import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import * as select from './modules/select.js';
import * as burger from './modules/burgerMenu.js';
import * as dynamicAdaptive from './modules/dynamicAdapt.js';
import Swiper from "swiper/bundle";

const swiper = new Swiper('.swiper', {
	slidesPerView: "auto",
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".slider__next",
		prevEl: ".slider__prev",
	}
});

const newsSlider = new Swiper('.news-slider', {
	pagination: {
		el: ".news-slider__pagination",
		clickable: true,
		renderBullet: function (index, className) {
			if (index < 9) {
				return (
					'<span class="' +
					className +
					'">' +
					("0" + (index + 1)) +
					"</span>"
				);
			} else {
				return (
					'<span class="' + className + '">' + (index + 1) + "</span>"
				);
			}
		}
	},
	navigation: {
		nextEl: ".news-slider__next",
		prevEl: ".news-slider__prev",
	}
})

const ourNewsSlider = new Swiper('.our-news__slider', {
	slidesPerView: "auto",
	spaceBetween: 26,
	freeMode: true,
	allowTouchMove: true,
	mousewheel: {
		invert: true,
	},
	breakpoints: {
		576: {
			spaceBetween: 20
		},
		992: {
			spaceBetween: 40,
		},
		1221: {
			spaceBetween: 48
		}
	}
})

const aboutSlider = new Swiper('.about-slider__slider', {
	slidesPerView: "auto",
	pagination: {
		el: ".about-slider__pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".about-slider__next",
		prevEl: ".about-slider__prev",
	},
	spaceBetween: 12
})