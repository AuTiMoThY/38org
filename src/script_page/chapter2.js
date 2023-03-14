$(function() {
	// 標題段
	gsap.to($('.section-chapter2-title .bg, .section-chapter2-title .page_section-heading'), {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'title-scroll',
		    trigger: '.section-chapter2-title',
		    start: 'center center',
		    end: 'bottom+=100%',
		    markers: true,
		    scrub: true,
		}
	});

	// 第一段
	gsap.fromTo('.section-chapter2-1 .bg', {
		y: '-=10%'
	}, {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'sec-1-bg',
		    trigger: '.section-chapter2-1',
		    start: 'top center',
		    end: 'bottom',
		    markers: true,
		    scrub: true,
		}
	});

	// 第一段中場

	// 第二段
	gsap.fromTo('.section-chapter2-2 .bg', {
		y: '-=10%'
	}, {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'sec-2-bg',
		    trigger: '.section-chapter2-2',
		    start: 'top center',
		    end: 'bottom',
		    markers: true,
		    scrub: true,
		}
	});
	// 第二段中場

	// 第三段
	gsap.fromTo('.section-chapter2-3 .bg', {
		y: '-=10%'
	}, {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'sec-3-bg',
		    trigger: '.section-chapter2-3',
		    start: 'top center',
		    end: 'bottom',
		    markers: true,
		    scrub: true,
		}
	});
	// 第三段中場

	// 第四段
	gsap.fromTo('.section-chapter2-4 .bg', {
		y: '-=10%'
	}, {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'sec-4-bg',
		    trigger: '.section-chapter2-4',
		    start: 'top center',
		    end: 'bottom',
		    markers: true,
		    scrub: true,
		}
	});
	// 第四段中場

	// 第五段
	gsap.fromTo('.section-chapter2-5 .bg', {
		y: '-=10%'
	}, {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'sec-5-bg',
		    trigger: '.section-chapter2-5',
		    start: 'top center',
		    end: 'bottom',
		    markers: true,
		    scrub: true,
		}
	});
	// 第五段中場

	// 第六段
	gsap.fromTo('.section-chapter2-6 .bg', {
		y: '-=10%'
	}, {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'sec-6-bg',
		    trigger: '.section-chapter2-6',
		    start: 'top center',
		    end: 'bottom',
		    markers: true,
		    scrub: true,
		}
	});
	// 第六段中場

	const allMarkers = [
		...MWF_UI.contains('div', 'title-scroll'),
		...MWF_UI.contains('div', 'sec-1-bg'),
		...MWF_UI.contains('div', 'sec-2-bg'),
		...MWF_UI.contains('div', 'sec-3-bg'),
		...MWF_UI.contains('div', 'sec-4-bg'),
		...MWF_UI.contains('div', 'sec-5-bg'),
		...MWF_UI.contains('div', 'sec-6-bg'),
	];
	MWF_UI.contains_add_hiden(allMarkers);


	// $(".how-to-item").each(function(index, el) {
	// 	const time = getRandomArbitrary(0, 5);
	// 	console.log(time);

	// 	$(el).find('svg').css({
	// 		'animation-delay': time + 's'
	// 	});
	// });



});