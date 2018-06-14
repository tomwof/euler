<?php
/*
Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

namespace tomwof\euler;
class Prob002 {
    private $fibonacci;
    public $sum;

    public function __construct($value)
    {
      $this->fibonacci = $this->getFibonacciValuesBelow($value);
      $this->sum = array_sum($this->findEvenValues($this->fibonacci));
    }

    public function incrementFibonacci($fib)
    {
      array_push($fib, ($fib[(count($fib) - 2)] + $fib[(count($fib) - 1)]));
      return $fib;
    }
    public function getFibonacciValuesBelow($lim)
    {
      $fib = [0,1];
      while(end($fib) < $lim)
        $fib = $this->incrementFibonacci($fib);

      if (end($fib) > $lim)
        array_pop($fib);

      return $fib;
    }

    public function findEvenValues($fib)
    {
      $values = [];
      foreach ($fib as $value)
      {
        if($this->isEven($value))
        {
          array_push($values, $value);
        }
      }
      return $values;
    }

    public function isEven($val)
    {
      if($val % 2 == 0)
        return true;
      else
        return false;
    }
}
