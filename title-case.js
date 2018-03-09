// https://www.codewars.com/kata/title-case/

function titleCase(title, minorWords) {
  let minors = minorWords !== undefined ? minorWords.split(' ')
    .map(minor => minor.toLowerCase()) : [];
  let string = title.toLowerCase()
    .split(' ')
    .map(word => minors.includes(word) ? word : firstUpperCase(word))
    .join(' ');
  return firstUpperCase(string);
}

function firstUpperCase(str) {
  return str.replace(/^[a-z]/, (L) => L.toUpperCase());
}

