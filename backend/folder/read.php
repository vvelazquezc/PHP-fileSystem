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

    $extensions = explode('.', $absolute_path);
    $extension = json_encode($extensions[1]);

    if ($extension == 'null') {
        $extension = 'folder';
    } else {
        $extension = str_replace('"', '', $extension);
    };

    $array_info = array(
        'access' => date("F d Y H:i:s.", fileatime($dir)),
        'change' => date("F d Y H:i:s.", filectime($dir)),
        'modificated' => date("F d Y H:i:s.", filemtime($dir)),
        'size_bytes' => folderSize($dir),
        'name_folder' => $absolute_path,
        'extension' => $extension,
    );

    $array_info = json_encode($array_info);
    echo $array_info;
?>
