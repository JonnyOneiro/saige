<?php

require_once('mysql_connect.php');
$email = addslashes($_POST['email']);

$query = "SELECT * 
          FROM user
          WHERE email = '$email'
";

$result = mysqli_query($conn, $query);
$output = [];

if($result){
    $numRows = mysqli_num_rows($result);
    if($numRows < 1){
        $output['userExists'] = true;
    } else{
        $output['userExists'] = false;
}}

?>