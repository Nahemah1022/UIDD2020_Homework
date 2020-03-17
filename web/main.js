$( function() {
    var startX;
    $("#btn").draggable({
        axis: "x",
        containment: ".roll_bar",
        drag: function(e){
            //console.log(("#train").css("left"));
            console.log($("#train").css("left").substring(0, $("#train").css("left").length - 2));
            $("#train").css("left", (e.offsetX - startX) * 5);
        },
        start: function(e){
            startX = e.offsetX;
        },
        stop: function(){
            if($(this).position().left - $(".roll_bar").position().left <= 5){
                alert("left");
            }
            else if(($(".roll_bar").position().left + $(".roll_bar").width()) - ($(this).position().left + $(this).width()) <= 10){
                alert("right");
            }
            else{
                $(this).animate({
                    left: "0",
                }, 500);    
            }
        }
    });
});