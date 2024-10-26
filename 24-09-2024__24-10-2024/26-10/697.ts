// მასივის ხარისხი - მისი უდიდესი სიხშირეა
// მასივში შეიძლება რამდენიმე ელემენტი იყოს წარმოდგენილი მსგავსი სიხშირეებით

// მასივის ხარისხის განმარტებიდან გამომდინარე ამოცანის მიზანია ისეთი ქვემიმდევრობის პოვნა რომლის საწყისი და საბოლოო წევრები ხარისხის განმსაზღვრელი ელემენტებია

// თუ მასივის ხარისხი მხოლოდ ერთი ელემენტის სიხშირით განისაზღვრება მაშინ ამოცანის პასუხია ამ ელემენტის ბოლო და პირველი პოზიციების სხვაობაა
// თუ რამდენიმე ელემენტს აქვს ერთნაერი მაქსიმალური სიხშირე, ვპოულობთ ბოლო-პირველი პოზიციის სხვაობას თითოეულისთვის და ვაბრუნებთ უმცირესს

// ალგორითმი:
// ნაბიჯი 1 - შევქმნათ ობიექტი frequencies = {} რომელშიც შევინახავთ ელემენტთა სიხშირეებს
// ნაბიჯი 2 - შევქმნათ ციკლი გადმოცემულ მასივის ელემენტების გამოსაძახებლად
// ნაბიჯი 3 - განვაახლოთ სიხშირეების მასივი მიმდინარე ელემენტის შესაბამისად
// ნაბიჯი 4 - მიღებული სიხშირეებიდან გამოვარჩიოთ უდიდესი მნიშვნელობის მქონე/მქონენი
// ნაბიჯი 5 - ვიპოვოთ უდიდესი სიხშირის მქონე ელემენტის/ელემენტების ბოლო და პირველ პოზიციებს შორის სხვაობა და დავაბრუნოთ მათ შორის უმცირესი

function findShortestSubArray(nums: number[]): number {
  let frequencies: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    frequencies[nums[i]] = frequencies[nums[i]] ? frequencies[nums[i]] + 1 : 1;
  }
  let highFreqEls: { [key: number]: number }[] = [];
  let max = Math.max(...Object.values(frequencies));
  for (let key in frequencies) {
    if (frequencies[key] === max) highFreqEls.push({ [key]: frequencies[key] });
  }
  let res = highFreqEls.map(
    (freq) =>
      nums.lastIndexOf(+Object.keys(freq)[0]) -
      nums.indexOf(+Object.keys(freq)[0])
  );
  return Math.min(...res) + 1;
}

findShortestSubArray([1, 2, 2, 3, 1, 4, 2]);
