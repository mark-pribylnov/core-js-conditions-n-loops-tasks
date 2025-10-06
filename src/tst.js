// Tutorial: https://www.youtube.com/watch?v=Vtckgz38QHs

function sortByAsc(arr) {
  function divide(array, startIndex, endIndex) {
    const arrCopy = array;
    const pivot = array[endIndex];
    let i = startIndex - 1;

    for (let j = startIndex; j <= endIndex - 1; j += 1) {
      if (array[j] < pivot) {
        i += 1;

        const tempVar = array[i];
        arrCopy[i] = array[j];
        arrCopy[j] = tempVar;
      }
    }
    i += 1;

    const tempVar = array[i];
    arrCopy[i] = array[endIndex];
    arrCopy[endIndex] = tempVar;

    return i;
  }

  function quicksort(array, startIndex, endIndex) {
    if (endIndex <= startIndex) return;

    const pivot = divide(array, startIndex, endIndex);
    quicksort(array, startIndex, pivot - 1);
    quicksort(array, pivot + 1, endIndex);
  }

  quicksort(arr, 0, arr.length - 1);

  return arr;
}

// console.log(sortByAsc([4, 3, 1, 2, 5, 9, 7, 10, 6]));
console.log(sortByAsc([8, 2, 4, 7, 1, 3, 9, 6, 5]));

// Before following along tutorial
// function sortByAsc(arr) {
//   // const middlePivotValue = arr[middlePivotIndex];

//   let quickSortIteration = 1;

//   function quickSort(array, firstIndex, lastIndex) {
//     if (lastIndex <= firstIndex || array.length <= 1 || quickSortIteration > 10)
//       return;

//     console.log(
//       `\n----- New sorting iteration -----\n`,
//       `${quickSortIteration} Sorting`,
//       array
//     );

//     function devideIntoTwoParts(array1, pivot) {
//       console.log(
//         `\n${quickSortIteration}.1 Dividing ${array1}, pivot is ${pivot}`
//       );

//       let i = -1;
//       let j = 0;
//       let tempVar = null;
//       const arrCopy = array1;

//       for (let k = 0; k < array1.length; k += 1) {
//         // console.log(
//         //   `\n${quickSortIteration}.1.${k + 1} Swaping. i = ${i}, j = ${j}`
//         // );
//         // console.log(
//         //   `
//         // Iteration: j=${j}, array1[j]=${array1[j]}, pivot=${pivot}`
//         // );
//         // console.log(
//         //   `Checking: ${array1[j]} < ${pivot} = ${array1[j] < pivot}
//         //             `
//         // );

//         if (array1[j] === pivot) {
//           // console.log(`Condition array1[j] === pivot`);
//           // console.log(`Condition ${array1[j]} === ${pivot}`);
//           i += 1;
//           // console.log(`i++`);
//           // console.log(`i = ${i}`);
//           // console.log(`Swap ${array1[i]} <-> ${array1[j]}`);
//           // console.log(`Before swap ${array1}`);

//           tempVar = array1[i];
//           arrCopy[i] = array1[j];
//           arrCopy[j] = tempVar;
//           // console.log(`After swap ${array1}`);
//         } else if (array1[j] >= pivot) {
//           // console.log(`Condition array1[j] >= pivot`);
//           // console.log(`Condition ${array1[j]} >= ${pivot}`);
//           j += 1;
//           // console.log(`j++`);
//           // console.log(`j = ${j}`);
//         } else if (array1[j] < pivot) {
//           // console.log(`Condition array1[j] < pivot`);
//           // console.log(`Condition ${array1[j]} < ${pivot}`);
//           i += 1;
//           // console.log(`i++`);
//           // console.log(`i = ${i}`);
//           tempVar = array1[i];
//           arrCopy[i] = array1[j];
//           arrCopy[j] = tempVar;

//           j += 1;
//           // console.log(`j++`);
//           // console.log(`j = ${j}`);
//         }
//       }

//       console.log(`After dividing ${array}`);
//       return i;
//     }
//     function getLessPart(pivotIndex) {
//       const less = [];
//       for (let i = 0; i < pivotIndex; i += 1) {
//         less[i] = array[i];
//       }

//       return less;
//     }

//     function getGreaterPart(pivotIndex) {
//       const greater = [];
//       for (let i = pivotIndex + 1; i < array.length; i += 1) {
//         greater[i - pivotIndex - 1] = array[i];
//       }
//       return greater;
//     }
//     const InitialPivot = array[array.length - 1];

//     const middlePivotIndex = devideIntoTwoParts(array, InitialPivot);
//     const lessPart = [getLessPart(middlePivotIndex), 0, middlePivotIndex - 1];
//     const greaterPart = [
//       getGreaterPart(middlePivotIndex),
//       middlePivotIndex + 1,
//       arr.length - 1,
//     ];

//     console.log(
//       `\n${quickSortIteration}.2  Less part ${lessPart[0]}, Greater part ${greaterPart[0]}`
//     );
//     // console.log('============', getLessPart(middlePivotIndex));
//     // console.log('============', lessPart[1]);

//     quickSortIteration += 1;
//     // console.log(`Array now`, arr);

//     quickSort(lessPart[0], lessPart[1], lessPart[2]);
//     quickSort(greaterPart[0], greaterPart[1], greaterPart[2]);
//   }

//   quickSort(arr, 0, arr.length - 1);

//   // console.log(lessPart);
//   // console.log(greaterPart);
//   // console.log(arr[pivotIndex]);
//   // console.log(arr[j]);
//   // console.log(i);
//   // console.log(j);
//   // console.log(pivot);

//   // for (; j < arr.length - 1; ) {
//   // if (i === -1) {
//   //   if (arr[j] >= pivot) {
//   //     j += 1;
//   //   } else if (arr[j] < pivot) {
//   //     i += 1;
//   //     tempVar = arr[i];
//   //     arrCopy[i] = arr[j];
//   //     arrCopy[j] = tempVar;
//   //   }
//   // }
//   // }

//   return arr;
// }
