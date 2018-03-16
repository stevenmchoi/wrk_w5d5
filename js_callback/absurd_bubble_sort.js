const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback){

  function outerBubbleSortLoop(madeAnySwaps){
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}

function askGreater(el1, el2, callback){
  reader.question(`Is ${el1} greater than ${el2}? ('y', 'n'): `,
    (answer) => {
      if (answer === "y") {
        callback(true);
      } else if (answer === "n") {
        callback(false);
      } else {
        console.log("Wrong input!\n");
        askGreater(el1, el2, callback);
      }

      // reader.close();
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askGreater(arr[i], arr[i+1], (isGreaterThan) => {
      if (isGreaterThan) {
        let holder = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = holder;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

// function dummyOuterBubbleSortLoop(madeAnySwaps) {
//   console.log("In outer bubble sort");
// }

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// innerBubbleSortLoop([2,7,1,9,4], 0, false, dummyOuterBubbleSortLoop);

// askGreater("Steven", "Michael", (answer) => {
//   if (answer) {
//     console.log("That's right!");
//   } else {
//     console.log("Liar!");
//   }
// });
