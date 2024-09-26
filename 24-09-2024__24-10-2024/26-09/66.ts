// Looks very interesting problem
// as I see it we need to formalize simple addition logic

// scenario 1:
// if array will be empty - we should return [1]
// scenario 2:
// LSD is less then 9 - we replace LSD with incremented value
// scenario 3:
// for any digit that equals 9 - we set it to 0 and add one to its adjacent sibling to the left
// scenario 4:
// if every digit is equal to 9 - we need to increase array size

// we have a constraint that array length is between 1 and 100 so we dont need to validate empty array scenario (s1)

// Algo:
// step 1 - setup backward loop
// step 2 - if value is less then 9 replace it with incremented value and break
// step 3 - if value is 9 and index is not 0 set it to 0
// step 4 - if value is 9 and index is 0 set value to 0 and unshift 1 to the array

function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      ++digits[i];
      break;
    } else if (digits[i] === 9 && i > 0) {
      digits[i] = 0;
    } else {
      digits[i] = 0;
      digits.unshift(1);
    }
  }
  return digits;
}
