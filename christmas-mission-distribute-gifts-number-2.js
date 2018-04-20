// https://www.codewars.com/kata/christmas-mission-distribute-gifts-number-2/

function distributeGifts(wishes) {
    let min = wishes.map(wish => wish[0]).reduce((a, b) => a + b);
    let delta = wishes.map(wish => wish[1] - wish[0]).sort((a, b) => a - b).filter((a, i) => i < wishes.length / 2).reduce((a, b) => a + b);
    return min + delta;
}