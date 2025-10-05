function getMaxNumber(matrix) {
  const newMatrix = [];
  const maxIndex = matrix.length - 1;

  (function addRows() {
    for (let i = 0; i <= matrix.length - 1; i += 1) {
      newMatrix[i] = [];
    }
  })();

  function convertRow(rowIndex, newColumnIndex) {
    for (let i = 0; i <= maxIndex; i += 1) {
      const item = matrix[rowIndex][i];
      for (let j = 0; j <= maxIndex; j += 1) {
        if (j === newColumnIndex) {
          newMatrix[i][newColumnIndex] = item;
        }
      }
    }
  }

  for (let i = 0; i <= maxIndex; i += 1) {
    convertRow(i, maxIndex - i);
  }

  // (function replaceMatrix() {
  //   for (let i = 0; i <= maxIndex; i += 1) {
  //     for (let j = 0; j <= maxIndex; j += 1) {
  //       // matrix[i][j] = newMatrix[i][j];
  //     }
  //   }
  // })();

  for (let i = 0; i <= maxIndex; i += 1) {
    const row = matrix[i];
    for (let j = 0; j <= maxIndex; j += 1) {
      row[j] = newMatrix[i][j];
    }
  }

  return newMatrix;
}
console.table(
  getMaxNumber([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// const newMatrix = [];
// const maxIndex = matrix.length - 1;

// (function addRows() {
//   for (let i = 0; i <= matrix.length - 1; i += 1) {
//     newMatrix[i] = [];
//   }
// })();

// function convertRow(rowIndex, newColumnIndex) {
//   for (let i = 0; i <= maxIndex; i += 1) {
//     const item = matrix[rowIndex][i];
//     for (let j = 0; j <= maxIndex; j += 1) {
//       if (j === newColumnIndex) {
//         newMatrix[i][newColumnIndex] = item;
//       }
//     }
//   }
// }

// for (let i = 0; i <= maxIndex; i += 1) {
//   convertRow(i, maxIndex - i);
// }
// // convertRow(0, maxIndex);

// // console.log(matrix);
// return newMatrix;
