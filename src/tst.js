// 1. Find the frist digit that is smaller than the digit before. Search from RIGHT TO LEFT;
// This step allows us to find a point where we can swap items and the number will become larger.
// If we swap "little digit" with "big digit" the number increases. 49 -> 94, 16 -> 61, 24 -> 42
// 12345 -> 4, 123450 -> 4, 12344 -> 3, 1203450 -> 4, 90822 -> 0, 321321 ->1
// 2. Find the SMALLEST digit after what we just found that is LARGER. Search from LEFT TO RIGHT;
// Here we are trying to get not just a larger number, but the smallest among them.
// 12345 -> 5, 123450 -> 5, 12344 -> 4, 1203450 -> 5, 90822 -> 2, 321321 -> 2
// 3. Swap them;
// 4. Sort the digits after the one that is on the left now. (if there are)
// That'self explanatory. Number from 0 to 9 are less than from 9 to 0.
// 12345 -> swap 4 and 5 = 12354,
// 123450 -> swap 4 and 5 = 123540 -> sort the tail -> 123504,
// 12344 -> swap 3 and 4 = 123434,
// 1203450 -> swap 4 and 5 = 1203540 -> sort the tail -> 1203504,
// 90822 -> swap 0 and 2 = 92802 -> sort the tail -> 92028
// 321321 -> swap 1 and 2 - 322311 -> sort the tail -> 322113

// function getNearestBigger(number) {
//   function convertNumberToArray(num) {
//     const array = [];

//     function convert(n) {
//       if (n <= 9 && n >= -9) {
//         array.push(n);
//         return;
//       }

//       const lastDigit = n % 10;
//       const remainingDigits = Math.floor(n / 10);
//       array.push(lastDigit);

//       convert(remainingDigits);
//     }

//     convert(num);

//     return array.reverse();
//   }

//   const swap = (prison, innocentIndexOUT, prisonerIndexIN) => {
//     const vehicle = prison[innocentIndexOUT];
//     const copyArr = prison;
//     copyArr[innocentIndexOUT] = prison[prisonerIndexIN];
//     copyArr[prisonerIndexIN] = vehicle;
//     return innocentIndexOUT;
//   };
//   function getFirstDescending(array) {
//     const maxIndex = array.length - 1;

//     for (let i = 0; i <= maxIndex; i += 1) {
//       const lastItemIndex = maxIndex - i;
//       const firstItemIndex = lastItemIndex - 1;

//       const lastItem = array[lastItemIndex];
//       const firstItem = array[firstItemIndex];

//       if (firstItem < lastItem)
//         return { value: firstItem, index: firstItemIndex };
//     }
//     return false;
//   }
//   function getSmallestAscending(theLittle, array) {
//     const maxIndex = array.length - 1;

//     const littleIndex = theLittle.index;
//     const littleValue = theLittle.value;
//     const rightSideDigits = [];

//     for (let i = littleIndex + 1; i <= maxIndex; i += 1) {
//       if (array[i] > littleValue)
//         rightSideDigits.push({ value: array[i], index: i });
//     }

//     rightSideDigits.sort((a, b) => Number(a.value) - Number(b.value));

//     // console.log(rightSideDigits);

//     return rightSideDigits[0];
//   }
//   function sortTail(array, tailStartIndex) {
//     // let copyArr = array;
//     console.log(array);
//     const tail = array.splice(tailStartIndex);
//     tail.sort((a, b) => a - b);
//     tail.map((el) => array.push(el));
//     console.log(array);
//   }

//   const arr = convertNumberToArray(number);

//   if (!getFirstDescending(arr)) return number;

//   const firstDescendingOBJ = getFirstDescending(arr);
//   const smallestAscendingOBJ = getSmallestAscending(firstDescendingOBJ, arr);

//   const tailStartIndex =
//     swap(arr, firstDescendingOBJ.index, smallestAscendingOBJ.index) + 1;

//   sortTail(arr, tailStartIndex);

//   return Number(arr.join(''));

// console.log(tailStartIndex, arr);
// console.log(arr, firstDescendingOBJ, smallestAscendingOBJ);

// const smollestAmongLargestAfterLittle = getSmallestAfterLittle(
//   firstLittleNumber,
//   arr
// );

// function swap(prison, innocent, prisoner) {
//   const vehicle = prison[innocent];
//   const copyArr = prison;
//   copyArr[innocent] = prison[prisoner];
//   copyArr[prisoner] = vehicle;
//   return prison;
// }

// swap(arr, firstLittleNumber[1], smollestAmongLargestAfterLittle);
// return arr;
// console.log(getFirstLittle(arr));
// return nm;
// }

// console.log(getNearestBigger(12345));
// console.log(getNearestBigger(123450));
// console.log(getNearestBigger(12344));
// console.log(getNearestBigger(123440));
// console.log(getNearestBigger(1203450));
// console.log(getNearestBigger(90822));
// console.log(getNearestBigger(321321));

/* 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
