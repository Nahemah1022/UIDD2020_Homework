var oriX;
var startX;
var left_airplane = $("#airplane").css("left");

$(window).resize(function () {
    $("#airplane").css("left", ($(window).width() - 250) + "px");
});

$(function () {
    $("#btn").draggable({
        axis: "x",
        containment: ".roll_bar",
        drag: function (e) {
            $("#train").css("left", "-=" + ((e.offsetX - startX) * 5));
            $("#airplane").css("left", "-=" + ((e.offsetX - startX) * 5));
            $(".mid").css("left", "-=" + ((e.offsetX - startX) * 5));
            if ($("#btn").css("left").slice(0, -2) <= -72) {
                fadeOut(true);
                return;
            }
            else if ($("#btn").css("left").slice(0, -2) >= 72) {
                fadeOut(false);
                return;
            }
        },
        start: function (e) {
            startX = e.offsetX;
            left_airplane = $("#airplane").css("left");
        },
        stop: function (e) {
            slideStop();
        }
    });
});

function slideStop() {
    $("#btn").animate({
        left: "0"
    }, 500);
    $("#train").animate({
        left: "-1250px"
    }, 500);
    $("#airplane").animate({
        left: left_airplane
    }, 500);
    $(".mid").animate({
        left: "0",
        width: "100%"
    }, 500);
}

function fadeOut(mode) {
    $("#btn").draggable({
        disabled: true,
        revert: "invalid"
    });
    $(".main").animate({
        opacity: 0
    }, 1000, function () {
        if (mode) {
            window.location.href = "./left_page/left_page.html";
        }
        else {
            window.location.href = "./right_page/right_page.html";
        }
    });
}