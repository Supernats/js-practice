var range = function(start, end) {
  if (start === end) {
    return [start];
  }
  return[start].concat(range(start + 1, end));
};

// console.log(range(1,5));
var recSum = function(array) {
  if (array.length === 1) {
    return array[0];
  }
  return array[0] + recSum(array.slice(1));
};

// console.log(recSum([1,2,3]));

var exp1 = function(base, power) {
  if (power === 0) {
    return 1;
  } if (power === 1) {
    return base;
  }
  return base * exp1(base, power - 1);
};



var exp2 = function(base, power) {
  if (power === 0) {
    return 1;
  }
  if (power % 2 === 0) {
    return (exp2(base, power/2) * exp2(base, power/2));
  }
  if (power % 2 !== 0) {
    return (base * (exp2(base, (power - 1)/2)) * (exp2(base, (power - 1)/2)));
  }
}


// console.log(exp2(2,3));

var fibonacci = function (num) {
  if (num === 1) {
    return [0];
  }
  if (num === 2) {
    return [0, 1];
  }
  var fibs = fibonacci(num - 1);
  next_fib = fibs.slice(-1)[0] + fibs.slice(-2, -1)[0];
  fibs.push(next_fib);
  return fibs;
};

// console.log(fibonacci(8))


var binarySearch = function (array, target) {
  if (array.length === 1 && array[0] !== target) {
    return null
  }
  var midpoint = (array.length / 2)
  if (target === array[midpoint]){
    return midpoint;
  } else if (target < array[midpoint]) {
    return binarySearch(array.slice(0, midpoint));
  } else if (target > array[midpoint]) {
    return binarySearch(array.slice(midpoint + 1))
  }

};

console.log(binarySearch())







