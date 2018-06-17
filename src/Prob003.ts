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
    this.factorsList = this.findFactors(parameter);
    this.primesList = this.findPrimes(this.factorsList);
    this.highestPrime = this.getHighestNumber(this.primesList);
  }

  getHighestNumber(parameter: number[])
  {
    return Math.max(...parameter);
  }
  
  findPrimes(parameter: number[])
  {
    let list: number[] = [];
    for(let item of parameter)
      if(this.isPrime(item))
        list.push(item);
    return list;
  }

  isPrime(parameter:number)
  {
    let list: number[] = this.findFactors(parameter);
    if(list[0] == parameter && list[1] == 1)
      return true;
  }

  findFactors(parameter:number)
  {
    let list: number[] = [];
    for (let i = parameter; i >= 0; i--)
      if(parameter % i == 0)
        list.push(i);
    return list;
  }
}

var test: Prob003;
test = new Prob003(13195);
console.log("factors: " + test.factorsList.toString());
console.log("primes: " + test.primesList.toString());

if(test.highestPrime == 29)
  console.log("PASS: " + test.highestPrime);