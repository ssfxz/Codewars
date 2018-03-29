// https://www.codewars.com/kata/find-the-capitals-1

const isCapital = c => c === c.toUpperCase();
const capitals = word => word.split('').map((c, i) => {return isCapital(c) ? i : -1}).filter(x => x != -1);