const arr = [14, 18, 16, 20, 25];

// filter return item on basis of whether u returned true or false from the condition
// No need to use another array
const result = arr.filter((item, index) => {
  if (item >= 18) {
    return true;
  }
});

console.log(result);

// This works because "value > 0" is boolean
function isPositive(value) {
  return value > 0;
}

const result1 = arr.filter(isPositive);
console.log(result1);
