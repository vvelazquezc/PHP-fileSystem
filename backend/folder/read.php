<?php
    function folderSize ($dir) {
        $size = 0;
        foreach (glob(rtrim($dir, '/').'/*', GLOB_NOSORT) as $each) {
            $size += is_file($each) ? filesize($each) : folderSize($each);
        }
        return $size;
    };

    $absolute_path = $_GET["folder"];
    $dir = "../../root" . $absolute_path;

    $array_info = array(
        'access' => date("F d Y H:i:s.", fileatime($dir)),
        'change' => date("F d Y H:i:s.", filectime($dir)),
        'modificated' => date("F d Y H:i:s.", filemtime($dir)),
        'size_bytes' => folderSize($dir),
        'name_folder' => $absolute_path
    );

    $array_info = json_encode($array_info);
    echo $array_info;
?>
