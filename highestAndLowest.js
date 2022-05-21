function highAndLow(numbers){
    let nums = numbers.split(' ');
    let sorted = nums.sort(function (a, b) {
      return Number(a) - Number(b);
    });
    let solution = `${sorted[sorted.length-1]} ${sorted[0]}`
    return solution;
}