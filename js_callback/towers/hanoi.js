class Game {
  constructor() {
    this.stack = [
      [],
      [],
      []
    ];
  }

  promptMove() {
    // Prints the stacks
    // Asks the user where they want to move a disk to/from
    // callback(startTowerIdx, endTowerIdx)
  }

  printTowers() {
    console.log(this.stack[0]);
    console.log(this.stack[1]);
    console.log(this.stack[2]);
  }

  run() {
    // display towers
    // User input start tower and end tower
    // Verify that choices are valid for move
    // Move disk
    // Check win condition
    // Repeat if not won
  }
}
