_debug = false;

function dbg(msg) {
    if (_debug)
        console.log (msg);
}

$(document).ready(function() {
    doMouseWheel = 1 ;
    $("#postedComments").append( "<p id='last'></p>" );
    dbg("Document Ready");

    $(window).scroll(function() {
        dbg("Window Scroll Start");

        if (!doMouseWheel)
            return;

        var distanceTop = $('#last').offset().top - $(window).height();
        if  ($(window).scrollTop() > distanceTop) {
            dbg("Window distanceTop to scrollTop Start");
            $('div#loadMoreComments').show();
            doMouseWheel = 0 ;
            
            dbg("Another window to the end !!!! "+$(".postedComment:last").attr('id'));
            $.ajax({
                dataType : "html",
                url: "jquery-loadMoreComments.php?lastComment="+ $(".postedComment:last").attr('id'),
                success: function(html) {
                    doMouseWheel = 1 ;
                    if(html){
                        $("#postedComments").append(html);
                        dbg('Append html: ' + $(".postedComment:first").attr('id'));
                        dbg('Append html: ' + $(".postedComment:last").attr('id'));

                        $("#last").remove();
                        $("#postedComments").append( "<p id='last'></p>" );
                        $('div#loadMoreComments').hide();
                    } else {
                        //Disable Ajax when result from PHP-script is empty (no more DB-results )
                        $('div#loadMoreComments').replaceWith( "<center><h1 style='color:red'>End of countries !!!!!!!</h1></center>" );
                        doMouseWheel = 0 ;
                    }
                }
            });
        }
    });
});


