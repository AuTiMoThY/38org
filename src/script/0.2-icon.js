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