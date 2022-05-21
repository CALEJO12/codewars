function find_average(array) {
  let average = 0;
  if (array.length === 0) {
    return average;
  } else {
    for (let i = 0; i < array.length; i++) {
      average += array[i];
    }
    return average / array.length;
  }
}
