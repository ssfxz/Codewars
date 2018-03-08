// https://www.codewars.com/kata/two-to-one/

function longest(s1, s2) {
  let alphabet = Array(26).fill(false);
  let string = s1.concat(s2);
  for (let i = 0; i < string.length; ++i) {
    let letter = string.charCodeAt(i) - 'a'.charCodeAt(0);
    alphabet[letter] = true;
  }

  let result = "";
  for (let i = 0; i < alphabet.length; ++i) {
    if (alphabet[i]) {
      result += (String.fromCharCode('a'.charCodeAt(0) + i));
    }
  }
  return result;
}
