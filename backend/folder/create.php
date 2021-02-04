<?php
    $name_folder = $_GET["folder"];
    echo $name_folder;
    $dir = "../../root/" . $name_folder;
    echo '<br>';
    echo $dir;
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
        echo $dir;
    }
?>