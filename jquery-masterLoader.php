<?php 
/**
 * Infinite scrolling
 * 
 * http://tournasdimitrios1.wordpress.com
 * 
 * @copyright Tournas Dimitiros 2012
 * 
 This program is free software: you can redistribute it and/or modify  it under the terms of the GNU General Public License as published by  the Free Software Foundation, either version 3 of the License, or  (at your option) any later version . This program is distributed in the hope that it will be useful ,  but WITHOUT ANY WARRANTY ; without even the implied warranty of  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License for more details . You should have received a copy of the GNU General Public License  along with this program .  If not , see <http://www.gnu.org/licenses/> .
 
 * @author Tournas Dimitrios <tournasdimitrios@gmail.com>
 * @version 0.3
 * 
 */

/*
prevent direct access to a php include file
http://stackoverflow.com/questions/409496/prevent-direct-access-to-a-php-include-file
*/
if ( strpos(strtolower($_SERVER['SCRIPT_NAME']),strtolower(basename(__FILE__))) ) {
    header("Location: index.php");
    die("Denny access");
	}
error_reporting(0) ;
set_exception_handler('exception_handler') ;
$config = parse_ini_file("config/my.ini") ;
$db=new mysqli($config['dbLocation'] , $config['dbUser'] , $config['dbPassword'] , $config['dbName']);
if(mysqli_connect_error()) {
 throw new Exception("<b>Could not connect to database</b>") ;
}
if (!$result = $db->query("SELECT * FROM world_country ORDER BY id ASC LIMIT 0,30")) {
    throw new Exception("<b>Could not read data from the table </b>") ;
}

while ($data = $result->fetch_object()) {
$id = $data->id;
$name = $data->Name ;
$continent = $data->Continent;
$population = $data->Population ;
echo "
<div class='postedComment' id=\"$data->id \">
<center>
<b>Country : </b>$name <br /> 
<b>Continent : </b>$continent<br/>
<b>Population : </b>$population 
<i style=\"font-size:small;color:blue\">Index : $id</i>
<hr /> 
</center>
</div> 
" ;

        } 
/* close connection */
$db->close();
function exception_handler($exception) {
  echo "Exception cached : " , $exception->getMessage(), "";
}

?>