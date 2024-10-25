// ამოცანაში შეიძლება ითქვას რომ მოცემულია ალგორითმი, რომლის იმპლემენტირებაც უნდა მოვახდინოთ კოდში
// პროგრამულად ალგორითმის სახე იქნება შემდეგი:

// ალგორითმი:
// შევქმნათ ქულების შემნახველი მასივი board
// შევქმნათ ციკლი გადმოცემული მასივის ელემენტებზე იტერაციისთვის
// შევქმნათ switch გამოსახულება და დავაკვირდეთ აქტიურ ელემენტს
// თუ ელემენტი არის C, მაშინ წავშალოთ board დან ბოლო ჩანაწერი
// თუ ელემენტი არის D, მაშინ დავამატოთ ახალი ქულა, რომელიც გაორკეცებული წინა ქულა იქნება
// თუ ელემენტი არის +, მაშინ დავამატოთ ახალი ქულა, რომელიც წინა ორი ქულის ჯამი იქნება
// სხვა შემთხვევაში გვაქვს რიცხვი რომელიც შეგვყავს board ში როგორც ახალი წევრი
// დავაბრუნოთ board მასივის ანაჯამი როგორც ფუნქციის შედეგი

function calPoints(operations: string[]): number {
  let board: number[] = [];
  for (let i = 0; i < operations.length; i++) {
    let el = operations[i];
    switch (el) {
      case "C":
        board.pop();
        break;
      case "D":
        board.push(+board[board.length - 1] * 2);
        break;
      case "+":
        board.push(+board[board.length - 1] + board[board.length - 2]);
        break;
      default:
        board.push(+el);
        break;
    }
  }
  return reduce(board);
  function reduce(arr: number[]) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
}
