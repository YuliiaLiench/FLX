function findTypes() {
    var addType;
    var arrType = [];
    
    for (var i = 0; i < arguments.length; i++) {
        addType = typeof arguments[i];
        arrType.push(addType);
    }
    
    return arrType;
}

findTypes('number');
findTypes(null, 5, "hello");

function executeforEach(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

executeforEach([1,2,3], function(el) { 
  console.log(el) 
}); 

function mapArray(arr, func) {
    var newArr = [];
    
    executeforEach(arr, function(el) { 
        newArr.push(func(el));
    });
    
    return newArr;
}

mapArray([2, 5, 8], function(el) { 
  return el + 3 
});

function filterArray(arr, func) {
  var newArr = [];  
  
  executeforEach(arr, function(el) {
    var result = func(el);
    
    if (result === true) {
        newArr.push(el);
    } 
  });
  
  return newArr;
}

filterArray([2, 5, 8], function(el) { 
  return el > 3 
});

function getAmountOfAdultPeople(arr) {
  
  var newArr = filterArray(arr, function(el) {
    return el.age > 18    
  })
  return newArr.length;
}
  
var data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];
  
getAmountOfAdultPeople(data);

function getGreenAdultBananaLovers(arr) {
  var newArr = filterArray(arr, function(el) {
    return (el.age > 18 && el.favoriteFruit === "banana" && el.eyeColor === "green");     
  });

  var arrName = mapArray(newArr, function(par) {
    return par.name;
  });

  return arrName;
}

getGreenAdultBananaLovers(data);

function keys(obj) {
  var arrKeys = [];

  for (var key in obj) {
    arrKeys.push(key);
  }

  return arrKeys;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3})

function values(obj) {
  var arrValues = [];
  
  for (var key in obj) {
    arrValues.push(obj[key]);
  }

  return arrValues;
}

values({keyOne: 1, keyTwo: 2, keyThree: 3})

function showFormattedDate(time) {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return "Date: " + time.getDate() + " of " + monthNames[time.getMonth()];
}

showFormattedDate(new Date('2019-01-27T01:10:00'))

function isEvenYear(time) {
  if (time.getFullYear() % 2 === 0) {
    return true;
  }

  return false;
}

isEvenYear(new Date('2019-01-27T01:10:00'))

function isEvenMonth(time) {
  if (time.getMonth() % 2 === 0) {
    return false;
  }
  
  return true;
}

isEvenMonth(new Date('2019-02-27T01:10:00'))