var min = function(list){
    let sorted = list.sort(function(a, b) {
        return a - b;
    });
    return sorted[0]
}
  
var max = function(list){
    let sorted = list.sort(function(a, b) {
        return a - b;
    });
    return sorted[sorted.length-1]
}