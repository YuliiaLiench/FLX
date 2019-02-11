function reverseNumber(a) {
    var p = 0;
    a = String(a);
    var arr = a.split('');
    var newArr = [];
    if (arr[0] === '-') {
        p = 1;
        newArr.push('-')
    }
    for (var i = arr.length-1; i >= p; i--) {
        
        newArr.push(arr[i]);
    }
    var str = newArr.join('');
    str = Number(str);
    return str;
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);