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

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.lenght--;
    console.log(array);
  } while (array.lenght > 0 && maybeTrue())
  return array;
}

let arr = [1, 2, 4, 5, 6];
// console.log(arr);
// console.log(arr.length);
// arr.length--;
// console.log(arr.length);
// console.log(arr);
doWhileLoop(arr);