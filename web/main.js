$(function () {
    var startX;
    var left_airplane = $("#airplane").css("left");
    $("#btn").draggable({
        axis: "x",
        containment: ".roll_bar",
        drag: function (e) {
            $("#train").css("left", "-=" + ((e.offsetX - startX) * 5));
            $("#airplane").css("left", "-=" + ((e.offsetX - startX) * 5));
            $(".mid").css("left", "-=" + ((e.offsetX - startX) * 5));
        },
        start: function (e) {
            startX = e.offsetX;
        },
        stop: function (e) {
            console.log($(this).position().left - $(".roll_bar").position().left);
            if ($(this).position().left - $(".roll_bar").position().left <= 5) {
                alert("left");
            }
            else if (($(".roll_bar").position().left + $(".roll_bar").width()) - ($(this).position().left + $(this).width()) <= 10) {
                alert("right");
            }
            else {
                $(this).animate({
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
        }
    });
});