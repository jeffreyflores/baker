<?php
require_once "settings.php";
$subscriber_number = $_POST[subscriber_number];
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
$mysqli = @mysqli_connect($db_host, $db_user, $db_pass, $db_name);

if ($mysqli) {

    $sql_read = "SELECT subscriber_id from ".$db_tablename." WHERE subscriber_id=".$subscriber_number." LIMIT 1";
    $result = $mysqli->query($sql_read);
    $row_cnt = $result->num_rows;

    if ($row_cnt == 1) {
		while ($row = mysqli_fetch_assoc($result)) {
			$subscriber_id = $row["subscriber_id"];
		}
		echo $subscriber_id;
  	}else{
 	       echo "fail";
    }       
}else{
	   echo "connection_not_made";
}
?>