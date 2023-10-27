function checkNestingLevel(arr) {
    let level = 0;
    while (Array.isArray(arr)) {
      level++;
      arr = arr.flat();
    }
    return level;
  }
  
  console.log(checkNestingLevel([1, [2, [3, [4]], 5], 6]));
  