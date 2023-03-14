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