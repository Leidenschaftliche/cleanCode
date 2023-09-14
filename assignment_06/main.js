/**
 *
 * @param {int} n
 * @return {Array}
 */
function primesUp(n) {
  const primes = [2, 3];
  /**
   * @param {Array} aPrime
   * @return {boolean}
   */
  function isRealyPrime(aPrime) {
    if (!(Number.isInteger(aPrime) && aPrime > 1)) {
      return false;
    }
    for (i = 1; i < primes.length; ++i) {
      if (aPrime % primes[i] == 0) {
        return false;
      }
    }
    return true;
  }
  let lastprime = 5;
  while (lastprime <= n) {
    if (isRealyPrime(lastprime)) {
      primes.push(lastprime);
    }
    lastprime += 2;
  }
  return primes;
}

/**
 *
 * @param {int} n
 * @return {boolean}
 */
function isPrime(n) {
  primesUpN=primesUp(n);
  return primesUpN[primesUpN.length-1]==n;
}

console.log(isPrime(1117));
