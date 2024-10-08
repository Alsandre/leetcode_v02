// მარტივია თითოეული შეტევისთვის ხანგრძლივობის დათვლა
// შესაბამისად ჯამის პოვნაც მარტივია
// შედარებით დასაფიქრებელია თანაკვეთების
// ანუ იმ მომენტების დაფიქსირება როცა დროის ათვლა იწყება თავიდან
// ანუ ყოველი ახალი შეტევისას თუ არსებობს დაუსრულებელი წინა შეტევა
// ვწყვეტთ წინა შეტევას და ვიწყებთ ახალი შეტევის ათვლას

// თუ მასივის ელემენტებს შორის ინტერვალი ხანგრძლივობაზე ნაკლებია
// ეს ნიშნავს რომ თითოეული შეტევა დაწყებული პირველიდან ებმის მომდევნოს
// ამ შემთხვევაში შეგვიძლია ავიღო საწყისი დრო, პირველი შეტევა
// გამოვაკლოთ ის ბოლო შეტევის მაჩვენებელს
// და მიღებულ სხვაობას დავუმატოთ ხანგრძლივობა
// ასე უნდა ვიმოქმედოთ ყოველი შემდგომი შეტევების ჯაჭვისთვის

// იმპლემენტირების თვალსაზრისით უფრო მარტივი იქნება
// თუ შევადარებთ ამჟამინდელ და წინა მონაცემს
// ნაცვლად ამჟამინდელი და მომდენო მონაცემისა
// ციკლი შეგვიძლია დავიწყოთ მეორე ელემენტიდან
// შედარების პირობა ასეთი ფორმის იქნება:
// თუ ამჟამინდელ მნიშვნელობას გამოკლებული წინა ნაკლებია ხანგრძლივობაზე
// მაშინ გამოვყოთ ჯაჭვი და დავუმატოთ ხანგრძლივობა
// ჯაჭვის გამოსაყოფად დაკვჭირდება ცვლადი რომელშიც შევინახავთ მიმთითებელს პირველ რგოლზე
// ხოლო ბოლო რგოლი იქნება წინა მნიშვნელობა

// ალგორითმი:
// ნაბიჯი 1 - შევქმნათ ცვლადი sum და მივცეთ მნიშვნელობა  0
// ნაბიჯი 2 - შევქმნათ ცვლადი pointer და მივცეთ მნიშვნელობად მასივის პირველი წევრი
// ნაბიჯი 3 - თუ მასივში მხოლოდ ერთი ელემენტია გამოვთვალოთ ხანგრძლივობა და დავაბრუნოთ შედეგი
// ნაბიჯი 4 - შევქმნათ ციკლი მასივის ელემენტების გამოსაძახებლად, დავიწყოთ მეორე ელემენტით
// ნაბიჯი 5 - თუ ამჟამინდელი ელემენტის სხვაობა წინა ელემენტთან ნაკლებია ხანგრძლივობაზე, გადავიდეთ შემდეგ ელემენტზე
// ნაბიჯი 6 - წინააღმდეგ შემთხვევაში გამოვთვალოთ სხვაობა pointer და ამჟამინდელ ელემენტებს შორის დავუმატოთ ხანგრძლივობა და ეს მნიშვნელობა გადავაწეროთ sum; pointer მივცეთ ამჟამინდელი ელემენტი მნიშვნელობად
// ნაბიჯი 7 - გავიმეოროთ 5-6 ყოველი მომდევნო ელემენტისთვის
// ნაბიჯი 8 - დავაბრუნოთ sum

function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let sum = 0;
  let pointer = timeSeries[0];
  if (timeSeries.length === 1) return duration;
  for (let i = 1; i < timeSeries.length; i++) {
    let cur = timeSeries[i];
    let pre = timeSeries[i - 1];
    if (cur - pre > duration) {
      sum += pre + duration - pointer;
      pointer = cur;
    }
  }
  sum += timeSeries[timeSeries.length - 1] + duration - pointer;
  return sum;
}

// როცა გავდივართ ბოლო ელემენტზე, ამჟამინდელი ალგორითმი ვერ უზრუნველყოფს ბოლო მნიშვნელობის სწორად დავიფქსირებას
// ერთი შემთხვევა როდესაც ბოლო ელემენტი ჯაჭვის ნაწილია, სრულიად გამოგვრჩება ბოლო ჯაჭვი
// მეორე შემთხვევა როცა ბოლო ელემენტი განყენებული რგოლია, გამოგვრჩება მისი წილი
// არ გვჭირდება ამ შემთხვევების ინდივიდუალურად განხილვა
// რადგან ციკლის ბოლო ელემენტი შედის ვალიდაციის პირობაში
// შესაბამისად თუ ის განყენებულია pointer მიუთითებს მასზე და წინა ჯაჭვები იქნება ნაგულისხმები საბოლოო მნიშვნელობაში
// ხოლო თუ ის ბოლო ჯაჭვის ნაწილია მაში საჭირო იქნება მთლიანი ჯაჭვის მნიშვნელობის გათვალისწინება
// ეს კი ტექნიკურად ნიშნავს რომ ციკლის დასრულების შემდეგ ჩვენ ჯამურ მნიშვნელობას უნდა დავამატოთ
// მასივის ბოლო ელემენტის შესაბამისი მნიშვნელობა რასაც გამოვითვლით შემდეგი ფორმულით:
// timeSeries[timeSeries.length - 1] + duration - pointer

console.log(findPoisonedDuration([1, 4], 2));
