var password;
var hours = new Date().getHours()
var login = prompt("input login", "");

if (login === "User") {
    password = prompt("input password", "");
    if (password === "UserPass") {
        if (hours < 20) {
            alert ("Good day, dear User!");
        }
        if (hours > 20) {
            alert ("Good evening, dear User!");
        }
    } else if (password === null) { 
        alert( "Canceled" );
    } else {
        alert( "Wrong password");
    }
} else if (login === 'Admin') {
    password = prompt("input password", "");
    if (password === "RootPass") {
        if (hours < 20) {
            alert ("Good day, dear Admin!");
        }
        if (hours > 20) {
            alert ("Good evening, dear Admin!");
        }
    } else if (password === null) { 
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (login === null) {
    alert("Canceled");
} else if (login.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
} else {
    alert("I don’t know you");
}