<?php


$is_delete = false;
$absolute_path = $_GET["file"];
$dir = '../../root' . $absolute_path;


if (file_exists($dir)) {
    $success = unlink($dir);
    $is_delete = true;

    if (!$success) {
         throw new Exception("Cannot delete $absolute_path");
    }
}

    $response = array('isRemove' => $is_delete);
    echo json_encode($response);

?>