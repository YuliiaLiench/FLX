function isBigger(a, b) {
  var result = a > b;
  return result;
}  

function isSmaller (a, b) {
  return !isBigger(a, b);
}

isSmaller(5, -1);