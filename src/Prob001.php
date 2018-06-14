<?php
/*
Multiples of 3 and 5
Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

namespace tomwof\euler;
class Prob001 {
    private $a;
    private $n;
    private $multiples;
    public $sum;

    public function __construct($a,$n)
    { // n = divisor & a = dividend
      $this->a = $a;
      $this->n = $n;
      $this->multiples = [];
      $this->sum = 0;
      $this->findMultiples();
      $this->sumMultiples();
    }

    public function isMultipleOf($a,$n)
    {
        if($a % $n == 0)
          return true;
        else
          return false;
    }

    public function findMultiples()
    {
        foreach ($this->a as $a)
          foreach ($this->n as $n)
            if ($this->isMultipleOf($a,$n))
              array_push($this->multiples,$a);
    }

    public function sumMultiples()
    {
      $this->sum = array_sum(array_unique($this->multiples));
    }
}
