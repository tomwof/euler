/*
Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/
var Prob003 = /** @class */ (function () {
    function Prob003(n) {
        this.factorsList = this.findFactors(n);
        this.primesList = this.findPrimes(this.factorsList);
        this.highestPrime = Math.max.apply(Math, this.primesList);
    }
    Prob003.prototype.findFactors = function (n) {
        var list = [1, n];
        for (var i = 2; i <= (n / 2); i++) {
            if (n % i == 0) {
                list.push(i);
                console.log("factor: " + i);
                if (i > Math.sqrt(n)) {
                    list.pop();
                    return list;
                }
            }
        }
        return list;
    };
    Prob003.prototype.isPrime = function (n) {
        if (n <= 1)
            return false;
        var test = this.findFactors(n);
        if (test.length == 2) {
            console.log("prime: " + n);
            return true;
        }
    };
    Prob003.prototype.findPrimes = function (factorsList) {
        var list = [];
        for (var _i = 0, factorsList_1 = factorsList; _i < factorsList_1.length; _i++) {
            var i = factorsList_1[_i];
            if (this.isPrime(i))
                list.push(i);
        }
        return list;
    };
    return Prob003;
}());
var test;
test = new Prob003(600851475143);
console.log("factors: " + test.factorsList.toString());
console.log("primes: " + test.primesList.toString());
if (test.highestPrime == 6857)
    console.log("PASS: " + test.highestPrime);
