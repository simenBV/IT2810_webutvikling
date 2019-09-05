$(document).ready(function(){
    $(".paragraph").hide();


    $('#buttonContainer1').click(function(){
        var link = $(this);
        $('#p1').slideToggle(300, function() {
            if ($(this).is(':visible')) {
                $('#btnAboutTextToggle').text('Lukk om kunstneren');
            }
                else {
                $('#btnAboutTextToggle').text('Vis om kunstneren');
            }
        });
    });

    $('#buttonContainer2').click(function(){
        var link = $(this);
        $('#p2').slideToggle(300, function() {
            if ($(this).is(':visible')) {
                $('#btnDocTextToggle').text('Lukk dokumentasjon');
            }
            else {
             $('#btnDocTextToggle').text('Vis dokumentasjon');
            }
        });
    });

    /*$(".buttonContainer").click(function(){
        $(".paragraph").toggle(500);

        if ($(".paragraph").hide()){
            $(".paragraph").show(300, function(){
                $("#btnAboutTextToggle").text("Lukk om kunstneren")
            });
        }
        else {
            $(".paragraph").hide(300, function(){
                $("#btnAboutTextToggle").text("Vis om kunstneren")
            });
        }
    });
    */




    /*var btnText = document.getElementById('btnAboutTextToggle');

    $(".buttonContainer").click(function(){
        var btnText = document.getElementById('btnAboutTextToggle');
        alert($("#btnAboutTextToggle").HTML());
        $(".paragraph").toggle(500);


    });*/



    var sdegP = 0 ;
    var sdegL = 0 ;

    $("#image1").click(function (){
        sdegP ++ ;
        sdegP = sdegP + 21.5 ;
        var srotP = "rotate(" + sdegP + "deg)";

        sdegL -- ;
        sdegL = sdegL - 21.5 ;
        var srotL = "rotate(" + sdegL + "deg)";

        $("#poly").css({
            "transform" : srotP,
            "transform-origin" : "50% 50%"
            });
        $("line").css({
            "transform" : srotL,
            "transform-origin" : "50% 50%"
            });
    });


});




