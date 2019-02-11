function getMin() {
    var result = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (result > arguments[i]) {
            result = arguments[i];
        }
    }
    return result;
}

getMin(3, 0, -3); 