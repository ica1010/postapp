/**
	Template Name 	 : Jobick
	Author			 : DexignLab
	Author Portfolio : https://themeforest.net/user/dexignlabs/portfolio
	
**/

/* JavaScript Document */
jQuery(window).on('load', function() {
    'use strict';
	
	// Recent Blog
	if(jQuery('.recent-blog1').length > 0){
		var swiper = new Swiper('.recent-blog1',{
			speed: 1500,
			parallax: true,
			spaceBetween: 30,
			slidesPerView: 3,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			breakpoints: {
				1200: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Clients Swiper
	if(jQuery('.clients-swiper').length > 0){
		var swiper5 = new Swiper('.clients-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 5,
			spaceBetween: 30,
			autoplay: {
			   delay: 3000,
			},
			loop:true,
			navigation: {
				nextEl: '.swiper-button-next5',
				prevEl: '.swiper-button-prev5',
			},
			breakpoints: {
				1191: {
					slidesPerView: 5,
				},
				992: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 3,
				},
				575: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 2,
				},
			}
		});
	}
	
	// Blog Swiper
	if(jQuery('.blog-swiper-1').length > 0){
		var swiper5 = new Swiper('.blog-swiper-1', {
			slidesPerView: 3,
			spaceBetween: 30,
			speed: 1500,
			loop:true,
			navigation: {
	          	nextEl: ".testimonial-next",
	         	prevEl: ".testimonial-prev",
	        },
			breakpoints: {
				1280: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 1,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
});
/* Document .ready END */