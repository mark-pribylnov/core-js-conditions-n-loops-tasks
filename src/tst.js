// Tutorial: https://www.youtube.com/watch?v=Vtckgz38QHs

function sortByAsc(arr) {
  function partition(array, startIndex, endIndex) {
    const TEMPpart = array.slice(startIndex, endIndex + 1);

    const pivot = array[endIndex];
    let finalPivotIndex = null;

    let zoneBoundary = startIndex - 1;

    const expandZone = () => {
      zoneBoundary += 1;
      return undefined;
    };
    const swap = (prison, innocent, prisoner) => {
      const vehicle = prison[innocent];
      const copyArr = prison;
      copyArr[innocent] = prison[prisoner];
      copyArr[prisoner] = vehicle;
      return prison;
    };

    for (let explorer = startIndex; explorer <= endIndex; explorer += 1) {
      const TEMPcurrentExplorer = array[explorer];
      const TEMPpivot = pivot;
      if (array[explorer] < pivot) {
        expandZone();
        swap(array, zoneBoundary, explorer);
      } else if (array[explorer] === pivot) {
        expandZone(zoneBoundary);
        swap(array, zoneBoundary, explorer);

        finalPivotIndex = zoneBoundary;
      }
    }

    return finalPivotIndex;
  }

  function quickSort(array, startIndex, endIndex) {
    if (endIndex <= startIndex) return;

    const pivotIndex = partition(array, startIndex, endIndex);

    quickSort(array, startIndex, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, endIndex);
  }

  quickSort(arr, 0, arr.length - 1);
  return arr;
}

console.log(sortByAsc([8, 2, 4, 7, 1, 3, 9, 6, 5]));

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

// if (numLeft < numRight && numRight !== 0) {
//   arr[leftIndex] = numRight;
//   arr[rightIndex] = numLeft;
//   return;
// }
//
//
//
//
//
//
//
//
//
// Explainining "PARTITIONING" function

// Explained only "partition" function.

// This algorithm should work only for [8, 2, 4, 7, 1, 3, 9, 6, 5]. It's not expected it to work on anything else. The puprose is to explain the logic.
// If any bugs appear, CREATE A NEW function and write clean working code there, without comments.

// function sortByAsc(arr) {
//   function partition(array, startIndex, endIndex) {
//     const TEMPitemsForPartitioning = array.slice(startIndex, endIndex + 1);

//     const pivot = array[endIndex];
//     let finalPivotIndex;

//     let zoneBoundary;
//     const createLessThanPivotZone = (explorer) => {
//       zoneBoundary = explorer - 1;
//       return undefined;
//     };
//     const expandZone = (currentBoundary) => {
//       zoneBoundary = currentBoundary + 1;
//       return undefined;
//     };
//     const swap = (prison, innocent, prisoner) => {
//       // 2.1 Create a variable and place the innocent "prisoner" there.
//       // We need to empty the cell before the real criminal arrives, so we move the innocent guy to the vehicle that gets him home.
//       const vehicle = prison[innocent];
//       const copyArr = prison; // Not related to the task. We avoid assigning to a funciton parameter.
//       // 2.2 Place the "true criminal" into the zone.
//       copyArr[innocent] = prison[prisoner];
//       // 2.3 Release the "innocent" to the place where the true criminal was taken from.
//       copyArr[prisoner] = vehicle;
//       return prison;
//     };

//     for (let explorer = startIndex; explorer <= endIndex; explorer += 1) {
//       // if (array[explorer] >= pivot) do nothing, just go check the next item.
//       // It's important to know this step, but we can skip it programatically.
//       // Moving to the next iteration already increases our "explorer" position by 1
//       if (
//         array[explorer] < pivot &&
//         explorer > 0 &&
//         !zoneBoundary
//       ) {
//         createLessThanPivotZone(explorer);
//         // We create a boundary of LESS THAN PIVOT ZONE where we are going to move all the values that are less than the pivot.
//         // Then, every time our "explorer" encounters a value that is less than the pivot, we are going to expand the zone and add that value there.

//         // The zone has been created. Now it holds the values that accidentally got there. It shouldn't be here. Let's swap it with the value the "explorer" found.
//         swap(array, zoneBoundary, explorer);
//       } else if (array[explorer] < pivot) {
//         if (!zoneBoundary) createLessThanPivotZone(explorer);
//         // "Explorer" has found a new value that it less than pivot. Now:
//         // 1. Expand the zone.
//         expandZone(zoneBoundary);
//         // 2. The zone has been expanded by one. Now it holds the value that is greater than the pivot.
//         // It shouldn't be here. We need to get it out of the prison.
//         // Think of this as swap(prison, innocent, criminal). Check "swap" funciton for detailed explanation.
//         swap(array, zoneBoundary, explorer);
//       } else if (array[explorer] === pivot) {
//         if (!zoneBoundary) createLessThanPivotZone(explorer);
//         // The "explorer" had found his creator. The pivot. All the values that are less than the pivot are found. The mission is completed.
//         // The pivot expands the zone and swaps with a new innocent prisoner to control its kingdom. He's the boss and should be in front of all of them.
//         expandZone(zoneBoundary);
//         swap(array, zoneBoundary, explorer);
//         finalPivotIndex = zoneBoundary;
//       }
//     }

//     return finalPivotIndex;
//   }

//   function quickSort(array, startIndex, endIndex) {
//     if (endIndex <= startIndex) return;

//     const pivotIndex = partition(array, startIndex, endIndex);
//     // quickSort(array, startIndex, pivotIndex - 1);
//     // quickSort(array, pivotIndex + 1, endIndex);
//   }

//   quickSort(arr, 0, arr.length - 1);
//   return arr;
// }
