
const CONFIG = {"VERSION":"20211013","PROJECT_NAME":"MWF"};

/*
 * TOC
 *
 * MWF_UI
 */


// 最新消息清單
class newsCard extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // Element functionality written in here
    }
}
customElements.define('news-card', newsCard);

class casesCard extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // Element functionality written in here
    }
}
customElements.define('cases-card', casesCard);

class pdtCard extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // Element functionality written in here
    }
}
customElements.define('pdt-card', pdtCard);

class listPagination extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // Element functionality written in here
    }
}
customElements.define('list-pagination', listPagination);


class TextBlock extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // Element functionality written in here
        // this.style.padding = "40px";
    }
}
customElements.define('text-block', TextBlock);

class moduleTabs extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // Element functionality written in here
        // this.style.padding = "40px";
    }
}
customElements.define('module-tabs', moduleTabs);

// 輸入框
class moduleField extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        let $this_input = $(this).find('input');
        $this_input.focus(function(event) {

            let $this_parent = $(this).parents("module-field");
            $this_parent.addClass("js-focus");
        });
        $this_input.focusout(function() {
            let $this_parent = $(this).parents("module-field");
            $this_parent.removeClass("js-focus");
        });
    }
}
customElements.define('module-field', moduleField);

// > MWF_UI
const MWF_UI = (function(window, jQuery) {
            if (!window.jQuery) { throw new Error("requires jQuery") }

            let $ = window.jQuery;

            let breakpoints = {
                "xxs": 0,
                "xs": 375,
                "sm": 576,
                "md": 768,
                "lg": 1024,
                "xl": 1280,
                "xxl": 1366,
                "uxl": 1680
            };

            let mqUp = {
                "xxs": window.matchMedia("(min-width: " + breakpoints.xxs + "px)"),
                "xs": window.matchMedia("(min-width: " + breakpoints.xs + "px)"),
                "sm": window.matchMedia("(min-width: " + breakpoints.sm + "px)"),
                "md": window.matchMedia("(min-width: " + breakpoints.md + "px)"),
                "lg": window.matchMedia("(min-width: " + breakpoints.lg + "px)"),
                "xl": window.matchMedia("(min-width: " + breakpoints.xl + "px)"),
                "xxl": window.matchMedia("(min-width: " + breakpoints.xxl + "px)"),
                "uxl": window.matchMedia("(min-width: " + breakpoints.uxl + "px)"),
            };


            let mqDown = {
                "xxs": window.matchMedia("(max-width: " + breakpoints.xs + "px)"),
                "xs": window.matchMedia("(max-width: " + breakpoints.sm + "px)"),
                "sm": window.matchMedia("(max-width: " + breakpoints.md + "px)"),
                "md": window.matchMedia("(max-width: " + breakpoints.lg + "px)"),
                "lg": window.matchMedia("(max-width: " + breakpoints.xl + "px)"),
                "xl": window.matchMedia("(max-width: " + breakpoints.xxl + "px)"),
                "xxl": window.matchMedia("(max-width: " + breakpoints.uxl + "px)"),
                // "uxl" : window.matchMedia("(max-width: "+breakpoints.+"px)"),
            };


            // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
            }

            function getRandomArbitrary(min, max) {
              return Math.random() * (max - min) + min;
            }

            function getRandomIntInclusive(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
            }



            return {
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
/**
 * >> MWF_UI.icon()
 */

icon() {
    $("[data-icon]").each(function(i, elm) {
        let url = $(elm).data('icon');

        try {
            Snap.load(url, function (f) {
                let _svg = f.node;

                if ($(elm).hasClass('link')) {
                    $(elm).append($("<div/>", {class: 'svgicon'}).append(_svg));
                }
                else if ($(elm).hasClass('star')) {
                    $(elm).append($("<div/>", {class: 'svgicon'}).append(_svg));

                    // $(".how-to-item").each(function(index, el) {
                    //     const time = getRandomIntInclusive(1, 10);
                    //     console.log(time);

                    //     $(el).find('svg').css({
                    //         'animation-duration': time + 's'
                    //     });
                    // });

                }
                else {
                    $(elm).append($("<div/>", {class: 'svgicon'}).append(_svg));
                }

            });
        }
        catch (e) {
            console.log(e);
        }

    });
},
/**
 * >> MWF_UI.contains(selector, text)
 */

contains(selector, text) {
    const _ = this;

    var elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function(element) {
        return RegExp(text).test(element.textContent);
    });
},


/**
 * >> MWF_UI.contains_add_hiden(allMarkers)
 */

contains_add_hiden(allMarkers){
    allMarkers.forEach(el => {
        el.classList.add('hidden');
    });
},
/**
 * ---------------------------------------------------------------------------------
 * >> MWF_UI.mmenu()  手機版menu 動作
 */
mmenu(){
    return {
        init: function() {
            console.log("mmenu start");
            let _this = this;

            let $body = $("body");

            (!$body.hasClass("js-open-mobile-menu")) ? _this.open($body): _this.close($body);
        },

        // mmenu.open
        open: function(el) {
            // console.log('open');
            el.addClass("js-open-mobile-menu");
        },

        // mmenu.close
        close: function(el) {
            // console.log('close');
            el.removeClass("js-open-mobile-menu");
        }
    }
},

    }
}(window, jQuery));


$(function() {
    MWF_UI.init();
    // $("body").addClass("js-open-mobile-menu");


});