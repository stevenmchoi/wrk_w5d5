const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  const asking = (answer) => {
    sum += parseInt(answer);
    console.log("jwoeijf");
  };

  for (let step = 0; step < numsLeft; step++) {
    reader.question("\nInput Please: ", asking);

    console.log("\nThis is your new sum: ");
    console.log(sum);
  }

  // reader.close();

  completionCallback(sum);
}

addNumbers(0, 3, (total) => {
  console.log("\nThis is your total: " + total);
});
