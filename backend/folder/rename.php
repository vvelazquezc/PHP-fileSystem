<?php
    // include 'gettree.php';
    // $dir = '../../root';
    // $files = clean_scandir($dir);
    $current_dir = '../../root/Another';

    $current_name = explode('/', $current_dir);
    $current_name = end($current_name);

    $new_name = 'FolderChange';

    $new_dir = str_replace($current_name, $new_name, $current_dir);


    if(!file_exists($current_dir)) {
        echo 'no existe';
    } else {
        echo 'existe';
        rename($current_dir, $new_dir);
    }
?>