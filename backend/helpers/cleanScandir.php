<?php
  function clean_scandir($dir) {
    return $files = array_values(array_diff(scandir($dir), array('.', '..')));
  }
?>
