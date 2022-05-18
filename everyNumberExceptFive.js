function dontGiveMeFive(start, end){
    let result = 0;
    for(let i = start; i <= end; i++) {
      if(i % 5 !== 0 || i === 10) {
        console.log(i)
        result++
      }
    }
    return result;
}