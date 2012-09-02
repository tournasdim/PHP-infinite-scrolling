$(document).ready(function() { 
 $("#postedComments").append( "<p id='last'></p>" );
 //$("#postedComments").append( "<div id='last'></div>" );
console.log("Document Ready ------------------------");
if ($("#last").length){ 
	position = $("#last").offset() ; 
	console.log("Initialization of last_DIV succeeded and it's values are ....Top-value is :"+Math.floor(position.top) + " ---- Left-value is : "+ Math.floor(position.left )) ;	

	}
  doMouseWheel = 1 ;   
$(window).scroll(function() {
if (!doMouseWheel)  {
return ;
} ;
 var distanceTop = $('#last').offset().top - $(window).height();
 console.log("Mouse scroll , and The DIV  last has an offset-top value of :"+ Math.floor($("#last").offset().top)+"----Window height is :"+Math.floor($(window).height())+"---- Last's offset minus window height is : "+Math.floor(distanceTop)) ;  
	if  ($(window).scrollTop() > distanceTop){
console.log("End of Window Reached >>>>>>>>>>>>>>>>>>>>>>>>>>") ;
console.log("Show Div loadMoreComments and Class .postedComments.last has the id of  : "+$(".postedComment:last").attr('id'));	
 doMouseWheel = 0 ; 
	$('div#loadMoreComments').show();
	$.ajax({
	dataType : "html" ,
	url: "jquery-loadMoreComments.php?lastComment="+ $(".postedComment:last").attr('id') ,	
	success: function(html) {
	 doMouseWheel = 1 ; 
	if(html){
	$("#postedComments").append(html);
	console.log("Append html , sumarize .... first id has nr : " +$(".postedComment:first").attr('id')+ " --- last id has nr :" +$(".postedComment:last").attr('id'));
	position = $("#last").offset() ; 
	console.log("New values of last_DIV  from IF_html are , Top :"+Math.floor(position.top )+" --- left :"+Math.floor(position.left)) ;	
	$("#last").remove();
	if ($("#last").length == 0 ){ console.log(">>>>>>>>>>>>>>>The last_DIV is removed from stage>>>>>>>>>>") ; }
	$("#postedComments").append( "<p id='last'></p>" );
	if ($("#last").length  ){ 
	position = $("#last").offset() ; 
	console.log(">>>>>>>>>>>>>>>A new last_DIV is appended and it's values are , Top :" + Math.floor(position.top) +"  ---- Left :" + Math.floor(position.left )) ; 
	}	
	$('div#loadMoreComments').hide();
	}else{	
	console.log("LoadMoreComments is replaced with a custom message") ; 
	$('div#loadMoreComments').replaceWith("<center><h1 style='color:red'>End of countries !!!!!!!</h1></center>");
	}
	}
	});
	}
	});
	});
	
	
	