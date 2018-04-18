// https://www.codewars.com/kata/valid-braces/

function validBraces(braces) {
    let stack = [];
    let lookupL = ['(', '[', '{'];
    let lookupR = [')', ']', '}'];
    for (let c of braces.split('')) {
        if (lookupL.includes(c)) {
            stack.push(c);
        }
        else if (lookupR.includes(c)) {
            let last = stack.pop();
            if (lookupL.indexOf(last) != lookupR.indexOf(c)) {
                return false;
            }
        }
    }

    return stack.length == 0;
}
