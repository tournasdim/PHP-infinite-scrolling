<html>
<head>
<meta content="text/html; charset=ISO-8859-1"
http-equiv="content-type">
<title></title>
</head>
<body>
<h1><span style="font-weight: bold;">Infinite scrolling using Ajax -
JQuery - PHP</span></h1>
<span
style="color: rgb(102, 102, 102); font-family: 'Lucida Grande','Lucida Sans Unicode',Verdana,sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 22px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; background-color: rgb(255, 255, 255); display: inline ! important; float: none;">By
&nbsp;combining &nbsp;Ajax – PHP and JQuery’s functionality &nbsp;we
can create amazing web-applications . <br>
</span><strong
style="margin: 0px; padding: 0px; font-weight: bold; color: rgb(102, 102, 102); font-family: 'Lucida Grande','Lucida Sans Unicode',Verdana,sans-serif; font-size: 16px; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: 22px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; background-color: rgb(255, 255, 255);">Infinite
scrolling</strong><span
style="color: rgb(102, 102, 102); font-family: 'Lucida Grande','Lucida Sans Unicode',Verdana,sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 22px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; background-color: rgb(255, 255, 255); display: inline ! important; float: none;"><span
class="Apple-converted-space">&nbsp;</span>, certainly&nbsp;this
functionality is already well known to the majority of &nbsp;web-surfers<span
class="Apple-converted-space"> . This </span></span><span
style="color: rgb(102, 102, 102); font-family: 'Lucida Grande','Lucida Sans Unicode',Verdana,sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 22px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; background-color: rgb(255, 255, 255); display: inline ! important; float: none;">functionality
is &nbsp;common nowadays on the most-visited &nbsp;social-media
websites ( Twitter , Facebook )</span> . The article of this code is
located at <a
href="http://tournasdimitrios1.wordpress.com/2011/12/30/create-an-infinite-scroll-page-using-ajax-php-and-jquery/">&gt;&gt;&gt;&gt;&gt;&gt;&gt;</a>
. <br>
<h3>Requirements :</h3>
Actually there are no special requirements to set-up these code
snippets . A web server that supports PHP 5+ and Mysql 5+ is adequate .<br>
Only basic PHP and Mysql knowledge is required to set up this
functionality on your development computer&nbsp; . Customizing the code
to your own needs isn't very difficult if you have intermediate PHP
knowledge .&nbsp; Of course you can visit the afforementioned link to
request for help .<br>
<span style="font-weight: bold;">Note :&nbsp;</span> I 'll not respond
to messages like "I have installed the scripts , but it doesn't work .
Please help me " .Your request should be structured on technical
details . If you have basic PHP knowledge&nbsp;&nbsp; and exhausted
your skills then you are welcome to request for help . <br>
<h3>General overview :</h3>
<ul>
<li>To avoid "spaggeti code " the code is separated into three files
: <br>
1)<span style="font-style: italic;"> javascript/custom_jquery.js</span>
: this file contains all the client-side code (JQuery) . The database
will be queried via an AJAX-call .<br>
2) <span style="font-style: italic;">jquery-masterLoader.php</span> :
This file makes the first connection to the database to return the
first 30 Mysql query results . <br>
3) <span style="font-style: italic;">jquery-loadMoreComments.php</span>
: It&nbsp; respond to AJAX requests . <br>
</li>
<li>Database credentials are stored into an separate file (
conf/my.ini) . These credentials are parsed with PHP . Although direct
access to the directory of this file&nbsp; is denied via
.htaccess&nbsp; , a good practice is to upload this file into a non
publicly accessible directory of your server . <br>
</li>
<li>The JQuery library is directly downloaded from Google's AJAX API
, so your server is saved from a bit of resource-cycles . <br>
</li>
<li><span style="font-style: italic;">Requere_once</span> is used to
embed the two PHP files into the index file . Direct access is detected
and prohibited .&nbsp;</li>
<li>world_country.sql&nbsp; : Contains the data that you can use to
emulate this functionality , just uplad this file into your database
via PHPMyadmin or via command line . <br>
</li>
<li>Both PHP scripts have error reporting disabled . For development
, just comment the proper lines on these scripts . <br>
</li>
<li>Database connection is made via the Mysqli adapter
(supported&nbsp; on all&nbsp; hosting&nbsp; environments) .&nbsp; A
custom Exception&nbsp; handler will thrown custom error messages&nbsp;
, so critical detailes will not be displayed into visitor's browser if
a database error might occure . <br>
</li>
</ul>
<h3>Licence :</h3>
/**<br>
&nbsp;* Infinite scrolling&nbsp; <br>
&nbsp;* <br>
&nbsp;* http://tournasdimitrios1.wordpress.com<br>
&nbsp;* <br>
&nbsp;* @copyright Tournas Dimitiros 2012<br>
&nbsp;* <br>
&nbsp;* This program is free software: you can redistribute it and/or
modify<br>
&nbsp;* it under the terms of the GNU General Public License as
published by<br>
&nbsp;* the Free Software Foundation, either version 3 of the License,
or<br>
&nbsp;* (at your option) any later version.<br>
&nbsp;* <br>
&nbsp;* This program is distributed in the hope that it will be useful,<br>
&nbsp;* but WITHOUT ANY WARRANTY; without even the implied warranty of<br>
&nbsp;* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.&nbsp; See
the<br>
&nbsp;* GNU General Public License for more details.<br>
&nbsp;* <br>
&nbsp;* You should have received a copy of the GNU General Public
License<br>
&nbsp;* along with this program.&nbsp; If not, see
&lt;http://www.gnu.org/licenses/&gt;.<br>
&nbsp;* <br>
&nbsp;* @author Tournas Dimitrios &lt;tournasdimitrios@gmail.com&gt;<br>
&nbsp;* @version 0.3<br>
&nbsp;* <br>
&nbsp;*/<br>
<br>
</body>
</html>
