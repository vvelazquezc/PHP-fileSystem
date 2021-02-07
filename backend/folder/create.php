<?php
    $is_created = false;
    $name_folder = $_GET["folder"];
    //TODO: Validation
    $dir = "../../root/" . $name_folder;
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
        $is_created = true;
    }
    $response = array('isCreated' => $is_created);
    echo json_encode($response);
?>