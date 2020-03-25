$(document).ready(function () {
    $(".main").animate({
        opacity: 1
    }, 500, function () {
        $(".people").animate({
            left: "-700px"
        }, 1000)
    });
});