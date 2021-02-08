<?php


$is_delete = false;
$absolute_path =  "/" . $_GET["folder"];
$dir = '../../root' . $absolute_path;

if(!file_exists($dir)) {
} else {
    deleteDirectory($dir);
}

function deleteDirectory($dir) {

    if(!$dh = @opendir($dir)) return;
    while (false !== ($current = readdir($dh))) {
        if($current != '.' && $current != '..') {
            $is_delete = true;
            if (!@unlink($dir.'/'.$current))
                deleteDirectory($dir.'/'.$current);
        }
    }
    closedir($dh);
    $is_delete = true;
    @rmdir($dir);

    $response = array('isRemove' => $is_delete);
    echo json_encode($response);
}
?>