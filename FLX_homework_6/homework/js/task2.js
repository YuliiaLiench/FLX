function calculateDiscount(price, percentDiscount){
    price = Number(price);
    percentDiscount = Number(percentDiscount);
    if (!validate(price, percentDiscount)) {
        return "Invalid input data";
    }
    var discount = price * percentDiscount / 100;
    discount = + discount.toFixed(2);
    var priceWithDiscount = price - discount;
    return "Price without discount: " + price + "\n\r Discount: " + percentDiscount + "%" + 
    "\n\r Price with discount: " + priceWithDiscount + "\n\r Saved: " + discount;
}

function isValidNumber (n) {
    return !isNaN(n) && isFinite(n);
}

function validate(price, percentDiscount) {
    if (!isValidNumber(price)) {
        return false;
    }
    if (!isValidNumber(percentDiscount)) {
        return false;
    }
    if (price < 0 || price > 9999999) {
        return false;
    }
    if (percentDiscount < 0 || percentDiscount > 99) {
        return false;
    }
    return true; 
}

var price = prompt("input amount of money");
var percentDiscount = prompt("input discount");
var result = calculateDiscount(price, percentDiscount);
alert (result);