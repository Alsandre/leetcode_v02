// ჩვენი ამოცანაა გადმოცემული მასივი გარდავქმნათ ისეთ წყვილებად
// რომ თუ წყვილებს შორის მინიმალურ მნიშვნელობებს დავაჯამებთ
// ჯამი იყოს მაქსიმალური

// სხვა სიტყვებით რომ ვთქვათ წყვილის მინიმალური მნიშვნელობის მაქსიმიზაციას ვცდილობთ
// ინტუიციურად, წყვილებს შორის უნდა იყოს მინიმალური სხვაობა
// შესაბამისად შეგვიძლია ყოველი ელემენტისთვის მოვძებნოთ მასთან მნიშვნელობით ყველაზე ახლოს მდგომი ელემენტი
// და მიღებული წყვილი გამოვრიცხოთ შემდგომი დაწყვილების პროცესში

// ასევე ინტუიციურად ვფიქრობ რომ თუ მასივი დალაგებულია მაშინ ოპტიმალურია ყოველი მომდევნო წყვილი

// ალგორითმი:

// ნაბიჯი 1 - დავალაგოთ გადმოცემული მასივი
// ნაბიჯი 2 - შევქმნათ ცარიელი მასივი წყვილების შესანახად
// ნაბიჯი 3 - დალაგებული მასივის ყოველი მომდევნო ელემენტი დავაწყვილოთ და გადავცეთ წყვილების მასივს
// ნაბიჯი 4 - წყვილების მასივის ყოველი წყვილის მინიმალური მნიშვნელობა ავჯამოთ და დავაბრუნოთ როგორც ფუნქციის შედეგი

function _arrayPairSum(nums: number[]): number {
  let sortedNums = mergeSort(nums);
  let pairs: number[][] = [];
  for (let i = 0; i < sortedNums.length; i += 2) {
    pairs.push([sortedNums[i], sortedNums[i + 1]]);
  }
  return pairs.reduce((acc, val) => (acc += Math.min(...val)), 0);
}
console.log(arrayPairSum([1, 4, 3, 2]));
function mergeSort(array: number[]): number[] {
  if (array.length === 1) return array;

  let length = array.length;
  let mid = Math.floor(length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, length);
  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}

console.log(mergeSort([2, 4, 1, 20, 49, 14, 3, 15, 6]));

function merge(leftSorted: number[], rightSorted: number[]): number[] {
  let sorted: number[] = [];
  let leftPointer = 0;
  let rightPointer = 0;
  while (leftSorted.length > leftPointer && rightSorted.length > rightPointer) {
    if (leftSorted[leftPointer] < rightSorted[rightPointer]) {
      sorted.push(leftSorted[leftPointer]);
      leftPointer++;
      console.log("left<right");
    } else {
      sorted.push(rightSorted[rightPointer]);
      rightPointer++;
      console.log("left<right else");
    }
  }
  while (leftPointer < leftSorted.length) {
    sorted.push(leftSorted[leftPointer]);
    leftPointer++;
  }
  while (rightPointer < rightSorted.length) {
    sorted.push(rightSorted[rightPointer]);
    rightPointer++;
  }

  return sorted;
}

// პრობლემის გადაჭრა მუშაობს, თუმცა leetcode შეფასებით ძალიან ბევრ დროს და რესურსს მოითხოვს
// ჩვენ მიდგომას შეიძლება ვუწოდოთ პირდაპირი
// ასეც შეიძლება ითქვას რომ პროგრამაში ვახდენთ თითოეული ნაბიჯის უშუალო იმპლემენტაციას
// თუმცა დაკვირვებით შეიძლება ითქვას რომ წყვილების შექმნა საჭირო სულაც არ არის, როცა მასივი დალაგებულია
// თუ დავაკვირდებით შევამჩნევთ რომ დალაგებული მასივის ელემენტებს ადგილები არ ეცვლება
// მათი მინიმალურის პოვნაც მარტივია ფუნქციის გამოყენების გარეშე, რადგან ისინი დალაგებულნი არიან
// შეიძლება ითქვას რომ დალაგებამ მოგვცა საშუალება როგორც ოპტიმალური წყვილების ძიებისა
// ასევე ამ წყვილებში მინიმალურის მარტივად იდენტიფიცირებისა
// შესაბამისად დაწყებული პირველი ელემენტიდან ყოველი მეორე ელემენტი იქნება ოპტიმალურ წყვილებს შორის მინიმალური
// ანუ მასივის დალაგების შემდეგ ჩვენი ამოცანა დაიწყვანება ყოველ ლუწ პოზიციაზე მყოფი ელემენტების ჯამის პოვნამდე
// ფუნქციურად ეს გადაჭრა ეს გამოიყურება:

function arrayPairSum(nums: number[]): number {
  let sortedNums = mergeSort(nums);
  let sum = 0;
  for (let i = 0; i < sortedNums.length; i += 2) {
    sum += sortedNums[i];
  }
  return sum;
}
