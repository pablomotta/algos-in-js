const numberOfSteps = (num) => {
    let steps = 0;
    while (num > 0) {
      if (num % 2 === 1) {
        num = num - 1;
        steps = steps + 1;
      } else if (num % 2 === 0) {
        num = num / 2;
        steps = steps + 1;
      }
    }
    return steps;    
}

console.log(numberOfSteps(14))