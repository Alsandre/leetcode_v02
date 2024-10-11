// შევეცდები "დაყავი და დაიპყარი" ტიპის ერთ-ერთი ალგორითმის აწყობას, რომელიც merge-sort სახელით არის ცნობილი

// პრინციპი შემდეგნაერია:
// მიღებულ მასივს ვყოფთ ორ ტოლ ნაწილად მანამ სანამ აშკარად დალაგებულ (1 ელემენტი) მასივს არ მივიღებთ
// რეკურსიული მიდგომის საბაზისო შემთხვევა იქნება, როცა მასივის ზომა ნაკლებია ან ტოლი 1

// რეკურსია გაეშვება როცა მასივის სიგრძე ერთზე მეტია ანუ
// ვყოფთ მასივს შუაზე და ვუშვებთ ფუნქციას ორივე განაყოფისთვის
// ფუნქციების შედეგები უნდა შევინახოთ შესაბამის ცვლადებში რათა რეკურსიიდან მიღებული პასუხები გავაერთიანოთ და დავაბრუნოთ

// რეკურსიის ამოძახილის მიღების შემდეგ ვაერთიანებთ მიღებულ შედეგებს, რაც თავის მხრივ მოითხოვს შედარების ალგორითმს

// ალგორითმს შესაძლოა ჰქონდეს იტერაციული სახე
// ვადარებთ ორ, უკვე დალაგებულ, მასივს და შეგვყავს მნიშვნელობები შედარების შესაბამისად ახალ მასივში
// თუ რომელიმე მასივში დარჩება, ეს აუცილებლად მოხდება, ელემენტი/ები მათ უბრალოდ ვამატებთ ახალი მასივის ბოლოში და ვაბრუნებთ ამ მასივს

let chronoReality = 0;

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
      console.log('left<right')
    } else {
      sorted.push(rightSorted[rightPointer]);
      rightPointer++;
      console.log('left<right else')
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
