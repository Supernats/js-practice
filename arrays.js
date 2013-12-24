var arr = [1,2,1,3,3];

var removeDups = function (array) {
  var uniq_arr = [];
  for (var i = 0; i < array.length; i++) {
    if (uniq_arr.indexOf(array[i]) === -1) {
      uniq_arr.push(array[i]);
    }
  }
  return uniq_arr;
};

// console.log(removeDups(arr));

var twoSum = function (array) {
  var returnArray = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] + array[i] === 0) {
        returnArray.push([i, j]);
      }
    }
  }
  return returnArray;
};

// console.log(twoSum([-1, 0, 2, -2, 1]))

var rows = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
  ];

var myTranspose = function (matrix) {
  var transposed = [[],[],[]];
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      transposed[j].push(matrix[i][j]);
    }
  }
  return transposed;
}

console.log(myTranspose(rows));

