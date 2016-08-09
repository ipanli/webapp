/**
 * 
 */

$(function() {

    FastClick.attach(document.body);

    $(".help-problem li").on("click", function() {
        var _t = $(this),
            _ts = _t.attr("class") ? _t.attr("class") : "";

        if (_ts.indexOf('show') >= 0) {
            _t.removeClass("show");
        } else {
            _t.addClass("show");
        }

    })


})