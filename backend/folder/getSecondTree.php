<?php
    $name_folder = $_GET["subfolder"];
    echo $name_folder;
    $dir = "../../root/" . $name_folder;

    $files = clean_scandir($dir);
    $files = json_encode($files);
    echo $files;

    function clean_scandir($dir) {
        return $files = array_values(array_diff(scandir($dir), array('.', '..')));
    }
?>