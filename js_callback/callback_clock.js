class Clock {
  constructor() {
    // 1. Create a Date object.
    let currentDate = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.currentHour = currentDate.getHours();
    this.currentMinute = currentDate.getMinutes();
    this.currentSecond = currentDate.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.currentHour}:${this.currentMinute}:${this.currentSecond}`);
  }

  _tick() {
    let clock = this;
    // 1. Increment the time by one second.
    // 2. Call printTime.
    if (clock.currentSecond === 59) {
      clock.currentSecond = 0;

      if (clock.currentMinute === 59) {
        clock.currentMinute = 0;

        if (clock.currentHour === 23) {
          clock.currentHour = 0;
        } else {
          clock.currentHour++;
        }

      } else {
        clock.currentMinute++;
      }

    } else {
      clock.currentSecond++;
    }

    clock.printTime();
  }
}

const clock = new Clock();

// setTimeout(clock.printTime, 0);
