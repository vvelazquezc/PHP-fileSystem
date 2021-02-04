<?php
    $current_dir = '../../root/OtraPrueba';

    if(!file_exists($current_dir)) {
        echo 'no existe';
    } else {
        echo 'existe';
        deleteDirectory($current_dir);
    }


    function deleteDirectory($dir) {
        if(!$dh = @opendir($dir)) return;
        while (false !== ($current = readdir($dh))) {
            if($current != '.' && $current != '..') {
                echo 'Se ha borrado el archivo '.$dir.'/'.$current.'<br/>';
                if (!@unlink($dir.'/'.$current)) 
                    deleteDirectory($dir.'/'.$current);
            }
        }
        closedir($dh);
        echo 'Se ha borrado el directorio '.$dir.'<br/>';
        @rmdir($dir);
    }
?>