function getSum( a,b ){
    let sum = 0
    const smallInt = Math.min(a, b);
    console.log(`small: ${smallInt}`)
    const largeInt = Math.max(a, b);
    console.log(`large: ${largeInt}`)
    for(let i = smallInt; i <= largeInt; i++) {
      sum += i;
    }
    return sum
}