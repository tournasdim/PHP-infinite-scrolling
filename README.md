# Infinite scrolling using PHP, jQuery and a bit of AJAX

By combining PHP and jQuery's functionality we can create amazing web applications.

Infinite scrolling is a functionality that is already well known to the many web surfers. This functionality is very common nowadays on many popular social media websites (such as Twitter and Facebook).

[Tournas Dimitiros](http://tournasdimitrios1.wordpress.com) in late 2012 [wrote an article](http://tournasdimitrios1.wordpress.com/2011/12/30/create-an-infinite-scroll-page-using-ajax-php-and-jquery/) describing how to _Create an Infinite Scroll Page Using Ajax-PHP and JQuery_.

## Requirements
* PHP 5+
* MySQL 5+

Only basic PHP and MySQL knowledge is required to set up this functionality. Customizing the code to your own needs isn't very difficult if you have intermediate PHP knowledge.

The the article link above for more information on how these scripts work.

## Overview
1. _javascript/custom_jquery.js_: This file contains all the client-side code (requires __jQuery__). The database will be queried via an AJAX-call.
2. _jquery-masterLoader.php_: This file makes the first connection to the database to return the first 30 rows from the MySQL query. 
3. _jquery-loadMoreComments.php_: This file will respond to AJAX requests.
4. _world_country.sql_ : Contains the data that you can use to emulate this functionality, just uplad this file into your database via phpMyAdmin or via the command line.

Database credentials are stored into an separate file (_conf/my.ini_) . These credentials are parsed with PHP. Although direct access to the directory of this file  is denied via .htaccess, it is good practice is to upload this file into a non publicly accessible directory of your server.

The jQuery library is directly downloaded from Google's CDN, you may wish to change this later.

`require_once` is used to embed the two PHP files into the index file. Direct access is detected and prohibited.

Both PHP scripts have error reporting disabled. For development, just comment the lines out on these scripts.

The database connection is made via the mysqli adapter (supported on most modern hosting environments). A custom Exception handler will be used for custom error messages, so critical detailes will not be displayed into visitor's browser if a database error might occur. 

## Changelog
### 13/06/2013: Updates committed
* Rewrote the README file.
* Replaced debug version of js file with a debug switch.

### 02/09/2012: New version released (V0.4)
* An extra line of code is added on javascript/custom_jquery.js (line 33). It just disables the Ajax-call when no more results are returned from the PHP-script (most likely because the database has no more results to deliver) . This prevents Ajax from sending requests to the server after it receives an empty result.
* A second file is added into the javascript folder (custom_jquery_debug.js) . This file has extensive "console.log" lines enabled, various messages are displayed into browser's console panel (of course  browser's developer tool should be enabled first). If there is need for client-side debugging, import this file into index.php instead of the defauld file (custom_jquery.js).

