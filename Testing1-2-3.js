var number=function(array){
    let newArray = []
    for(let i = 1; i < array.length + 1; i++) {
      newArray.push(`${i}: ${array[i-1]}`)
    }
    return newArray
  }