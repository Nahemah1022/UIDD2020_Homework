$(function () {
    var originLeft = $("#btn").css("left");
    console.log(originLeft);
    var left_airplane = $("#airplane").css("left");
    $("#btn").draggable({
        axis: "x",
        containment: ".roll_bar",
        drag: function (e) {
            /*
            $("#train").css("left", "-=" + ((e.offsetX - startX) * 5));
            $("#airplane").css("left", "-=" + ((e.offsetX - startX) * 5));
            $(".mid").css("left", "-=" + ((e.offsetX - startX) * 5));
            */
        },
        start: function (e) {
            left_airplane = $("#airplane").css("left");
        },
        stop: function (e) {
            if ($(this).position().left - $(".roll_bar").position().left <= 5) {
                //alert("left");
            }
            else if (($(".roll_bar").position().left + $(".roll_bar").width()) - ($(this).position().left + $(this).width()) <= 10) {
                //alert("right");
            }
            else {
                $(this).animate({
                    left: originLeft
                }, 500);
                /*
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
                */
            }
        }
    });
});