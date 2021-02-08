<?php
    $is_rename = false;
    $absolute_path = $_GET["file"];
    $new_name = $_GET["newFile"];
    $dir = '../../root' . $absolute_path;

    $current_name = explode('/', $dir);
    $current_name = end($current_name);

    $new_dir = str_replace($current_name, $new_name, $dir);

    if(!file_exists($dir)) {
    } else {
        rename($dir, $new_dir);
        $is_rename = true;
    }
    $response = array('isEdited' => $is_rename);
    echo json_encode($response);
?>