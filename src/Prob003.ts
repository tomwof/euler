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

  constructor(parameter: number)
  {
    this.factorsList = this.getFactors(parameter);
    this.primesList = this.findPrimes(this.factorsList);
    this.highestPrime = this.getHighestNumber(this.primesList);
    console.log("Highest Prime: " + this.highestPrime);
  }

  getHighestNumber(parameter: number[])
  {
    return Math.max(...parameter);
  }
  findPrimes(parameter: number[])
  {
    let list: number[] = [];
    for(var item of parameter)
      if(this.isPrime(item))
      {
      list.push(item);
      console.log("Primes: " + list.toString());
      }
    return list;
  }

  isPrime(parameter:number)
  {
    let list: number[] = this.getFactors(parameter);
    if(list[0] == parameter && list[1] == 1)
    return true;
  }

  getFactors(parameter:number)
  {
    let list: number[] = [];
    for (let i = parameter; i >= 0; i--)
    {
    console.log("Testing: " + i);
    if(parameter % i == 0)
      {
      list.push(i);
      console.log("Factor Found: " + i);
      }
    }
    return list;
  }
}
let test: Prob003;
test = new Prob003(13195);