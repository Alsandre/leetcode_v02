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
