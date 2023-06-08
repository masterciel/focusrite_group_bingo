function countWinningConditions(boardStr, calledNumbersStr) {
  const rows = boardStr
    .split('\n')
    .map((row) => row.trim().split(' ').map(Number));
  const columns = rows[0].map((_, i) => rows.map((row) => row[i]));
  let winningConditions = 0;
  for (const group of [...rows, ...columns]) {
    if (!group.every((number) => calledNumbersStr.includes(number))) {
      winningConditions++;
    }
  }
  return winningConditions;
}

function winningBoardGame(boards, calledNumbersStr) {
  let maxWinningConditions = Number.NEGATIVE_INFINITY;
  let maxWinningBoard = Number.NEGATIVE_INFINITY;
  boards.forEach((board, i) => {
    const winningConditions = countWinningConditions(board, calledNumbersStr);
    if (winningConditions > maxWinningConditions) {
      maxWinningConditions = winningConditions;
      maxWinningBoard = i;
    }
  });
  return maxWinningBoard;
}

const calledNumbers =
  '7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1';
const calledNumbers1 =
  '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25';
const boards = [
  `
    22 13 17 11 0
    8 2 23 4 24
    21 9 14 16 7
    6 10 3 18 5
    1 12 20 15 19
  `,
  `
    3 15 0 2 22
    9 18 13 17 5
    19 8 7 25 23
    20 11 10 24 4
    14 21 16 12 6
  `,
  `
    14 21 17 24 4
    10 16 15 9 19
    18 8 23 26 20
    22 11 13 6 5
    2 0 12 3 7
  `,
];

const boards1 = [
  `
    1 2 3 4 5
    6 7 8 9 10
    11 12 13 14 15
    16 17 18 19 20
    21 22 23 24 25
  `,
  `
    1 2 3 4 5
    6 7 8 9 10
    11 12 13 14 15
    16 17 18 19 20
    21 22 23 24 25
  `,
  `
    1 2 3 4 5
    1 2 3 4 5
    1 2 3 4 5
    1 2 3 4 5
    1 2 3 4 5
  `,
  `
    5 4 3 2 1
    10 9 8 7 6
    15 14 13 12 11
    20 19 18 17 16
    25 24 23 22 21
  `,
];

console.assert(
  winningBoardGame(boards, calledNumbers) === 0,
  'First board should be winner'
);
console.assert(
  winningBoardGame(boards1, calledNumbers1) === 0,
  'First board should be a winner'
);
