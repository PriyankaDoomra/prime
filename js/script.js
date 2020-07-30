$(document).ready(function(){
    var adjustSIdebar = function(){
        $(".sidebar").slimScroll({
            height:document.documentElement.clientHeight - $("navbar").outerHeight()
        });
    };

    adjustSIdebar();

    $(window).resize(function() {
        adjustSIdebar();
    });
    $(".sideMenuToggler").on("click", function(){
        $(".wrapper").toggleClass("active");
    });
});