var bubbleSort = function (array) {
  var isSorted = false;
  while (isSorted === false) {
    isSorted = true;
    for (var i = 0; i < array.length - 1; i++) {
      for (var j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          isSorted = false;
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
  }
  return array
};


// console.log(bubbleSort([4,5,7,8,1,2,0,5]))


var subStrings = function (string) {
  var subs = [];
  for (i = 0; i < string.length; i++) {
    for (j = i + 1; j < string.length + 1; j++) {
      subs.push(string.substring(i, j));
    }
  }
  return subs;
};

// console.log(subStrings("catmeow"))



