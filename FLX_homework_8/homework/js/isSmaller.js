function isBigger(a, b) {
  var result = a > b;
  return result;
}  

function isSmaller (a, b) {
  return isBigger(b, a);
}

isSmaller(5, -1);