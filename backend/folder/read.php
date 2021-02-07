<?php
    $name_folder = $_GET["folder"];
    $dir = "../../root/" . $name_folder;


    $array_info = array('access' => 0, 'change' => 1, 'modificated' => 2, 'size_bytes' => 3, 'name_folder' => 4);
    $array_info['access'] = date("F d Y H:i:s.", fileatime($dir));
    $array_info['change'] = date("F d Y H:i:s.", filectime($dir));
    $array_info['modificated'] = date("F d Y H:i:s.", filemtime($dir));
    $array_info['name_folder'] = $name_folder;

        function folderSize ($dir) {
            $size = 0;
            foreach (glob(rtrim($dir, '/').'/*', GLOB_NOSORT) as $each) {
                $size += is_file($each) ? filesize($each) : folderSize($each);
            }
            return $size;
        };
    $size_bytes = folderSize($dir);
    $array_info['size_bytes'] = $size_bytes;

    $array_info = json_encode($array_info);
    echo $array_info;
?>
