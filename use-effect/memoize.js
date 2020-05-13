const memo = {};

const sum = (x, y) => {
  if (memo[`${x},${y}`]) {
    console.log('seen it before!!');
    return memo[`${x},${y}`];
  }
  const result = x + y;

  console.log('did not see it before');
  memo[`${x},${y}`] = result;
  return result;
};

console.log(sum(2, 2));
console.log(sum(2, 2));
console.log(sum(2, 3));
console.log(sum(2, 3));