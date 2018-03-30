// https://www.codewars.com/kata/which-are-in

function inArray(array1,array2){
    return array1.filter(a1 => array2.some(a2 => a2.includes(a1))).sort();
}