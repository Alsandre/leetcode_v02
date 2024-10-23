// ამოცანის მიზანია თითოეული უჯრისთვის დავითვალოთ საშუალო
// პირდაპირი გადაჭრა იქნება ისეთი ფუნქციიეს შექმნა რომელშიც მოვიძევთ ყველა მეზობელს და დავივლით საშუალოს
// შემდეგ კი ყოველი უჯირსთვის გავუშვებთ ხსენებულ ფუნქციას

// უჯრა შეიძლება იყოს კუთხის, გვერდის ან ცენრალური
// შესაბამისად გვაქვს სამი შემთხვევა გასათვალისწინებელი
// ასევე საყურადღებოა ის ფაქტიც რომ მეზობელი უჯრა შეიძლება იყოს ცარიელი
// თუ მეზობელი ცარიელი უჯრაა მას არ ვითვალისწინებთ საშუალოს დათვლისას

// ალგორითმი საშუალოს მთვლელი
// ნაბიჯი 1 - თუ მოცემული უჯრა კუთხისაა მაშინ ავჯამოთ 2x2 მატრიცა მის გარშემო და გავყოთ 4-ზე
// ნაბიჯი 2 - თუ მოცემული უჯრა კედლისაა მაშინ ავჯამოთ 2x3 მატრიცა და გავყოთ 6-ზე
// ნაბიჯი 3 - ავჯამოთ 3x3 მატრიცა მოცემული უჯრის გარშემო და გავყოთ 9-ზე

// ძირითადი ალგორითმი
// ნაბიჯი 1 - შევქმნათ ცარიელი მასივი smoother რომელშიც შევინახავთ გარდაქმნილ მასივს
// ნაბიჯი 2 - შევქმნათ ციკლი გადმოცემული მატრიცის ყოველი ელემენტის გამოსაძახებლად
// ნაბიჯი 3 - თითოეული ელემენტისთვის გამოვიძახოთ საშუალოს მთვლელი და მიღებული შედეგი ჩავსვათ შესაბამის პოზიციაზე smoother მასივში

function imageSmoother(img: number[][]): number[][] {
  let height = img.length;
  let width = img[0].length;
  let smoother: number[] = [];

  for (let k = 0; k < img.length; k++) {
    for (let m = 0; m < img[0].length; m++) {
      if (averageCounter(k, m) !== undefined)
        smoother.push(averageCounter(k, m));
    }
  }

  function averageCounter(i: number, j: number): number {
    let isTL = i === 0 && j === 0;
    let isTR = i === 0 && j === width - 1;
    let isBL = i === height - 1 && j === 0;
    let isBR = i === height - 1 && j === width - 1;

    let isTEdge = i === 0 && j > 0 && j < width - 1;
    let isREdge = i > 0 && i < height - 1 && j === width - 1;
    let isBEdge = i === height - 1 && j > 0 && j < width - 1;
    let isLEdge = i > 0 && i < height - 1 && j === 0;
    if (isTL) {
      let sum = img[i][j] + img[i][j + 1] + img[i + 1][j] + img[i + 1][j + 1];
      return Math.floor(sum) / 4;
    }
    if (isTR) {
      let sum = img[i][j] + img[i][j - 1] + img[i + 1][j] + img[i + 1][j - 1];
      return Math.floor(sum) / 4;
    }
    if (isBL) {
      let sum = img[i][j] + img[i][j + 1] + img[i - 1][j] + img[i - 1][j + 1];
      return Math.floor(sum) / 4;
    }
    if (isBR) {
      let sum = img[i][j] + img[i][j - 1] + img[i - 1][j] + img[i - 1][j - 1];
      return Math.floor(sum) / 4;
    }
    if (isTEdge) {
      let sum = 0;
      for (let r = 0; r < 2; r++) {
        for (let c = 0; c < 3; c++) {
          sum += img[i + r][j - 1 + c];
        }
      }
      return Math.floor(sum / 6);
    }
    if (isREdge) {
      let sum = 0;
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 2; c++) {
          sum += img[i - 1 + r][j - 1 + c];
        }
      }
      return Math.floor(sum / 6);
    }
    if (isBEdge) {
      let sum = 0;
      for (let r = 0; r < 2; r++) {
        for (let c = 0; c < 3; c++) {
          sum += img[i - 1 + r][j - 1 + c];
        }
      }
      return Math.floor(sum / 6);
    }
    if (isLEdge) {
      let sum = 0;
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 2; c++) {
          sum += img[i - 1 + r][j + c];
        }
      }
      return Math.floor(sum / 6);
    }
    let sum = 0;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        sum += img[i - 1 + r][j - 1 + c];
      }
    }
    return Math.floor(sum / 9);
  }
  console.log(smoother);
  return [smoother];
}

imageSmoother([
  [100, 200, 100],
  [200, 50, 200],
  [100, 200, 100],
]);
