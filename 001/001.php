#!/usr/bin/php
<?php

$x = 1000;

$sum = 0;

$multiples[] = 0;

while($x > 0)
{
--$x;
        if(($x % 3 == 0))
        {
        echo "$x is a multiple of 3\n";
        $sum+=$x;
	array_push($multiples, $x);
	}

        if($x % 5 == 0)
        {
        echo "$x is a multiple of 5\n";
        $sum+=$x;
	array_push($multiples, $x);
        }

        if(($x % 3 == 0)&&($x % 5 == 0))
        {
        echo "$x is a multiple of both\n";
        $sum-=$x;
        }
}

echo "$sum\n";

?>
