// საჭიროა ვიპოვოთ თითოეული წევრის ჰარმონიული თანმიმდევრობები და ბოლოს შევარჩით ყველაზე გრძელი
// ჰარმონიული თანმიმდევრობების საპოვნელად თითოეული წევრი უნდა შევინახოთ და თან შევადაროთ უკვე შენახულ წევრებს

// შევქმნათ შემნახველი ობიექტი რომმლის გასაღებიც იქნება ელემენტი
// ხოლო მნიშვნელობა ამ ელემენტის სიხშირე

function findLHS(nums: number[]): number {
  let max: number = 0;
  let map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  for (let [key, length] of map) {
    let prev = map.get(key - 1);
    if (!prev) continue;
    console.log(map.get(key - 1));
    max = Math.max(max, prev! + length);
  }
  return max;
}
findLHS([1, 3, 2, 2, 5, 2, 3, 7]);
