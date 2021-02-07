<?php

    $absolute_path = $_GET["folder"];
    $dir = '../../root' . $absolute_path;

    $files = clean_scandir($dir);
    $files = json_encode($files);
    echo $files;

    function clean_scandir($dir) {
        return $files = array_values(array_diff(scandir($dir), array('.', '..')));
    }
?>