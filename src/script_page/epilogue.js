$(function() {

	// 標題段
	gsap.to($('.section-epilogue-title .bg'), {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'title-scroll',
		    trigger: '.section-epilogue-title',
		    start: 'center center',
		    end: 'bottom+=100%',
		    markers: true,
		    scrub: true,
		}
	});

	// let tl = gsap.timeline({
	// 	scrollTrigger: {
	// 		id: 'narrate-show',
	// 	    trigger: '.section-epilogue-title',
	// 	    start: 'top bottom-=33%',
	// 	    end: 'bottom bottom-=33%',
	// 	    markers: true,
	// 	    scrub: true,
	// 	}
	// });
	// tl
	// .to('.dialog_box .txt', {
	// 	delay: 0.3,
	// 	opacity:1,
	// 	ease: Power1. easeInOut
	// })
	// .to('.dialog_box-line', {
	// 	delay: 0.6,
	// 	opacity:1,
	// 	ease: Power1. easeInOut
	// });

	gsap.to($('.section-epilogue-title .dialog_box-line'), {
		height: '0',
		// zIndex: 99,
		scrollTrigger: {
			id: 'narrate-line',
		    trigger: '.section-epilogue-title',
		    start: 'bottom bottom',
		    end: function(){
		    	const line_height = $(".dialog_box-line").height();
		    	return `bottom+=${line_height} bottom-=${line_height}`;
		    },
		    markers: true,
		    scrub: true,
		}
	});


	MWF_UI.contains_add_hiden([
		...MWF_UI.contains('div', 'title-scroll'),
		...MWF_UI.contains('div', 'narrate-line'),
		// ...MWF_UI.contains('div', 'narrate-show'),
	]);


	let bgs = $(".encourage-list").data('itembg');
	let bgArr = (bgs == null) ? 0 : bgs.split(', ');
	let bgArrLen = bgArr.length;

	let $slide_item = $(".encourage-item")
	let slideItemLen = $slide_item.length;

	$(".encourage-item").each(function(index, el) {
		let bg_idx = (index + 1) % bgArrLen;
		if ( bg_idx === 0 ) {
			bg_idx = 5;
		}

		console.log(bg_idx);
		// console.log(bgArr[]);
		$(el).find('.inner').css('background-image', `url(${bgArr[bg_idx - 1]})`);
	});



	var encourageSwiper1 = new Swiper("#encourageSwiper1", {
		loop: true,
		autoplay: {
		  delay: 500,
		  disableOnInteraction: false
		},
		slidesPerView: 1,
		centerInsufficientSlides: true,
		centeredSlides: true,
		speed: 1500,
		grabCursor: true,
		mousewheelControl: true,
		keyboardControl: true,
	    on: {
	        init: function (e) {
	        	// console.log(e);
	            // $(".banner-slide").eq(0).find('.slogan').addClass("")
	        },
	        slideChange: function (e) {
	            // console.log(e);
	        }
	    },
	    breakpoints: {
	    	480: {
	    	  slidesPerView: 2,
	    	},
	    	// when window width is >= 480px
	    	768: {
	    	  slidesPerView: 3,
	    	}
	    }
	});

	var encourageSwiper2 = new Swiper("#encourageSwiper2", {
		loop: true,
		autoplay: {
		  delay: 500,
		  disableOnInteraction: false,
		  reverseDirection: true
		},
		slidesPerView: 1,
		centerInsufficientSlides: true,
		centeredSlides: true,
		speed: 1500,
		grabCursor: true,
		mousewheelControl: true,
		keyboardControl: true,
	    on: {
	        init: function (e) {
	        	// console.log(e);
	            // $(".banner-slide").eq(0).find('.slogan').addClass("")
	        },
	        slideChange: function (e) {
	            // console.log(e);
	        }
	    },
	    breakpoints: {
	    	480: {
	    	  slidesPerView: 2,
	    	},
	    	// when window width is >= 480px
	    	768: {
	    	  slidesPerView: 3,
	    	}
	    }
	});


});