var tempdictionary = [
  "CEE",
  "CEL",
  "CELT",
  "HOES",
  "HOO",
  "HOOT",
  "HOSE",
  "LEAN",
  "LEAS",
  "LEASE",
  "LEASH",
  "LOOT",
  "LOSE",
  "LOWS",
  "LYTE",
  "ROOS",
  "ROOT",
  "ROTE",
  "ROTES",
  "ROWS",
  "SANE",
  "SHOT",
  "SHOW",
  "SOOT",
  "WHOSE",
  "WOOSH",
  "SOT",
  "SOWOT",
  "NEE",
  "NASH",
  "NEC",
  "NAEO",
];

class Tile {
  constructor(letter, open) {
    this.letter = letter;
    this.open = open;
  }
}

class Board {
  board = [];
  rowsY;
  colsX;
  constructor(board) {
    this.rowsY = board.length;
    this.colsX = board[0].length;
    board.forEach((row) => {
      var parsedRow = [];
      row.forEach((char) => {
        parsedRow.push(new Tile(char, true));
      });
      this.board.push(parsedRow);
    });
  }

  printBoard() {
    var rowString = "";

    this.board.forEach((row) => {
      row.forEach((tile) => {
        rowString += tile.letter + " ";
      });
      rowString += "\n";
    });

    console.log(rowString);
  }
  mark(x, y) {
    if (x > -1 && x < this.colsX && y > -1 && y < this.rowsY) {
      if (this.board[y][x].open) {
        this.board[y][x].open = false;
      }
    }
  }

  unmark(x, y) {
    if (x > -1 && x < this.colsX && y > -1 && y < this.rowsY) {
      if (!this.board[y][x].open) {
        this.board[y][x].open = true;
      }
    }
  }

  canGo(x, y) {
    // console.log(`x - ${x} : y - ${y}`);

    if (x > -1 && x < this.colsX && y > -1 && y < this.rowsY) {
      return this.board[y][x].open;
    }

    // console.log(`cant go -- x - ${x} : y - ${y}`);

    return false;
  }

  getLetter(x, y) {
    return this.board[y][x].letter;
  }
}

var X = [1, 0, 0, -1, -1, 1, -1, 1];
var Y = [0, -1, 1, 0, -1, -1, 1, 1];

var allDir = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
];

var simpleDir = [
  [0, -1],
  [-1, 0],
  [1, 0],
  [0, 1],
];

var dictSet = new Set(dictArr);

// console.log(dictSet.has("LEAN"));
// console.log(dictSet.has("LEANN"));

// var sx = 3;
// var sy = 0;
// getWords(board, sx, sy, board.getLetter(sx, sy));
// console.log(board.board);
function convertBoardToArry(stringBoard) {
  var retArr = [];
  for (let i = 0; i < 4; i++) {
    var rowVal = [];
    for (let j = 0; j < 4; j++) {
      rowVal.push(stringBoard[i * 4 + j]);
    }
    retArr.push(rowVal);
  }
  return retArr;
}

function getWords(board, x, y, word) {
  board.mark(x, y);
  // console.log(word);
  // if (word.length > 10) return;

  if (word.length >= 3 && dictSet.has(word.toUpperCase())) {
    // console.log(`found word - ${word}`);
    if (word.length > 4) {
      console.log(`found word - ${word}`);
      $("#answers").append(`<p>${word}</p>`);
    }
  }

  for (var k = 0; k < 8; k++) {
    dx = x + allDir[k][0];
    dy = y + allDir[k][1];
    // console.log(`dx : ${simpleDir[k][0]} - dy : ${simpleDir[k][1]}`);
    if (board.canGo(dx, dy)) {
      getWords(board, dx, dy, word + board.getLetter(dx, dy));
    }
  }
  //   dx = x + 0;
  //   dy = y + 1;
  //   //   console.log(`before get words- ${dx} - ${dy}`);
  //   //   console.log(board.board[dy][dx].letter);
  //   if (board.canGo(dx, dy)) {
  //     getWords(board, dx, dy, (word += board.getLetter(dx, dy)));
  //   }
  board.unmark(x, y);
}
function onClickExecute() {
  // var stringBoard = "YNHMEIDFBPTFEUSA";
  var stringBoard = $("#boardInput").val().toUpperCase();
  console.log(stringBoard);

  var boardTiles = convertBoardToArry(stringBoard);

  // var boardTiles = [
  //   ["N", "A", "S", "H"],
  //   ["E", "E", "O", "W"],
  //   ["C", "L", "T", "O"],
  //   ["C", "Y", "R", "T"],
  // ];

  var board = new Board(boardTiles);
  console.log(`rows - ${board.rowsY}`);
  console.log(`cols - ${board.colsX}`);
  board.printBoard();

  for (let i = 0; i < board.rowsY; i++) {
    for (let j = 0; j < board.colsX; j++) {
      // console.log(board.board[i][j].letter);
      getWords(board, j, i, board.getLetter(j, i));
    }
  }
}

$("#boardInput").on("input", function () {
  // Print entered value in a div box
  // console.log($(this).val().replaceAll(" ", ""));
  $("#formattedBoardInput").val(
    $(this)
      .val()
      .toUpperCase()
      .replace(/\W/gi, "")
      .replace(/(.{1})/g, "$1 ")
      // .replace(/\W/gi, "")
      .replace(/(.{8})/g, "$1\n")
  );
  if ($(this).val().length == 16) {
    console.log("is 16 ");
  } else if ($(this).val().length > 16) {
    console.log("not 16 ");
    // $(this).val($(this).val().substr(0, 15));
    // console.log($(this).val().substr(0, 15));
  }
});

// $("#boardInput").on("keypress change", function () {
//   $(this).val(function (index, value) {
//     // console.log(value.length);
//     return value
//       .toUpperCase()
//       .replace(/\W/gi, "")
//       .replace(/(.{4})/g, "$1 ");
//   });
// });

// function onchangeText() {
//   console.log("change");
// }
