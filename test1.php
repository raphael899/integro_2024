<?php

function is_palindrome_phrase($input) {
    $re = '/[^A-Za-z0-9]/';
    $str = strtolower(preg_replace($re, '', $input));
    
    $len = strlen($str);
    for ($i = 0; $i < $len/2; $i++) {
        if ($str[$i] !== $str[$len - 1 - $i]) {
            return false;
        }
    }
    return true;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome_phrase($input)); 
