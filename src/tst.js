function getNearestBigger(number) {
  const arr = [];

  for (let i = 0; i <= number.toString().length - 1; i += 1) {
    arr[i] = number.toString()[i];
  }

  function getPivot() {
    for (let i = 0; i <= arr.length - 1; i += 1) {
      const indexLeft = arr.length - 1 - i - 1;
      const indexRight = arr.length - 1 - i;

      const numLeft = arr[indexLeft];
      const numRight = arr[indexRight];

      if (numLeft < numRight) return [numLeft, indexLeft];
    }
    return undefined;
  }

  const [pivot, pivotIndex] = [...getPivot()];

  return [pivot, pivotIndex];
}

console.log(getNearestBigger(12345));
console.log(getNearestBigger(123450));
console.log(getNearestBigger(12344));
console.log(getNearestBigger(123440));
console.log(getNearestBigger(1203450));
console.log(getNearestBigger(90822));
console.log(getNearestBigger(321321));

/* 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */

// if (numLeft < numRight && numRight !== 0) {
//   arr[leftIndex] = numRight;
//   arr[rightIndex] = numLeft;
//   return;
// }
