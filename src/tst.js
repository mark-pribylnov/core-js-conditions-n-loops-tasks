function getMaxNumber(str) {
  let finalStr = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    finalStr += str[i];
    console.log(finalStr);
  }

  console.log(str, finalStr);

  if (str === finalStr) return true;

  return false;
}

console.log(getMaxNumber('12345'));
