<?php
    $name_file = '../../root';

    $array_info = array('access' => 0, 'change' => 1, 'modificated' => 2, 'size_bytes' => 3);
    $array_info['access'] = date("F d Y H:i:s.", fileatime($name_file));
    $array_info['change'] = date("F d Y H:i:s.", filectime($name_file));
    $array_info['modificated'] = date("F d Y H:i:s.", filemtime($name_file));

        function folderSize ($dir) {
            $size = 0;
            foreach (glob(rtrim($dir, '/').'/*', GLOB_NOSORT) as $each) {
                $size += is_file($each) ? filesize($each) : folderSize($each);
            }
            return $size;
        };
    $size_bytes = folderSize($name_file);
    $array_info['size_bytes'] = $size_bytes;

    $array_info = json_encode($array_info);
    echo $array_info;
?>