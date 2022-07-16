<?php
    include('conn.php');

    header('Access-Control-Allow-Origin: http://127.0.0.1:5500');

    $query = 'SELECT * FROM tarea';
    $result_set = mysqli_query($conn,$query);
    $response = new stdClass();
    $tareas = [];

    while($row = mysqli_fetch_array($result_set, MYSQLI_ASSOC)){
        $tarea = new stdClass();
        foreach($row as $key=>$value){
            $tarea->{$key} = $value;
        }
        $tareas[] = $tarea;
    }

    $response->tareas = $tareas;
    echo json_encode($response);

    mysqli_close($conn);

    exit();
?>