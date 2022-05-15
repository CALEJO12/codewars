function invert(array) {
    return array.map( num => {
      if(num >= 0) {
        num = -Math.abs(num)
      } else {
        num = Math.abs(num)
      }
      return num
    })
}