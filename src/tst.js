function getMaxNumber(size) {
  const matrix = [];
  const maxIndex = size - 1;
  let currentNumber = 1;
  const maxNumber = size * size;

  function goAround(
    topBorderIndex,
    rightBorderIndex,
    bottomBorderIndex,
    leftBorderIndex
  ) {
    function goRight(rowIndex) {
      for (let i = 0; i <= maxIndex; i += 1) {
        if (!matrix[rowIndex][i]) {
          matrix[rowIndex][i] = currentNumber;
          currentNumber += 1;
        }
      }
    }

    function goDown(rightColumnIndex) {
      for (let row = 0; row <= maxIndex; row += 1) {
        if (!matrix[row][rightColumnIndex]) {
          matrix[row][rightColumnIndex] = currentNumber;
          currentNumber += 1;
        }
      }
    }

    function goLeft(rowIndex) {
      for (let i = 0; i <= maxIndex; i += 1) {
        if (!matrix[rowIndex][size - i - 1]) {
          matrix[rowIndex][size - i - 1] = currentNumber;
          currentNumber += 1;
        }
      }
    }

    function goUp(leftColumnIndex) {
      for (let i = 0; i <= maxIndex; i += 1) {
        if (!matrix[size - 1 - i][leftColumnIndex]) {
          matrix[size - 1 - i][leftColumnIndex] = currentNumber;
          currentNumber += 1;
        }
      }
    }

    for (let lap = 1; lap <= 4; lap += 1) {
      switch (lap) {
        case 1:
          goRight(topBorderIndex);
          break;
        case 2:
          goDown(rightBorderIndex);
          break;
        case 3:
          goLeft(bottomBorderIndex);
          break;
        case 4:
          goUp(leftBorderIndex);
          break;
        default:
          break;
      }
    }
  }

  // add sub arrays
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }

  for (let num = 0; currentNumber <= maxNumber; num += 1) {
    goAround(num, maxIndex - num, maxIndex - num, num);
    // for (let i = 0; i < size; i += 1) {
    //   goRight(i);
    // for (let j = 0; j < size; j += 1) {
    // going right
    // if (!matrix[i][j]) {
    //   matrix[i][j] = currentNumber;
    //   currentNumber += 1;
    // }
    // }
    // }
  }

  return matrix;
}
console.table(getMaxNumber(5));

// function addBorders() {
//   // add upper and right borders
//   for (let i = 0; i < size; i += 1) {
//     for (let j = 0; j < size; j += 1) {
//       // Fill first row
//       if (i === 0) {
//         matrix[i][j] = j + 1;
//         currentNumber += 1;
//       }

//       if (j === size - 1 && i !== 0) {
//         matrix[i][j] = currentNumber;
//         if (i !== size - 1 && j !== size) currentNumber += 1;
//       }
//     }
//   }

//   // add bottom border
//   for (let i = 0; i <= size - 1; i += 1) {
//     matrix[size - 1][size - 1 - i] = currentNumber;
//     currentNumber += 1;
//   }

//   // add left border
//   const leftInLeftBorder = size - 2;
//   for (let i = 0; i < leftInLeftBorder; i += 1) {
//     matrix[leftInLeftBorder - i][0] = currentNumber;
//     currentNumber += 1;
//     // for (let j = 0; j < size; j += 1) {}
//   }
// }

/**

 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
