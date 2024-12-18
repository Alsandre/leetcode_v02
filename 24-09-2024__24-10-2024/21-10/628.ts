// ამოცანის მიზანია ისეთი სამი ელემენტის შერჩევა მასივიდან რომელთა ნამრავლი იქნება უდიდესი, ყველა შესაძლო ნამრავლთა შორის
// სიტუაციას ართულებს ელემენტთა შესაძლო უარყოფითობა, წინააღმდეგ შემთხვევაში სასურველი შედეგის მისაღებად საკმარისი იქნებოდა სამი უდიდესი მნიშვნელობის მქონე ელემენტის პოვნა
// თუმცა მოცემულ სიტუაციაში უნდა გავითვალისწინოთ, რომ თუ შევარჩევთ ორ ისეთ ელემენტს რომელიც წარმოდგენილია მინუსის ნიშნით, თუმცა მათი აბსოლიტური მნიშვნელობები
// აღემატება დადებითი ნიშნით წარმოდგენილ ელემენტთა აბსოლიტურ მნიშვნელობებს
// მაშინ მინუს ნიშნიანი ელემენტების ნამრავლი იქნება უფრო მეტი.

// შეზღუდვების უკეთ გასაანალიზებლად, შევეცდები შესაძლო კომბინაციების ჩამოთვლას

// ყველა ელემენტი არის მინუს ნიშნით, ამ შემთხვევაში გარდაუვალია ნამრავლის მინუს ნიშანი, შესაბამისად უნდა ვეცადოთ ისეთი ელემენტების შერჩევა, რომელთა აბსოლიტური მნიშვნელობები უმცირესია, რათა მივიღოთ უდიდესი ნამრავლი
// ყველა ელემენტი, გარდა ერთისა, არის მინუს ნიშნით, ამ შემთხვევაში სიტუაცია რადიკალურად იცვლება, ჩვენ გვჭირდება ორი უდიდესი აბსოლიტური მნიშვნელობის მქონე ელემენტი რომელთა ნამრავლას გავამრავლებთ ერთადერთ დადებით ნიშნიან ელემენტზე, რაც მოქგვცემს ნამრავლის მაქსიმალურ მნიშვნელობას
// ყველა ელემენტი დადებითია, გარდა ერთისა, ამ შემთხვევაში ვეძებთ უდიდეს მნიშვნელობის დადებით ელემენტებს, რადგან კენტი რაოდენობის მინუსის ნიშნიანი ელემენტები ჩვენთვის გამოუსადეგარია, რაგინდ დიდი არ იყოს მისი აბსოლიტური მნიშვნელობა
// მასივის ელემენტები შერეულია დადებითი და უარყოფითი მნიშვნელობებით, ამ შემთხვევაში უნდა განვიხილოთ მინუს ნიშნით წარმოდგენილ ელემენტებს შორის აბსოლიტური მნიშვნელობით უდიდესი ორი ელემენტის ნამრავლი თუ უფრო მეტია ვიდრე დადებითი ნიშნით წარმოდგენილ უდიდეს ელემენტებს შორის მეორე და მესამე პოზიციებზე მდომი ელემენტების ნამრავლი, მაშინ უდიდეს საბოლოო ნამრავლს მოგვცემს ორი უმცირესი უარყოფითი ელემენტისა და ერთი უდიდესი დადებითი ელემენტის ნამრავლი
// თუ ყველა ელემენტი დადებითია, მაშინ საბოლოო ნამრავლი უდიდესი სამი ელემენტის ნამრავლის ტოლი იქნება

// მოცემულ შესაძლო ვარიაციებზე დაკვირვებით შეიძლება დავასკვნათ, რომ გადაწყვეტილების მისაღებად საკმარისია ვიპოვოთ სამი უმცირესი და სამი უდიდესი მნიშვნელობა მოცემულ მნიშვნელობებს შორის

// იკვეთება ორი მიდგომა: პირველი - მასივის დალაგება და დაკვირვება უდიდეს და უმცირეს მნიშვნელობებზე; მეორე - მხოლოდ ჩვენთვის საინტერესო ელემენტების გამოყოფა და მათი გაანალიზება
// პირველი მიდგომა შედარებით მარტივად განსახორციელებელია, ხოლო მეორე უფრო მეტად ოპტიმალური, რესურსების თვალსაზრისით.

// ალგორითმი 1
// ნაბიჯი 1 - შევქმნათ sorted ცვლადი და შევინახოთ მასში ზრდის მიხედვით დალაგებული გადმოცემული მასივი
// ნაბიჯი 2 - გამოვაცალკეოთ უდიდესი სამი და უმცირესი სამი ელემენტი ცვლადებში: max1, max2, max3, min1, min2, min3
// ნაბიჯი 3 - თუ უდიდესი ელემენტი უარყოფითია ან უმცირესი ელემენტი დადებითია, მაშინ დავაბრუნოთ უდიდესი სამი ელემენტის ნამრავლი
// ნაბიჯი 4 - თუ ორი უმცირესი მნიშვნელობის ნამრავლი მეტია მე-2 და მე-3 უდიდესი მნიშვნელობების ნამრავლზე, მაშინ დავაბრუნოთ ორი უმცირესი და ერთი უდიდეს მნიშვნელობათა ნამრავლი

function _maximumProduct(nums: number[]): number {
  let sorted = mergeSort(nums);
  let len = sorted.length;
  let min1 = sorted[0];
  let min2 = sorted[1];
  let min3 = sorted[2];
  let max1 = sorted[len - 1];
  let max2 = sorted[len - 2];
  let max3 = sorted[len - 3];

  if (min1 > 0) {
    console.log("max1>");
    return max1 * max2 * max3;
  }
  if (max1 < 0) {
    console.log("max1<");
    return min1 * min2 * min3;
  }
  if (min1 * min2 > max2 * max3) {
    console.log("min max");
    return min1 * min2 * max1;
  }
  return 0;
}

function mergeSort(numArray: number[]): number[] {
  if (numArray.length <= 1) {
    return numArray;
  }
  const mid = Math.floor(numArray.length / 2);
  const left = numArray.slice(0, mid);
  const right = numArray.slice(mid, numArray.length);
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);

  function merge(arrLeft: number[], arrRight: number[]): number[] {
    let sorted: number[] = [];
    while (arrLeft.length > 0 && arrRight.length > 0) {
      if (arrLeft[0] > arrRight[0]) sorted.push(arrRight.shift()!);
      else sorted.push(arrLeft.shift()!);
    }
    if (arrLeft.length) sorted = sorted.concat(arrLeft);
    if (arrRight.length) sorted = sorted.concat(arrRight);
    return sorted;
  }
}

// რამოდენიმე მცდელობის და შესწორებების შემდეგ, რომლებიც შეტანილ იქნა გამონაკლისი შემთხვევების დასაფარად, ფუნქციამ მიიღო შემდეგი სახე:
// უცნაურია ის ფაქტი რომ ყოველ გაშვებაზე ვიღებ შედეგად რომ პრობლემის გადაჭრა ყველა არსებულ გადაჭრაზე სწრაფია.
// უცნაურია რამდენადაც ვიყენებ დალაგების ალგორითმს, რომლის კომპლექსურობაც O(n logn) არის
// ჩემ მიერ შემოთავაზებული მეორე ალგორითმი უნდა იყოს გაცილებით ოპტიმალური რესურსების თვალსაზრისით

function maximumProduct(nums: number[]): number {
  let sorted = nums.sort((a, b) => a - b);
  let len = sorted.length;
  let min1 = sorted[0];
  let min2 = sorted[1];
  let min3 = sorted[2];
  let max1 = sorted[len - 1];
  let max2 = sorted[len - 2];
  let max3 = sorted[len - 3];

  if (min1 >= 0 || max1 < 0) {
    return max1 * max2 * max3;
  }
  if (min1 * min2 >= max2 * max3) {
    return min1 * min2 * max1;
  } else return max1 * max2 * max3;
  return min1 * min2 * min3;
}

let ans = maximumProduct([
  -710, -107, -851, 657, -14, -859, 278, -182, -749, 718, -640, 127, -930, -462,
  694, 969, 143, 309, 904, -651, 160, 451, -159, -316, 844, -60, 611, -169, -73,
  721, -902, 338, -20, -890, -819, -644, 107, 404, 150, -219, 459, -324, -385,
  -118, -307, 993, 202, -147, 62, -94, -976, -329, 689, 870, 532, -686, 371,
  -850, -186, 87, 878, 989, -822, -350, -948, -412, 161, -88, -509, 836, -207,
  -60, 771, 516, -287, -366, -512, 509, 904, -459, 683, -563, -766, -837, -333,
  93, 893, 303, 908, 532, -206, 990, 280, 826, -13, 115, -732, 525, -939, -787,
]);
let sorted = mergeSort([
  -710, -107, -851, 657, -14, -859, 278, -182, -749, 718, -640, 127, -930, -462,
  694, 969, 143, 309, 904, -651, 160, 451, -159, -316, 844, -60, 611, -169, -73,
  721, -902, 338, -20, -890, -819, -644, 107, 404, 150, -219, 459, -324, -385,
  -118, -307, 993, 202, -147, 62, -94, -976, -329, 689, 870, 532, -686, 371,
  -850, -186, 87, 878, 989, -822, -350, -948, -412, 161, -88, -509, 836, -207,
  -60, 771, 516, -287, -366, -512, 509, 904, -459, 683, -563, -766, -837, -333,
  93, 893, 303, 908, 532, -206, 990, 280, 826, -13, 115, -732, 525, -939, -787,
]);
console.log(ans);
console.log(sorted);
