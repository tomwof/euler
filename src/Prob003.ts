/*
Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/
class Prob003
{ 
  
  factorsList: number[];
  primesList: number[];
  highestPrime: number;

  constructor(n: number)
  {
 
    this.factorsList = this.findFactors(n);
    this.primesList = this.findPrimes(this.factorsList);
    this.highestPrime = Math.max(...this.primesList);
  }
 
  findFactors(n: number)
  {
    let list: number[] = [1,n];

    for(let i = 2; i <= (n/2); i++)
    {
      if(n % i == 0)
      {
        list.push(i);
        console.log("factor: " + i);
        if(i > Math.sqrt(n))
        {
          list.pop();
          return list;
        }
      }
    }
    return list;
  }

  isPrime(n: number)
  { 
    if(n <= 1)
      return false;

    let test: number[] = this.findFactors(n);
    if(test.length == 2)
    {
      console.log("prime: " + n);
      return true;    
    }
  }

  findPrimes(factorsList: number[])
  {
    let list: number[] = [];
    for(let i of factorsList)
      if(this.isPrime(i))
        list.push(i);
    return list;
  }
}

var test: Prob003;
test = new Prob003(600851475143);
console.log("factors: " + test.factorsList.toString());
console.log("primes: " + test.primesList.toString());

if(test.highestPrime == 6857)
  console.log("PASS: " + test.highestPrime);
