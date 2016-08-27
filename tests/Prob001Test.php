<?php
namespace tomwof\euler;
include_once __DIR__ . '/../src/Prob001.php';

class Prob001Test extends \PHPUnit_Framework_TestCase
{
    public function testIsMultipleOf()
    {
        $prob001 = new Prob001(range(1,999),array(3,5));
        $this->assertTrue($prob001->isMultipleOf(6,3));
        $this->assertFalse($prob001->isMultipleOf(6,4));
    }

    public function testSumMultiples()
    {
      $prob001 = new Prob001(range(1,999),array(3,5));
      $this->assertEquals(233168,$prob001->sum);
    }
  }
/*
Multiples of 3 and 5
Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
