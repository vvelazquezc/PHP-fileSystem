<?php
    require '../helpers/cleanScandir.php';

    $absolute_path = $_GET["folder"];
    $dir = "../../root" . $absolute_path;

    $files = clean_scandir($dir);
    $files = json_encode($files);
    echo $files;
?>