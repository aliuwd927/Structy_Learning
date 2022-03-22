/*
Prompt:

Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

A prime number is a number that is only divisible two distinct numbers: 1 and itself.

For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

You can assume that the input number is a positive integer.
isPrime(1); False

isPrime(2); True

isPrime(3); True

isPrime(4); False

isPrime(5); True

isPrime(6); False

isPrime(7); True

isPrime(9); False




My Solution:

const isPrime = (n) => {
  if(n%2 !== 0){
    return false
  }else{
    return true;
  }
};



















 
 */
