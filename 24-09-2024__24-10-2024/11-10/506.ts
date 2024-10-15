// დავალების მიზანია მოცემული მნიშვნელობების რიგითობის განსაზღვრა
// მათი ამჟამინდელი პოზიციის შენარჩუნება მნიშვნელოვანია

// O(n^2) გადაჭრა იქნება თუ თითოეული ელემენტისთვის შევამოწმებთ, თუ რამდენი ელემენტია მასზე მეტი
// რადგან თითოეული ელემენტი უნიკალურია, შეუძლებელია ორი განსხვავებული ელემენტისთვის მივიღოთ ერთნაერი მნიშვნელობა

// გადაჭრა პირდაპირია, და ვფიქრობ ვერ იქნება ოპტიმალური, რადგან მასივის ზომა 10 ის 4 ხარისხამდე მერყეობს
// შესაძლოა რომ მსგავსი გადაჭრით დროის ლიმიტშიც ვერ ჩავეტიოთ
// შედარებით ოპტიმალური იქნებოდა მნიშვნელობებს თუ დავალაგებთ დროებით მასივში
// ხოლო შემდეგ არსებულ მასივს გარდავქმნით რიგითობის მასივის შესაბამისად
// თუმცა პირველ ეტაპზე არ მინდა გარე რესურსების გამოყენება, და პირადად სამწუხაროდ ვერ ვიგონებ რომელიმე დალაგების ალგორითმს

// ალგორითმი:
// ნაბიჯი 1 - შევქმნათ ცვლადი answer და შევინახოთ მასში ცარიელი მასივი
// ნაბიჯი 2 - შევქმნათ ციკლი მიღებული მასივის დასამუშავებლად
// ნაბიჯი 3 - შევქმნათ დროებითი ცვლადი rankCounter
// ნაბიჯი 4 - შევქმნათ ციკლი მიღებული მასივის დასამუშავებლად
// ნაბიჯი 5 - გარე ციკლის ელემენტი შევადაროთ ყოველ დანარჩენ ელემენტს და ყოველი მასზე მაღალი მნიშვნელობის აღმოჩენისას გავზარდოთ rankCounter
// ნაბიჯი 6 - ჩანერგილი ციკლის დასრულების შემდეგ თუ ელემენტის რანგი 1,2 ან 3 მაშინ დავამატოტ შესაბამისი მნიშვნელობა answer მასივში
// ნაბიჯი 7 - თუ მნიშვნლობა რიგითია მაშინ მოდიფიკაციის გარეშე დავამატოთ answer მასივში
// ნაბიჯი 8 - დავაბრუნოთ answer მასივი როგორც ფუნქციიშ შედეგი

function findRelativeRanks(score: number[]): string[] {
  let answer: string[] = [];
  for (let i = 0; i < score.length; i++) {
    let rankCounter: number = 0;
    for (let j = 0; j < score.length; j++) {
      if (score[j] > score[i]) rankCounter++;
    }
    if (rankCounter !== 0 && rankCounter !== 1 && rankCounter !== 2)
      answer.push(`${rankCounter + 1}`);
    else if (rankCounter === 0) answer.push("Gold Medal");
    else if (rankCounter === 1) answer.push("Silver Medal");
    else if (rankCounter === 2) answer.push("Bronze Medal");
    rankCounter = 0;
  }
  return answer;
}

// ჩემთვის გასაკვირად მოცემული პირდაპირი გადაჭრა მუშაობს
// თუმცა რაღა თქმა უნდა სიჩქარის თვალსაზრისით ძალიან არაეფექტურია
// სამაგიეროდ მეხსიერების თვალსაზრისით არის საკმაოდ ეფექტური