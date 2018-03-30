// https://www.codewars.com/kata/fixed-length-palindromes

function palin(a,b){
    const half = Math.pow(10, Math.floor((a - 1) / 2)) + b - 1 + '';
    return parseInt(half + half.split('').reverse().join('').slice(a % 2));
};