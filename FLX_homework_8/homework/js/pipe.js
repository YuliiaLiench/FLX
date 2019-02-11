function addOne(x) {
    return x + 1;
  }

function pipe(a, func) {
    var result = a;
    for (var i = 1; i < arguments.length; i++) {
        result = func(result);
    }
    return result;
}
  
pipe(1, addOne);
pipe(1, addOne, addOne);