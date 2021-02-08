<?php
$is_delete = false;
$absolute_path =  $_GET["folder"];
$current_dir = '../../root' . $absolute_path;

    if(!file_exists($current_dir)) {
    } else {
        deleteDirectory($current_dir);
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
        @rmdir($dir);

        $response = array('isRemove' => $is_delete);
        echo json_encode($response);
    }
?>