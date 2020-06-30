let input = process.argv.slice(2);
// input X 1000 to equal seconds
let timeInput = input.map(x => x * 1000)
const beep = (nums) => {
  for (const num of nums) {
// if No numbers are provided || An input is a negative number || An input is not a number
    if(num === null || num < 0 || isNaN(num)) {
      process.exit();
    }
    setTimeout(() => process.stdout.write('\x07'), num);
  }
};

beep(timeInput);