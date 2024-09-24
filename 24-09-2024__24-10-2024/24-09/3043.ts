// BRUTE APPROACH
function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  let res = 0;
  arr1.forEach((num1) => {
    arr2.forEach((num2) => {
      let prfxCounter = 0;
      let num1Str = num1.toString();
      let num2Str = num2.toString();
      let pointer = 0;
      while (
        num1Str[pointer] === num2Str[pointer] &&
        (num1Str.length >= pointer || num2Str.length >= pointer)
      ) {
        prfxCounter++;
        pointer++;
      }
      if (prfxCounter > res) res = prfxCounter;
    });
  });

  return res;
}
// OUT of TIME ...
