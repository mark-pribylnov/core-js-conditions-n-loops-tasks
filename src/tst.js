function shuffleChar(str, iterations) {
  function convertStr(str2) {
    const evens = [str2[0]];
    const odds = [str2[1]];

    for (let i = 2; i < str2.length; i += 1) {
      if (i % 2) {
        odds[odds.length] = str2[i];
      } else {
        evens[evens.length] = str2[i];
      }
    }

    const allValues = [...evens, ...odds];
    let converted = '';

    for (let i = 0; i <= allValues.length - 1; i += 1) {
      converted += allValues[i];
    }

    return converted;
  }

  let newStr = str;

  function getCycle() {
    for (let i = 0; i <= iterations - 1; i += 1) {
      if (newStr === str && i > 0) {
        return i;
      }
      newStr = convertStr(newStr);
    }
    return undefined;
  }
  // There's a number of iterations after which the string is the same as before them. For 012345 it is 4.
  // The 4th iteration return the string to its initial state.

  // The cycle is 3. Whenever the iteration parameter is,
  // we only need to iterate 3 or less times to get that value that it'll have at n-th iteration.
  // If we write on paper numbers from 1 to 50, we can see that the 3rd iteration is going to have the same result as the 7th and 43rd.
  // To number of iterations we really need to perform, divide ITERATIONS by the CYCLE. 50 / 3 = 48.
  // After 48 iterations there will be the same as before.
  // The REMAINDER is the number of iterations we actually need to perform to get the result as we would get after the 50th iteration.
  // 10 000 / 3 = 3333; 10 000 - 3333*3 = 1; Only one iteration to get the 10 000th result.

  const cycle = getCycle();

  const neededIterations = iterations % cycle;

  for (let i = 0; i <= neededIterations - 1; i += 1) {
    newStr = convertStr(newStr);
  }
  return newStr;
}

// '024135' , 043215, 031425
console.log(shuffleChar('012345', 2));

// console.log(
//   shuffleChar(
//     '5964020208487808349267002426378529125147074147828739131870934220328512417309885698528674408352887317242075564786892774272464709645693099920507353371174082035345389088479147362135805895237502232326572121236360613020200090719899965322237256813919886060152644853563577228416217116758492733620070718604264521254675702850757668601781202728318724299709893282309571660332757228449374841093052373321060247578181496856101247496287471882880767749951718591008549637933688072806780984841608069237335732001267328305665854347755051557908054413446441581929882862647134670872968115650373984533958059057922380109992002487050140599566285230591493634918357806433832977907314416571321822595953802849817840980435233068551162969543122512589682468656108830628921536389278132873622864676954650215536048826386925239379620020269223850921899156677547550521954371890998705475758063621856141513410262877356598307146028880951819516540003287199815999661652569246579034993670591274636973542522168782385086173203713465878122916498272',
//     10000
//   )
// );

// Recursion. Up to 9000 iterations, then - stack call exceeded.
// function shuffleChar(str, iterations) {
//   function convertStr(string, iterationCount) {
//     if (iterationCount === iterations) return string;

//     let evens = '';
//     let odds = '';

//     for (let i = 0; i < string.length; i += 1) {
//       if (i % 2) {
//         odds += string[i];
//       } else {
//         evens += string[i];
//       }
//     }

//     const newStr = `${evens}${odds}`;

//     return convertStr(newStr, iterationCount + 1);
//   }
//   return convertStr(str, 0);
// }
//
//
//
//
//
//
//

// Loop instead of recursion, but still too slow. Before trying objects instead of strings to avoid string recreation because they are immutable.
// function shuffleChar(str, iterations) {
//   const startTime = new Date().getTime();

//   function convertStr(str2) {
//     let evens = '';
//     let odds = '';

//     for (let i = 0; i < str2.length; i += 1) {
//       if (i % 2) {
//         odds += str2[i];
//       } else {
//         evens += str2[i];
//       }
//     }

//     return `${evens}${odds}`;
//   }

//   let newStr = str;

//   for (let i = 0; i < iterations; i += 1) {
//     newStr = convertStr(newStr);
//   }

//   const endTime = new Date().getTime();
//   console.log(endTime - startTime);

//   return newStr;
// }
