function findExtremes(arr: number[]) {
  let min = [Infinity, Infinity, Infinity]; // To store 3 smallest numbers
  let max = [-Infinity, -Infinity, -Infinity]; // To store 3 largest numbers

  arr.forEach((num) => {
    // Update min
    if (num < min[0]) [min[2], min[1], min[0]] = [min[1], min[0], num];
    else if (num < min[1]) [min[2], min[1]] = [min[1], num];
    else if (num < min[2]) min[2] = num;

    // Update max
    if (num > max[0]) [max[2], max[1], max[0]] = [max[1], max[0], num];
    else if (num > max[1]) [max[2], max[1]] = [max[1], num];
    else if (num > max[2]) max[2] = num;
  });

  return { min, max };
}

const answer = findExtremes([
    -710, -107, -851, 657, -14, -859, 278, -182, -749, 718, -640, 127, -930, -462,
    694, 969, 143, 309, 904, -651, 160, 451, -159, -316, 844, -60, 611, -169, -73,
    721, -902, 338, -20, -890, -819, -644, 107, 404, 150, -219, 459, -324, -385,
    -118, -307, 993, 202, -147, 62, -94, -976, -329, 689, 870, 532, -686, 371,
    -850, -186, 87, 878, 989, -822, -350, -948, -412, 161, -88, -509, 836, -207,
    -60, 771, 516, -287, -366, -512, 509, 904, -459, 683, -563, -766, -837, -333,
    93, 893, 303, 908, 532, -206, 990, 280, 826, -13, 115, -732, 525, -939, -787,
  ])
console.log(answer)