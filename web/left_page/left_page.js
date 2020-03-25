$(document).ready(function () {
    $(".main").animate({
        opacity: 1
    }, 500, function () {
        $(".people").animate({
            right: "-700px"
        }, 1000)
    });
});