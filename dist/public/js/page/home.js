$(function() {
	// 標題段-圖片
	gsap.fromTo('.section-home-title .bg',{
		y: '-=10%'
	}, {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'title-bg',
		    trigger: '.section-home-title',
		    start: 'top center',
		    end: 'bottom',
		    markers: true,
		    scrub: true,
		}
	});

	// 第一段-背景
	gsap.fromTo('.section-home-1 .bg',{
		y: '-=20%'
	}, {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'home-1-bg',
		    trigger: '.section-home-1',
		    start: 'top-=50% center',
		    end: 'bottom',
		    markers: true,
		    scrub: true,
		}
	});
	// 第二段-背景
	gsap.fromTo('.section-home-2 .bg',{
		y: '-=20%'
	}, {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'home-2-bg',
		    trigger: '.section-home-2',
		    start: 'top-=50% center',
		    end: 'bottom',
		    markers: true,
		    scrub: true,
		}
	});
	// 第三段-背景
	gsap.fromTo('.section-home-3 .bg',{
		y: '-=20%'
	}, {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'home-3-bg',
		    trigger: '.section-home-3',
		    start: 'top-=50% center',
		    end: 'bottom',
		    markers: true,
		    scrub: true,
		}
	});
	// 第四段-背景
	gsap.fromTo('.section-home-4 .bg',{
		y: '-=20%'
	}, {
		y: '+=30%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'home-4-bg',
		    trigger: '.section-home-4',
		    start: 'top-=50% center',
		    end: 'bottom',
		    markers: true,
		    scrub: true,
		}
	});

	// 第一段-男孩
	gsap.fromTo('.section-home-1 .inner-boy',{
		y: '+=20%'
	}, {
		y: '0%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'home-1-boy',
		    trigger: '.section-home-1',
		    start: 'top center',
		    end: 'center center',
		    markers: true,
		    scrub: true,
		}
	});

	// 第二段-男孩
	gsap.fromTo('.section-home-2 .inner-boy',{
		y: '-=20%'
	}, {
		y: '0%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'home-2-boy',
		    trigger: '.section-home-2',
		    start: 'top center',
		    end: 'center center',
		    markers: true,
		    scrub: true,
		}
	});

	// 第二段-剪影
	gsap.fromTo('.section-home-2 .inner-other',{
		autoAlpha: 0,
		x: '3%',
		y: '-=30%'
	}, {
		autoAlpha: 1,
		y: '0%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'home-2-other',
		    trigger: '.section-home-2',
		    start: 'top center',
		    end: 'center center',
		    markers: true,
		    scrub: true,
		}
	});

	// 第三段-傢俱
	gsap.fromTo('.section-home-3 .inner-other',{
		autoAlpha: 0,
		y: '-=20%'
	}, {
		autoAlpha: 1,
		y: '0%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'home-3-other',
		    trigger: '.section-home-3',
		    start: 'top center',
		    end: 'center center',
		    markers: true,
		    scrub: true,
		}
	});

	// 第三段-男孩
	gsap.fromTo('.section-home-3 .inner-boy',{
		y: '-=30%'
	}, {
		y: '0%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'home-3-boy',
		    trigger: '.section-home-3',
		    start: 'top center',
		    end: 'center center',
		    markers: true,
		    scrub: true,
		}
	});


	// 第四段-男孩
	gsap.fromTo('.section-home-4 .inner-boy',{
		y: '-=30%'
	}, {
		y: '0%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'home-4-boy',
		    trigger: '.section-home-4',
		    start: 'top center',
		    end: 'center center',
		    markers: true,
		    scrub: true,
		}
	});

	// 第四段-剪影
	gsap.fromTo('.section-home-4 .inner-other',{
		autoAlpha: 0,
		y: '-=20%'
	}, {
		autoAlpha: 1,
		y: '0%',
		// zIndex: 99,
		scrollTrigger: {
			id: 'home-4-other',
		    trigger: '.section-home-4',
		    start: 'top center',
		    end: 'center center',
		    markers: true,
		    scrub: true,
		}
	});






	const allMarkers = [
		...MWF_UI.contains('div', 'title-bg'),
		// ...MWF_UI.contains('div', 'home-1-bg'),
		// ...MWF_UI.contains('div', 'home-1-boy'),
		...MWF_UI.contains('div', 'home-2-bg'),
		...MWF_UI.contains('div', 'home-2-boy'),
		...MWF_UI.contains('div', 'home-2-other'),
		...MWF_UI.contains('div', 'home-3-bg'),
		...MWF_UI.contains('div', 'home-3-boy'),
		...MWF_UI.contains('div', 'home-3-other'),
		...MWF_UI.contains('div', 'home-4-bg'),
		...MWF_UI.contains('div', 'home-4-boy'),
		...MWF_UI.contains('div', 'home-4-other'),
	];

	MWF_UI.contains_add_hiden(allMarkers);

	// const isDebug = 0;
	// let controller = new ScrollMagic.Controller();
	// function runScrollMagic(trigger, elm, triggerHook) {
	// 	return new ScrollMagic.Scene({triggerElement: trigger, triggerHook: triggerHook})
	// 	.setClassToggle(elm, "js-current") // trigger a TweenMax.to tween
	// 	// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
	// 	.addTo(controller);
	// }



	// let HomeTitleTween = gsap.timeline();
	// HomeTitleTween.fromTo($("#HomeTitle .bg"), {
	// 	y: '-30%'
	// }, {
	// 	y: '50%',
	// 	ease: Linear.easeNone,
	// });
	// let HomeTitle = new ScrollMagic.Scene({triggerElement: "#HomeTitle", duration: '100%', offset: '0%', triggerHook: 0.5})
	// 	.setClassToggle($("#HomeTitle"), "js-current")
	// 	.setTween(HomeTitleTween)
	// 	.addTo(controller);
	// if (isDebug) HomeTitle.addIndicators({name: "HomeTitle"});


	// let HomeStore1Tween = gsap.timeline();
	// HomeStore1Tween
	// .fromTo($("#HomeStore1 .bg"), {
	// 	y: '-30%'
	// }, {
	// 	y: '30%',
	// 	ease: Linear.easeNone,
	// });
	// let HomeStore1 = new ScrollMagic.Scene({triggerElement: "#HomeStore1", duration: '100%', offset: '0%', triggerHook: 0.5})
	// 	.setClassToggle($("#HomeStore1"), "js-current")
	// 	.setTween(HomeStore1Tween)
	// 	.addTo(controller);
	// if (isDebug) HomeStore1.addIndicators({name: "HomeStore1"});

	// let HomeStore2Tween = gsap.timeline();
	// HomeStore2Tween.fromTo($("#HomeStore2 .bg"), {
	// 	y: '-30%'
	// }, {
	// 	y: '30%',
	// 	ease: Linear.easeNone,
	// });
	// let HomeStore2 = new ScrollMagic.Scene({triggerElement: "#HomeStore2", duration: '100%', offset: '0%', triggerHook: 0.5})
	// 	.setClassToggle($("#HomeStore2"), "js-current")
	// 	.setTween(HomeStore2Tween)
	// 	.addTo(controller);
	// if (isDebug) HomeStore2.addIndicators({name: "HomeStore2"});

	// let HomeStore3Tween = gsap.timeline();
	// HomeStore3Tween.fromTo($("#HomeStore3 .bg"), {
	// 	y: '-30%'
	// }, {
	// 	y: '30%',
	// 	ease: Linear.easeNone,
	// });
	// let HomeStore3 = new ScrollMagic.Scene({triggerElement: "#HomeStore3", duration: '100%', offset: '0%', triggerHook: 0.5})
	// 	.setClassToggle($("#HomeStore3"), "js-current")
	// 	.setTween(HomeStore3Tween)
	// 	.addTo(controller);
	// if (isDebug) HomeStore3.addIndicators({name: "HomeStore3"});

	// let HomeStore4Tween = gsap.timeline();
	// HomeStore4Tween.to($("#HomeStore4 .bg"), {
	// 	scale: '2',
	// 	x: '30%',
	// 	y: '20%',
	// 	ease: Linear.easeNone,
	// })
	// // .to($("#HomeStore4 .store-img"), 0.8, {
	// // 	opacity: 0,
	// // 	ease: Linear.easeNone
	// // })
	// let HomeStore4 = new ScrollMagic.Scene({triggerElement: "#HomeStore4", duration: '80%', offset: '0%', triggerHook: 0.5})
	// 	.setClassToggle($("#HomeStore4"), "js-current")
	// 	.setTween(HomeStore4Tween)
	// 	.addTo(controller);
	// if (isDebug) HomeStore4.addIndicators({name: "HomeStore4"});


});

// // Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

// var last_known_scroll_position = 0;
// var ticking = false;

// function doSomething(scroll_pos) {
//   // do something with the scroll position
//   console.log(scroll_pos);
// }

// window.addEventListener('scroll', function(e) {
//   last_known_scroll_position = window.scrollY;
//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });
//   }
//   ticking = true;
// });