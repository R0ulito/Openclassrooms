<?php


function one_out_of_two($arg){
    $argup = strtoupper($arg);
    $ooot = ' ';

    for ($i = 0; $i < strlen($arg); $i = $i + 2) {
        if ($arg[$i] == ' ' || $argup[$i+1] == ' '){
            continue;
        }
        $ooot[$i] = $argup[$i];
        $ooot[$i + 1] = $arg[$i + 1];

    }
    echo $ooot;
}

one_out_of_two('C\'est le top');

?>