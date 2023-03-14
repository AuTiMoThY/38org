$(function() {
	// 標題段-第一張背景隱藏
	// section-chapter1-title
	// gsap.fromTo('.chapter1-bg1', {
	// 	autoAlpha: 1,
	// }, {
	// 	autoAlpha: 0,
	//     scrollTrigger: {
	//     	id: 'title-bg1',
	//         trigger: '.chapter1-bg1',
	//         start: 'bottom top',
	//         end: 999,
	//         markers: true,
	//         scrub: true,
	//         onEnter: ({progress, direction, isActive}) => console.log(progress, direction, isActive)
	//     }
	// });

	// gsap.to('.chapter1-bg1', {
	// 	y: '+=20%',
	// 	autoAlpha: 0,
	// 	// zIndex: 99,
	// 	scrollTrigger: {
	// 		id: 'title-scroll',
	// 	    trigger: '.section-chapter1-title',
	// 	    start: 'bottom center',
	// 	    end: 'bottom+=50%',
	// 	    markers: true,
	// 	    scrub: true,
	// 	}
	// });

	// // 標題段-整塊固定不動
	// ScrollTrigger.create({
	// 	id: 'title-pin',
	// 	trigger: '.section-chapter1-title',
	// 	start: 'center center',
	// 	end: 'bottom+=100%',
	// 	markers: true,
	// 	pin: true,
	// });

	// 標題段-圖片
	gsap.fromTo('.section-chapter1-title .bg',{
		y: '-=10%'
	}, {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'title-scroll',
		    trigger: '.section-chapter1-title',
		    start: 'top center',
		    end: 'bottom',
		    markers: true,
		    scrub: true,
		}
	});

	// 第一段-圖片
	gsap.fromTo('.section-chapter1-1-pic .bg',{
		y: '-=10%'
	}, {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'sec-1-pic',
		    trigger: '.section-chapter1-1-pic',
		    start: 'top center',
		    end: 'bottom',
		    markers: true,
		    scrub: true,
		}
	});

	// 第二段-圖片
	// gsap.fromTo('.chapter1-2-bg1', {
	// 	opacity: 1,
	// }, {
	// 	opacity: 0,
	//     scrollTrigger: {
	//     	id: 'sec-2-pic1',
	//         trigger: '.section-chapter1-2-pic',
	//         start: 'top+=60% center',
	//         end: 'bottom',
	//         markers: true,
	//         scrub: true,
	//         // pin: true,
	//     }
	// });

	// gsap.fromTo('.chapter1-2-bg2', {
	// 	opacity: 1,
	// }, {
	// 	opacity: 0,
	//     scrollTrigger: {
	//     	id: 'sec-2-pic2',
	//         trigger: '.section-chapter1-2-pic',
	//         start: 'top+=120% center',
	//         end: 'bottom',
	//         markers: true,
	//         scrub: true,
	//         // pin: true,
	//     }
	// });

	// gsap.fromTo('.chapter1-2-bg3', {
	// 	y: '0%'
	// }, {
	// 	y: '+=30%',
	//     scrollTrigger: {
	//     	id: 'sec-2-pic3',
	//         trigger: '.section-chapter1-2-pic',
	//         start: 'top+=135% center',
	//         end: 'bottom+=200%',
	//         markers: true,
	//         scrub: true,
	//         // pin: true,
	//     }
	// });

	// ScrollTrigger.create({
	// 	id: 'sec-2-pic',
	// 	trigger: '.section-chapter1-2-pic',
	// 	start: 'center center',
	// 	end: 'bottom',
	// 	markers: true,
	// 	pin: true,
	// });

	ScrollTrigger.matchMedia({
		// large
		"(min-width: 1024px)": function() {
			// setup animations and ScrollTriggers for screens 960px wide or greater...
			// These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
			let tl = gsap.timeline({
    			scrollTrigger: {
					id: 'sec-2-pic',
			    	trigger: ".section-chapter1-2-pic",
			    	scrub: 1,
			    	end: "100%",
			    	pin: true,
					markers: true,
			    }
			});
			tl.to(".bg.chapter1-2-bg1", {opacity: 0});
		},

		// small
		"(max-width: 1023.98px)": function() {
			// The ScrollTriggers created inside these functions are segregated and get
			// reverted/killed when the media query doesn't match anymore.
			let tl = gsap.timeline({
    			scrollTrigger: {
					id: 'sec-2-pic',
			    	trigger: ".section-chapter1-2-pic",
			    	scrub: 1,
			    	start: "center center",
			    	end: "center 50%",
			    	pin: true,
					markers: true,
			    }
			});
			tl.to(".bg-m.chapter1-2-bg1", {opacity: 0});
		},

		// all
		"all": function() {
			// ScrollTriggers created here aren't associated with a particular media query,
			// so they persist.
		}

	});

	// 第三段 - 圖片
	gsap.fromTo('.section-chapter1-3-pic .bg', {
		y: '-=10%'
	}, {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'sec-3-pic',
		    trigger: '.section-chapter1-3-pic',
		    start: 'top center',
		    end: 'bottom',
		    markers: true,
		    scrub: true,
		}
	});

	// 第四段 - 圖片
	gsap.fromTo('.section-chapter1-4-pic .bg', {
		y: '-=10%'
	}, {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'sec-4-pic',
		    trigger: '.section-chapter1-4-pic',
		    start: 'top center',
		    end: 'bottom',
		    markers: true,
		    scrub: true,
		}
	});



	const titleMarkers = MWF_UI.contains('div', 'title-pin');
	const titleScrollMarkers = MWF_UI.contains('div', 'title-scroll');
	const bg1Markers = MWF_UI.contains('div', 'title-bg1');
	const sec1picMarkers = MWF_UI.contains('div', 'sec-1-pic');
	const sec2picMarkers = MWF_UI.contains('div', 'sec-2-pic');
	const sec2pic1Markers = MWF_UI.contains('div', 'sec-2-pic1');
	const sec2pic2Markers = MWF_UI.contains('div', 'sec-2-pic2');
	const sec3picMarkers = MWF_UI.contains('div', 'sec-3-pic');
	const sec4picMarkers = MWF_UI.contains('div', 'sec-4-pic');
	const allMarkers = [
		...titleMarkers,
		...titleScrollMarkers,
		...bg1Markers,
		...sec1picMarkers,
		...sec2picMarkers,
		// ...sec2pic1Markers,
		// ...sec2pic2Markers,
		...sec3picMarkers,
		...sec4picMarkers
	];
	MWF_UI.contains_add_hiden(allMarkers);


});