
var addOne = function (constantNumber) {
	var addedOne = constantNumber + 1;
  return addedOne;
};


var timesTwo = function (constantNumber) {
	var multTwo = constantNumber = constantNumber * 2
  return multTwo;
};


var incrementArray = function (constantArray) {
 var incArray =  constantArray.map(function(x, i) {
    return x+1;
  })
  return incArray
}

var addNumberArray = function (array, number) {
  var pureArr = array.map(function(x, i){
    return x;
  })
  pureArr.push(number);
  return pureArr;
};

var incrementObject = function (object) {
  var newObject = {};
  Object.keys(object).forEach(function(x) {
    newObject[x] = object[x] + 1;
  });
  return newObject;
};

// leave me alone :) :) :) <3 <3 <3
var constantNumber = 5;
var constantArray = [5, 7, 23, 4];
var constantObject = {
  "a": 5,
  "b": 2,
  "c": 8
};
// leave me alone :) :) :) <3 <3 <3
