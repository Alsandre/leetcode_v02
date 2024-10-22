// ამოცანის მიზანია ვიპოვოთ საშუალო იმ მიმდევრობისა რომლის ჯამიც იქნება უდიდესი მოცემული მასივის შესაძლო მიმდევრობებს შორის.
// რადგან ქვემიმდევრობა უწყვეტი უნდა იყოს, პრობელმის ხასიათა ე.წ მოძრავი ფანჯარის პრიციპისაა
// ჩვენ უნდა მოვახდინოთ იტერაცია ისე რომ დავაფიქსიროთ ყველა შესაძლო ვარიანტი
// ფანჯრის ზომა იქნება გადმოცემული რიცხვის შესაბამისი
// შესაძლოა შევქმნათ ცვლადი რომელშიც ყოველ შესაძლო მნიშვნელობას შევინახავთ
// ან შევქმნათ ცვლად სადაც მხოლოდ უდიდეს მნიშვნელობას დავაფიქსირებთ

// ალგორითმი
// ნაბიჯი 1 - შევქმნათ ცვლადი validSubArrSums = []
// ნაბიჯი 2 - გავმართოთ ციკლი მასივზე იტერაციისთვის მოძრავი ფანჯრის პრინციპით
// ნაბიჯი 3 - თითოეული ქვემიმდევრობის ჯამი შევინახოთ validSubArrSums ში
// ნაბიჯი 4 - დავაბრუნოთ უდიდესი ჯამის განაყოფი გადმოცემუ k არგუმენტზე

function _findMaxAverage(nums: number[], k: number): number {
  let validSubArrSums: number[] = [];
  for (let i = 0; i <= nums.length - k; i++) {
    validSubArrSums.push(
      nums.slice(i, i + k).reduce((acc, val) => acc + val, 0)
    );
    console.log(Math.max(...validSubArrSums));
  }
  return Math.max(...validSubArrSums) / k;
}


// გამომდინარე იქედან რომ თითოეული იტერაციისთვის K სიგრძის მასივის იტერაციას ვაკეთებთ
// პრობლემის გადაჭრა იმდენად არაეფექტურია რომ დროის ლიმიტში ვერ ეტევა

function findMaxAverage(nums: number[], k: number): number {
  let maxSum = -Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    console.log(nums.slice(i, i + k));
    maxSum = Math.max(
      nums.slice(i, i + k).reduce((acc, val) => acc + val, 0),
      maxSum
    );
  }
  return maxSum / k;
}

let ans1 = findMaxAverage(
  [
    8860, -853, 6534, 4477, -4589, 8646, -6155, -5577, -1656, -5779, -2619,
    -8604, -1358, -8009, 4983, 7063, 3104, -1560, 4080, 2763, 5616, -2375, 2848,
    1394, -7173, -5225, -8244, -809, 8025, -4072, -4391, -9579, 1407, 6700,
    2421, -6685, 5481, -1732, -8892, -6645, 3077, 3287, -4149, 8701, -4393,
    -9070, -1777, 2237, -3253, -506, -4931, -7366, -8132, 5406, -6300, -275,
    -1908, 67, 3569, 1433, -7262, -437, 8303, 4498, -379, 3054, -6285, 4203,
    6908, 4433, 3077, 2288, 9733, -8067, 3007, 9725, 9669, 1362, -2561, -4225,
    5442, -9006, -429, 160, -9234, -4444, 3586, -5711, -9506, -79, -4418, -4348,
    -5891,
  ],
  93
);

// მცირე ცვლილებები არ აღმოჩნდა საკმარისი

// საჭიროა reduce მეთოდის ამოგდება
// ამისათვის ვფიქრობ შესაძლებელია k-ური მიმდევრობის ერთხელ დათვლის შემდეგ ფანჯრის ჩაცურება მოვახდინოთ მისი კიდურა წევრების გადანაცვლებით
// ამას შეიძლება ვუწოდოთ ჩარჩოზე მოძრავი ფანჯარა

// პრინციპი შემდეგია: ფანჯრის ჩასაცურებლად დავუმატოთ მომდევნო წევრი და გამოვაკლოთ პირველი
// განსახორციელებლად დაგვჭირდება მიმთითებელი ცვლადება და პირველი მიმდევრობის ჯამის დათვლა

// ალგორითმი:
// ნაბიჯი 1 - შევქმნათ ცვლადი maxSum = -Infinity
// ნაბიჯი 2 - შევქმნათ ცვლადი firstWindowSum და მივცეთ შესაბამისი მნიშვნელობა
// ნაბიჯი 3 - შევქმნათ ცვლადი winStart = 0
// ნაბიჯი 4 - შევქმნათ ცვლადი winEnd = k
// ნაბიჯი 5 - გავმართოთ ციკლი მიღებულ მასივზე ფანჯრის პრინციპით იტერაციისთვის დაწყებული 0=1 დან
// ნაბიჯი 6 - თითოეულ იტერაციაზე "ფანჯარას" გამოვაკლოთ მასივის winStart წევრი და დავუმატოთ winEnd წევრი მიღებული ჯამი საჭიროების მიხედვით შევინახოთ
// ნაბიჯი 7 - დავაბრუნოთ maxSum/k როგორც ფუნქციის შედეგი