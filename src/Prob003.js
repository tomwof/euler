/*
Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/
var Prob003 = /** @class */ (function () {
    function Prob003(parameter) {
        var factorsList = this.getFactorsOf(parameter);
        var primesList = this.findPrimes(factorsList);
        var highestPrime = this.getHighestNumber(primesList);
        console.log("Highest Prime" + highestPrime);
    }
    Prob003.prototype.getHighestNumber = function (parameter) {
        return Math.max.apply(Math, parameter);
    };
    Prob003.prototype.findPrimes = function (parameter) {
        var list = [];
        for (var _i = 0, parameter_1 = parameter; _i < parameter_1.length; _i++) {
            var item = parameter_1[_i];
            if (this.isPrime(item)) {
                list.push(item);
                console.log("Primes:" + list.toString());
            }
        }
        return list;
    };
    Prob003.prototype.isPrime = function (parameter) {
        var list = this.getFactorsOf(parameter);
        if (list[0] == parameter && list[1] == 1)
            return true;
    };
    Prob003.prototype.getFactorsOf = function (parameter) {
        var list = [];
        for (var i = parameter; i >= 0; i--) {
            console.log("Testing:" + i);
            if (parameter % i == 0) {
                list.push(i);
                console.log("Found Factor:" + i);
            }
        }
        return list;
    };
    return Prob003;
}());
var test = new Prob003(13195);
