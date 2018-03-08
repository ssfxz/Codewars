function solve(arr){  
  return arr.map(str => {
    return str.toLowerCase().split("").reduce((count, char, index) => {
      if (char.charCodeAt(0) - 97 == index) {
        return count + 1;
      }
      return count;
    }, 0);
  });
};

