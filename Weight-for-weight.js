function orderWeight(str) {
    const words = str.split(' ').filter(s => s.length != 0);
    const value = word => word.split('').map(c => c.charCodeAt(0) - '0'.charCodeAt(0)).reduce((a,b) => a + b);
    
    let wordsSet = new Set();
    words.map(word => wordsSet.add({w:word, v:value(word)}));
    wordsSet[Symbol.iterator] = function* () {
        yield* [...this.values()].sort((a, b) => a.v - b.v || a.w.localeCompare(b.w));
    }
    
    return [...wordsSet].map(a => a.w).join(' ');
}

