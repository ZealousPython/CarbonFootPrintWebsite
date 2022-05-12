// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var $animation_elements = $('.content');
var $window = $(window);
$window.on('scroll resize', check_if_in_view)
$window.trigger('scroll');

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            let elementMiddle = (element_bottom_position + element_top_position) / 2 //+ (window_height / 5)
            let window_middle = (window_top_position + window_bottom_position) / 2 
            let opacity = elementMiddle / window_middle
            if (opacity > (1)) {
                opacity = window_middle / elementMiddle
            }

            if (opacity >= (1 - 0.15) && opacity <= (1 + 0.15)) {
                opacity = 1
            }
            if (opacity < 1) {
                opacity = opacity * opacity * opacity
            }
            if (opacity < .3) {
                opacity = 0
            }
            console.log(opacity)
            $element.css('opacity', (opacity).toString())

        } else {
            $element.css('opacity', '0')
        }
    });
}
