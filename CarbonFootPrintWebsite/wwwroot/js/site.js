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
            
            let window_middle = (window_top_position + window_bottom_position) / 2 
            let element_middle = (element_top_position + element_bottom_position) / 2 
            let opacityTop = window_top_position / element_top_position 
            let opacityBottom = element_bottom_position / window_bottom_position
            let opacity = 1

            if (element_bottom_position < window_middle && element_top_position < window_top_position) {
                opacity = opacityBottom * opacityBottom
            }
            if (element_bottom_position > window_bottom_position && element_top_position > window_middle) {
                opacity = opacityTop * opacityTop
            }
            
            console.log(`Opacity: ${opacity}\nOpacityBottom: ${opacityBottom}\nOpacityTop: ${opacityTop}`)
            $element.css('opacity', (opacity).toString())

        } else {
            $element.css('opacity', '0')
        }
    }); console.log(`\n\n\n\n\n\n\n\n----------------------------------------------------`)
}
