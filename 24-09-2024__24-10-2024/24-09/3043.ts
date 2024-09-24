// BRUTE APPROACH - OUT of TIME
// function longestCommonPrefix(arr1: number[], arr2: number[]): number {
//   let res = 0;
//   arr1.forEach((num1) => {
//     arr2.forEach((num2) => {
//       let prfxCounter = 0;
//       let num1Str = num1.toString();
//       let num2Str = num2.toString();
//       let pointer = 0;
//       while (
//         num1Str[pointer] === num2Str[pointer] &&
//         (num1Str.length >= pointer || num2Str.length >= pointer)
//       ) {
//         prfxCounter++;
//         pointer++;
//       }
//       if (prfxCounter > res) res = prfxCounter;
//     });
//   });

//   return res;
// }

// BRUTE but WORKING APPROACH
function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  let hash1: {[key:string]: boolean} = {};
  let res = 0;
  arr1.forEach((num1) => {
    let num1Str = num1.toString();
    for (let i = num1Str.length; i >= 0; i--) {
      hash1[num1Str.slice(0, i)] = true;
    }
  });
  arr2.forEach((num2) => {
    let num2Str = num2.toString();
    for (let i = num2Str.length; i >= 0; i--) {
        let num2Pref = num2Str.slice(0, i);
      if(hash1[num2Pref] && num2Pref.length > res) res = num2Pref.length
    }
  });

  return res;
}