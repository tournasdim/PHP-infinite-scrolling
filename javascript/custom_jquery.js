$(document).ready(function() { 
 $("#postedComments").append( "<p id='last'></p>" );
//console.log("Document Ready");
  doMouseWheel = 1 ;   
$(window).scroll(function() {
//console.log("Window Scroll ----");

if (!doMouseWheel)  {
return ;
} ;
 var distanceTop = $('#last').offset().top - $(window).height();	
	if  ($(window).scrollTop() > distanceTop){
//console.log("Window distanceTop to scrollTop Start");
 doMouseWheel = 0 ; 
	$('div#loadMoreComments').show();
	//console.log("Another window to the end !!!! "+$(".postedComment:last").attr('id'));	
 	$.ajax({
	dataType : "html" ,
	url: "jquery-loadMoreComments.php?lastComment="+ $(".postedComment:last").attr('id') ,	
	success: function(html) {
	 doMouseWheel = 1 ; 
	if(html){
	$("#postedComments").append(html);
	//console.log("Append html--------- " +$(".postedComment:first").attr('id'));
	//console.log("Append html--------- " +$(".postedComment:last").attr('id'));
	$("#last").remove();
	$("#postedComments").append( "<p id='last'></p>" );
	$('div#loadMoreComments').hide();
	}else{		
	$('div#loadMoreComments').replaceWith("<center><h1 style='color:red'>End of countries !!!!!!!</h1></center>");
// Added on Ver.0.4  
//Disable Ajax when result from PHP-script is empty (no more DB-results )
	 doMouseWheel = 0 ; 
	}
	}
	});
	}
	});
	});
	
	
	