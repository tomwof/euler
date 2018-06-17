/*
Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/
var Prob003 = /** @class */ (function () {
    function Prob003(parameter) {
        this.factorsList = this.findFactors(parameter);
        this.primesList = this.findPrimes(this.factorsList);
        this.highestPrime = Math.max.apply(Math, this.primesList);
    }
    Prob003.prototype.findFactors = function (parameter) {
        var list = [];
        for (var i = parameter; i >= 0; i--)
            if (parameter % i == 0)
                list.push(i);
        return list;
    };
    Prob003.prototype.isPrime = function (parameter) {
        var list = this.findFactors(parameter);
        if (list[0] == parameter && list[1] == 1)
            return true;
    };
    Prob003.prototype.findPrimes = function (parameter) {
        var list = [];
        for (var _i = 0, parameter_1 = parameter; _i < parameter_1.length; _i++) {
            var item = parameter_1[_i];
            if (this.isPrime(item))
                list.push(item);
        }
        return list;
    };
    return Prob003;
}());
var test;
test = new Prob003(13195);
console.log("factors: " + test.factorsList.toString());
console.log("primes: " + test.primesList.toString());
if (test.highestPrime == 29)
    console.log("PASS: " + test.highestPrime);
