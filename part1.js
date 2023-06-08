function checkBingo(calledNumbersString, cardString) {
  const calledNumbers = calledNumbersString.split(', ').map(Number);
  const rows = cardString
    .split('\n')
    .map((row) => row.trim().split(' ').map(Number));
  const columns = rows[0].map((_, i) => rows.map((row) => row[i]));
  for (const group of [...rows, ...columns]) {
    if (group.every((number) => calledNumbers.includes(number))) {
      return true;
    }
  }
  return false;
}

const calledNumbers =
  '7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1';
const calledNumbers1 =
  '1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25';
const calledNumbers2 =
  '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25';
const card = `22 13 17 11 0
              8 2 23 4 24
              21 9 14 16 7
              6 10 3 18 5
              1 12 20 15 19`;
const card1 = `1 2 3 4 5
               6 7 8 9 10
               11 12 13 14 15
               16 17 18 19 20
               21 22 23 24 25`;
const card2 = `1 2 3 4 5
               2 1 4 3 5
               3 4 2 1 5
               5 1 3 4 2
               4 5 1 2 3`;

console.assert(
  checkBingo(calledNumbers, card) === true,
  'The board should be a winner'
);
console.assert(
  checkBingo(calledNumbers1, card1) === true,
  'The board should be a winner'
);
console.assert(
  checkBingo(calledNumbers2, card2) === true,
  'The board should be a winner'
);
