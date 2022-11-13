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

