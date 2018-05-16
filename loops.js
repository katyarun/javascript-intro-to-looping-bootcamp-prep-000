function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

// var arr = [];
// forLoop(arr);
// console.log(arr);
// console.log("hey");

function whileLoop(number) {
  while (number > 0) {
    console.log(number--);
  }
  return "done";
}

// whileLoop(10);