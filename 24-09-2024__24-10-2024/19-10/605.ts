// ინტუიცია მკარნახობს, რომ შესაძლებლობების ძიება უფრო გაართულებს საქმეს ვიდრე რეალურად ჩარგვა ყვავილების
// გავშალოთ თემა, შესაძლებლობების ძიებაში ვგულისხმობ მიღებული მასივის შესწავლას იმის დასადგენად თუ რამდენი ყვავილის ჩარგვა შეგვიძლია
// ეს პროცესი ურო რთული ჩანს რადგან ერთი და იგივე წყებას შესაძლოა ჰქონდეს სხვადასხვა ვარიაციები, რაც მოითხოვს სხვადასხვა კომბინაციების გათვალისწინებას
// შესაბამისად რთულდება გადაწყვეტილების მიღების ლოგიკა და იზრდება ინფორმაციის შესანახად საძირო მეხსიერების მოცულობა

// მეორეს მხრივ თუ რეალურად გარდავქმნით მიღებულ მასივს და ჩავრგავთ მასში ყვავილებს, გადაწყვეტილება ლოკალური ხდება 
// შესაბამისად გადაყვეტილების მიღების ლოგიკაც მარტივდება
// ამასთან არ გვჭირდება დამატებითი მეხსიერება ინფორმაციის შესანახად

// ალგორითმი:
// ნაბიჯი 1 - შევქმნათ ციკლი გადმოცემული მასივის ელემენტების გამოსაძახებლად
// ნაბიჯი 2 - თუ ამჟამინდელი ელემენტი ვალიდური ქოთანია, ჩავრგოთ მასში ყვავილი და შევამციროთ ყვავილების რაოდენობა
// ნაბიჯი 3 - ციკლის დასრულების შემდეგ თუ დაგვღცა ჩაურგველი ყვავილები დავაბრუნოთ false  სხვა შემთხვევაში დავაბრუნოთ true როგორც ფუნქციის შედეგი