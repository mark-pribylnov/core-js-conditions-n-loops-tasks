function getMaxNumber(arr) {
  if (arr.length <= 2) return -1;

  // let headIndex = 0;
  // let tailIndex = arr.length - 1;

  // let head = arr[headIndex];
  // let tail = arr[tailIndex];

  // let sum = 0;
  // for (let i = 0; i <= arr.length - 1; i += 1) {
  //   sum += arr[i];
  // }

  function sumAfterIndex(index) {
    let sum = 0;
    for (let i = index + 1; i <= arr.length - 1; i += 1) {
      sum += arr[i];
    }
    return sum;
  }
  function sumBeforeIndex(index) {
    let sum = 0;
    for (let i = 0; i <= index - 1; i += 1) {
      sum += arr[i];
    }
    return sum;
  }

  function compareSums(index) {
    if (sumAfterIndex(index) === sumBeforeIndex(index)) return true;
    return false;
  }

  // console.log(sumAfterIndex(5));
  // console.log(sumBeforeIndex(5));
  // console.log(compareSums(4));

  for (let i = 0; i <= arr.length - 1; i += 1) {
    if (compareSums(i)) return i;
  }
  // if (head < tail) {
  //   headIndex += 1;
  //   head += arr[headIndex];
  // } else if (head > tail) {
  //   tailIndex -= 1;
  //   tail += arr[tailIndex];
  // }
  // if (head === tail) return headIndex + 1;
  // }
  //  && head + tail < sum
  // while (head !== tail && headIndex + tailIndex < arr.length) {
  // increaseHeadOrTail();
  // if (head < tail) {
  //   headIndex += 1;
  //   head += arr[headIndex];
  // } else if (head > tail) {
  //   tailIndex -= 1;
  //   tail += arr[tailIndex];
  // }
  // }
  // console.log(head, tail);

  // if (head === tail) return headIndex + 1;

  return -1;
}

// console.log(getMaxNumber([1, 2, 5, 3, 0])); // 2
// console.log(getMaxNumber([2, 3, 9, 5])); // 2
// console.log(getMaxNumber([1, 2, 3, 4, 5])); // -1
// console.log(getMaxNumber([1, 1])); // -1
// console.log(getMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])); // -1
// console.log(getMaxNumber([])); // -1
console.log(getMaxNumber([9, 2, -2, -7, -8, 2, -1, 6, -11])); // 5

// function getMaxNumber(arr) {
//   if (arr.length <= 2) return -1;

//   let head = 0;
//   let tail = 0;
//   const isOdd = !!(arr.length % 2);
//   const middleIndex = (arr.length - 1) / 2; // if length is odd

//   for (let i = 0; i <= arr.length - 1; i += 1) {
//     if (isOdd && i === middleIndex) return -1;

//     if (i === 0 || arr.length % 2 !== 0) {
//       head += arr[i];
//       tail += arr[arr.length - 1 - i];
//     } else if (head < tail) {
//       head += arr[i];
//     }
//     if (head === tail) return i + 1;
//   }
//   return -1;
// }
