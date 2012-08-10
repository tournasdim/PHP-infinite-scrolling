<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
    <head>
<title>Infinite Scrolling with Ajax - PHP and JQuery</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta name="description" content="Infinite Scrolling with Ajax PHP and JQuery" />
<meta name="keywords" content="jquery, Ajax, PHP, Infinite scrolling"/>
<!--  Infinite scrolling is based on the JQuery library and a custom jquery script , include these files --> 
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="javascript/custom_jquery.js"></script>
<link rel="stylesheet" type="text/css" media="screen" href="styles.css" />
    </head>
    <body>
        <div id="content">
            <p class="head">Technology & Science</p>
            <h1>Welcome , Scroll to the bottom of the page  </h1>
            <p class="subline">List of Countries with population </p>
            <p class="meta">by Tournas Dimitrios</p>
            <div class="article">
<div id="postedComments">

<!--  Include the following PHP include line to start the infinite scrolling functionality  -->
<?php require_once 'jquery-masterLoader.php' ;  ?>
</div>
<div id="loadMoreComments" style="display:none;" > <center>test for hidden field</center></div>    
            </div>           
        </div>      
    </body>
</html>