<?php
    $is_created = false;
    $absolute_path = $_GET["folder"];
    //TODO: Validation
    $dir = "../../root" . $absolute_path;
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
        $is_created = true;
    }
    $response = array('isCreated' => $is_created);
    echo json_encode($response);
?>