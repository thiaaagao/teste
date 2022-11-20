//primeNumber(10);
//const isPrimeNumber = primeNumber(1);
//console.log(isPrimeNumber);

function primeNumber(number) {
   if(!number || number < 2){
    return false;
  }
  let isPrimeNumber = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrimeNumber = false;
      break;
    }
  }
  return isPrimeNumber;
}
module.exports = {
    primeNumber
}  

/* ISMAEL
const primsNumbersBetween0AndN = Array.from({length: 30}, (_, index) => ({ isPrimeNumber: primeNumber(index), number: index}))
.filter(({isPrimeNumber}) => isPrimeNumber)


console.log(primsNumbersBetween0AndN) */
// return false;

//A prime number is a natural number greater than 1 that is only
//divisible by 1 and itself. 2, 3, 5, 7, 11, 13 etc are prime numbers. 4 for example,
//is not a prime number since 4 is divisible by 2. 4 / 2 = 2.
//Bonus points for a more functional approach in your code. For example, try to use array functions such as map,
//filter or reduce.
