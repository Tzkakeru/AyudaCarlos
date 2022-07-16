<?php

    include('credentials.php');

    try{
        $conn = mysqli_connect($DDBB_HOST, $DDBB_USER, $DDBB_PASSWORD, $DDBB_NAME);
    }catch(Exception $e){
        die('Error de conexión:<br><br>'.$e);
    }
?>