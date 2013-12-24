var timesTwo = function (array) {
  var timesTwoArr = [];
  for (i = 0; i < array.length; i++) {
    timesTwoArr.push(array[i]*2);
  }
  return timesTwoArr;
};

// console.log(timesTwo([1,2,3]));

var myEach = function (array, fn) {
  for (i = 0; i < array.length; i++) {
    fn(array[i]);
  }
  return array;
};

var someFn = function(el) {
  console.log(el);
};

// myEach(["ruby", "javascript", "haskell"], someFn);

var myMap = function (array, fn) {
  var mappedArray = [];
  var functionToBeRunForEachElement = function(el){
    mappedArray.push(fn(el));
  };

  myEach(array, functionToBeRunForEachElement);
  return mappedArray;
};


mappedArray = myMap([1,2,3], function(el){
    return el * 2;
  }
)
// console.log(mappedArray);

var myInject = function (array, fn) {
  var injected = array[0];
  var functionToBeRunForEachElement = function(el, accum) {
    injected = fn(injected, el);
  };
  myEach(array.slice(1), functionToBeRunForEachElement);
  return injected;
}

var stuff = myInject([1,2,3], function(sum, accum) {
  return sum + accum;
});

console.log(stuff);