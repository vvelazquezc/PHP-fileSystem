<?php

require '../helpers/cleanBytes.php';

function filesSize($file_name) {
    $size = 0;
    $size = filesize($file_name);
    $size = formatBytes($size, 0);
    return $size;
};

function foldersSize ($dir) {
    $size = 0;
    foreach (glob(rtrim($dir, '/').'/*', GLOB_NOSORT) as $each) {
        $size += is_file($each) ? filesize($each) : foldersSize($each);
    }
    $size = formatBytes($size, 0);
    return $size;
};
?>