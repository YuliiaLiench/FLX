function isInteger(a) {
    var b = a % 1;
    if (b === 0) {
        return true;
    }
    return false;
}

isInteger(5);
isInteger(5.1); 