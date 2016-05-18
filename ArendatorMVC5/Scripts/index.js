$(document).ready(function () {
    $(".parallax").parallax();

    var $slider = $(".slider");
    var $width = "450px";
    var $deviceWidth = $(window).width();

    if ($deviceWidth <= 375) {
        $width = "370px";
    }
    else if ($deviceWidth <= 1024) {
        $width = "450px";
    }
    else if ($deviceWidth <= 1920) {
        $width = "400px";
    }

        $slider.slider({ height: $width, interval: 4000, transition: 750 });
});