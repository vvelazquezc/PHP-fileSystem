<?php
    require '../helpers/sizes.php';

    $absolute_path = $_GET["folder"];
    $dir = "../../root" . $absolute_path;

    $extensions = explode('.', $absolute_path);
    $extension = json_encode($extensions[1]);

    $size = 0;
    if ($extension == 'null') {
        $extension = 'folder';
        // $size = foldersSize($dir);
    } else {
        $extension = str_replace('"', '', $extension);
        $size = filesSize($dir);
    };

    $array_info = array(
        'access' => date("F d Y H:i:s.", fileatime($dir)),
        'change' => date("F d Y H:i:s.", filectime($dir)),
        'modificated' => date("F d Y H:i:s.", filemtime($dir)),
        'size_bytes' => $size,
        'name_folder' => $absolute_path,
        'extension' => $extension,
    );

    $array_info = json_encode($array_info);
    echo $array_info;
?>
