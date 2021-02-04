<?php
    $dir = "../../root/newfolder";
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
        echo $dir;
    }
?>