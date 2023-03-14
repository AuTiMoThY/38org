/**
 * >> MWF_UI.init()
 */

init() {
    const _ = this;
    $(window).scroll(function(event) {
        if ($(this).scrollTop() > 100) {
            $("body").addClass('js-scrolling');
        }else {
            $("body").removeClass('js-scrolling');
        }
    });

    _.icon();

    gsap.registerPlugin(ScrollTrigger);

},