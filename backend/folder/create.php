<?php
    include 'gettree.php';

    $name_folder = $_GET["folder"];
    $dir = "../../root/" . $name_folder;
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
        $files = clean_scandir($dir);
        echo $files;
    }

?>