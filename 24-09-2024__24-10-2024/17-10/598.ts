// რა არ არის ჩვენი მიზანი: ჩვენ არ გვეევალება ყველა ოპერაციის შესრულება, თუ ეს პასუხის მისაღებად არ დაგვჭირდება
// ჩვენი მიზანი არის გავიგოთ იმ ელემენტის რაოდენობა რომლის მნიშვნელობაც უმეტესია მატრიცის ყველა მნიშვნელობებს შორის
// სხვა სიტყვებით რომ ვთქვათ ვეძებთ უბანს რომელზეც ყველაზე მეტი ოპერაცია სრულდება დავაბრუნებთ ამ უბანის ზომას
// თ ოპერაციას არ ვასრულებთ მაშინ ყველა მნიშვნელობა ტოლია შესაბამისად ვაბრუნებთ მთლიანი მატრიცის ზომას

// პირველ რიგში თუ ოპერაციათა მასივი ცარიელია დავაბრუნოთ მატრიცის ზომა როგორც ფუნქციიეს შედეგი
// ხოლო თუ გადმოცემული გვაქვს ოპერაციები მაშინ
// რადგან ყველა ოპერაცია მიგვითითებს უბნის გარე საზღვარს ხოლო საწყისი ყველა უბნნისთვის არის (0, 0)
// ეს ნიშნავს რომ უნდა ვიპოვოთ ოპერაციათა უმცირესი თანაკვეთა

// ოპერაციათა უმცირეს თანაკვეთაში ვიგულისხმოთ ის უბანი რომელზეც ყველაზე ხშირად ტარდება ოპერაცია
// რადგან 0, 0 ყველა უბანში შედის, ჩვენ გვჭირდება რომ დავითვალოთ m და n განზომილებების უმცირესი მნიშვნელობები გადმოცემულ ოპერაციათა წყვილებში
