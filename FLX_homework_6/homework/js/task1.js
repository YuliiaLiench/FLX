function discriminant(a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
}

function getX(a, b, D, sign) {
    var multiplier = sign ? 1 : -1;

   return (-b + multiplier * Math.sqrt(D)) / (2 * a);
}

function isValidNumber (n) {
    return !isNaN(n) && isFinite(n);
}

function validate(a, b, c) {
    if (!isValidNumber(a)) {
        return false;
    }
    if (!isValidNumber(b)) {
        return false;
    }
    if (!isValidNumber(c)) {
        return false;
    }
    if (a === 0) {
        return false;
    }            
    return true;   
}  

function quadraticEquation(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    
    if (!validate(a, b, c)){
        return "Invalid input data";
    }
    var d = discriminant(a, b, c);
    
    if (d < 0) {
        return 'no solution';
    } else if (d === 0) {
        var x = getX(a, b, d) 
        return "x = " + x;
    } else {      
        var x1 = getX(a, b, d, true);
        var x2 = getX(a, b, d, false);
        return "x1 = " + x1 + " and x2 = " + x2;
    }        
}

var a = prompt("a =");
var b = prompt("b =");
var c = prompt("c =");
var result = quadraticEquation(a, b, c);
alert (result);
