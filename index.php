<?php
header('Access-Control-Allow-Origin: *');
$data =  file_get_contents('dist/scannr.js')."\n";
$data.=  file_get_contents('lib/qwery.min.js')."\n";
$data.=  file_get_contents('lib/bonzo.min.js');
echo $data;