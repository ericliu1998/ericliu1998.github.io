var selectedTiles = [];
var sortedTiles = [];
var unicodeToArray2 = {
  "&#x1F007;": { 1: "Character" },
  "&#x1F008;": { 2: "Character" },
  "&#x1F009;": { 3: "Character" },
  "&#x1F00A;": { 4: "Character" },
  "&#x1F00B;": { 5: "Character" },
  "&#x1F00C;": { 6: "Character" },
  "&#x1F00D;": { 7: "Character" },
  "&#x1F00E;": { 8: "Character" },
  "&#x1F00F;": { 9: "Character" },
  "&#x1F010;": { 1: "Stick" },
  "&#x1F011;": { 2: "Stick" },
  "&#x1F012;": { 3: "Stick" },
  "&#x1F013;": { 4: "Stick" },
  "&#x1F014;": { 5: "Stick" },
  "&#x1F015;": { 6: "Stick" },
  "&#x1F016;": { 7: "Stick" },
  "&#x1F017;": { 8: "Stick" },
  "&#x1F018;": { 9: "Stick" },
  "&#x1F019;": { 1: "Circle" },
  "&#x1F01A;": { 2: "Circle" },
  "&#x1F01B;": { 3: "Circle" },
  "&#x1F01C;": { 4: "Circle" },
  "&#x1F01D;": { 5: "Circle" },
  "&#x1F01E;": { 6: "Circle" },
  "&#x1F01F;": { 7: "Circle" },
  "&#x1F020;": { 8: "Circle" },
  "&#x1F021;": { 9: "Circle" },
  "&#x1F000;": { 1: "Wind" },
  "&#x1F001;": { 2: "Wind" },
  "&#x1F002;": { 3: "Wind" },
  "&#x1F003;": { 4: "Wind" },
  "&#x1F004;": { 6: "Wind" },
  "&#x1F005;": { 7: "Wind" },
  "&#x1F006;": { 8: "Wind" },
};

var unicodeToArray = {
  char1: { 1: "Character" },
  char2: { 2: "Character" },
  char3: { 3: "Character" },
  char4: { 4: "Character" },
  char5: { 5: "Character" },
  char6: { 6: "Character" },
  char7: { 7: "Character" },
  char8: { 8: "Character" },
  char9: { 9: "Character" },
  stick1: { 1: "Stick" },
  stick2: { 2: "Stick" },
  stick3: { 3: "Stick" },
  stick4: { 4: "Stick" },
  stick5: { 5: "Stick" },
  stick6: { 6: "Stick" },
  stick7: { 7: "Stick" },
  stick8: { 8: "Stick" },
  stick9: { 9: "Stick" },
  circle1: { 1: "Circle" },
  circle2: { 2: "Circle" },
  circle3: { 3: "Circle" },
  circle4: { 4: "Circle" },
  circle5: { 5: "Circle" },
  circle6: { 6: "Circle" },
  circle7: { 7: "Circle" },
  circle8: { 8: "Circle" },
  circle9: { 9: "Circle" },
  wind1: { 1: "Wind" },
  wind2: { 2: "Wind" },
  wind3: { 3: "Wind" },
  wind4: { 4: "Wind" },
  wind5: { 6: "Wind" },
  wind6: { 7: "Wind" },
  wind7: { 8: "Wind" },
};

var arrayToUnicode = {
  '{"1":"Character"}': "char1",
  '{"2":"Character"}': "char2",
  '{"3":"Character"}': "char3",
  '{"4":"Character"}': "char4",
  '{"5":"Character"}': "char5",
  '{"6":"Character"}': "char6",
  '{"7":"Character"}': "char7",
  '{"8":"Character"}': "char8",
  '{"9":"Character"}': "char9",
  '{"1":"Stick"}': "stick1",
  '{"2":"Stick"}': "stick2",
  '{"3":"Stick"}': "stick3",
  '{"4":"Stick"}': "stick4",
  '{"5":"Stick"}': "stick5",
  '{"6":"Stick"}': "stick6",
  '{"7":"Stick"}': "stick7",
  '{"8":"Stick"}': "stick8",
  '{"9":"Stick"}': "stick9",
  '{"1":"Circle"}': "circle1",
  '{"2":"Circle"}': "circle2",
  '{"3":"Circle"}': "circle3",
  '{"4":"Circle"}': "circle4",
  '{"5":"Circle"}': "circle5",
  '{"6":"Circle"}': "circle6",
  '{"7":"Circle"}': "circle7",
  '{"8":"Circle"}': "circle8",
  '{"9":"Circle"}': "circle9",
  '{"1":"Wind"}': "wind1",
  '{"2":"Wind"}': "wind2",
  '{"3":"Wind"}': "wind3",
  '{"4":"Wind"}': "wind4",
  '{"6":"Wind"}': "wind5",
  '{"7":"Wind"}': "wind6",
  '{"8":"Wind"}': "wind7",
};

var nameToUniCode = {
  oneCharacter: "&#x1F007;",
  twoCharacter: "&#x1F008;",
  threeCharacter: "&#x1F009;",
  fourCharacter: "&#x1F00A;",
  fiveCharacter: "&#x1F00B;",
  sixCharacter: "&#x1F00C;",
  sevenCharacter: "&#x1F00D;",
  eightCharacter: "&#x1F00E;",
  nineCharacter: "&#x1F00F;",
  oneStick: "&#x1F010;",
  twoStick: "&#x1F011;",
  threeStick: "&#x1F012;",
  fourStick: "&#x1F013;",
  fiveStick: "&#x1F014;",
  sixStick: "&#x1F015;",
  sevenStick: "&#x1F016;",
  eightStick: "&#x1F017;",
  nineStick: "&#x1F018;",
  oneCircle: "&#x1F019;",
  twoCircle: "&#x1F01A;",
  threeCircle: "&#x1F01B;",
  fourCircle: "&#x1F01C;",
  fiveCircle: "&#x1F01D;",
  sixCircle: "&#x1F01E;",
  sevenCircle: "&#x1F01F;",
  eightCircle: "&#x1F020;",
  nineCircle: "&#x1F021;",
  dungOneWind: "&#x1F000;",
  naamTwoWind: "&#x1F001;",
  saiThreeWind: "&#x1F002;",
  pakFourWind: "&#x1F003;",
  jungSevenWind: "&#x1F004;",
  fatEightWind: "&#x1F005;",
  bakNineWind: "&#x1F006;",
};
var test2 = { '{ 8: "Wind" }': "bakNineWind" };

var allLis = document.getElementsByTagName("li");
var prints = "{";
var count = 0;
for (const tileHtml in allLis) {
  if (allLis[tileHtml].id) {
    prints +=
      "'" +
      JSON.stringify(Object.values(unicodeToArray)[count]) +
      "':'" +
      Object.keys(unicodeToArray)[count] +
      "',";

    count++;
  }
}
prints += "}";

function onClickDelete() {
  selectedTiles.pop();
  updateSelectedTilesView();
  combineAndSortTiles();
  document.getElementById("tileCount").innerHTML = selectedTiles.length;
  document.getElementById("isWinning").innerHTML = "";
  document.getElementById("WinningTiles").innerHTML = "";
}
function onClickTest() {
  console.log(selectedTiles);
  console.log(sortedTiles);
}
function onClickExecute() {
  document.getElementById("WinningTiles").innerHTML = "";
  document.getElementById("isWinning").innerHTML = "";
  var loadingImg = document.getElementById("loadingimg");
  loadingImg.hidden = false;
  //   combineAndSortTiles();
  fetch("https://mj-solver-api.onrender.com/isWinningHand", {
    // fetch("http://localhost:3000/isWinningHand", {
    method: "POST",
    body: JSON.stringify(selectedTiles),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      var isWinningPar = document.getElementById("isWinning");
      if (selectedTiles.length == 14) {
        if (json) {
          isWinningPar.innerHTML = "Winning";
        } else {
          isWinningPar.innerHTML = "Losing";
        }
      } else {
        console.log("is object");
        updateWinningTilesView(json);
      }
    })
    .finally(() => {
      loadingImg.hidden = true;
    });
}

// {suit: string, value: int}
function addTileToLabel(card) {
  selectedTiles.push(card);
  updateSelectedTilesView();
  combineAndSortTiles();
  document.getElementById("tileCount").innerHTML = selectedTiles.length;
  document.getElementById("isWinning").innerHTML = "";
  document.getElementById("WinningTiles").innerHTML = "";
}

function updateWinningTilesView(tiles) {
  document.getElementById("WinningTiles").innerHTML = "";
  console.log(tiles.length);
  if (tiles.length >= 1) {
    tiles.forEach((e) => {
      const element = document.getElementById("WinningTiles");
      const img = document.createElement("img");
      img.src = `images\\mahjong\\tiles\\${e.suit}${e.value}.png`;
      img.height = "75";
      element.append(img);
    });
  } else {
    console.log("no cards");
    document.getElementById("WinningTiles").innerHTML = "No cards";
  }
}
function updateSelectedTilesView() {
  var executeButton = document.getElementById("executeButton");
  if (selectedTiles.length == 13 || selectedTiles.length == 14) {
    executeButton.disabled = false;
  } else {
    executeButton.disabled = true;
  }

  document.getElementById("selectedTilesLabel").innerHTML = "";
  selectedTiles.forEach((e) => {
    const element = document.getElementById("selectedTilesLabel");
    const img = document.createElement("img");
    img.src = `images\\mahjong\\tiles\\${e.suit}${e.value}.png`;
    img.height = "65";
    element.append(img);
  });
}

function updateSortedTilesView() {
  var selectedTilesLabel = document.getElementById("sortedTilesLabel");
  selectedTilesLabel.innerHTML = "";
  sortedTiles.forEach((e) => {
    // selectedTilesLabel.innerHTML += nameToUniCode[e];
    const element = document.getElementById("sortedTilesLabel");
    const img = document.createElement("img");
    img.src = `images\\mahjong\\tiles\\${e.suit}${e.value}.png`;
    img.height = "65";
    element.append(img);
  });
}

function combineAndSortTiles() {
  var refinedSelectedTiles = selectedTiles;
  var charTiles = [];
  var stickTiles = [];
  var circleTiles = [];
  var windTiles = [];
  refinedSelectedTiles.forEach((e) => {
    if (e.suit == "character") {
      charTiles.push(e);
    } else if (e.suit == "bamboo") {
      stickTiles.push(e);
    } else if (e.suit == "dot") {
      circleTiles.push(e);
    } else if (e.suit == "honor") {
      windTiles.push(e);
    }
  });
  sortTiles(charTiles);
  sortTiles(stickTiles);
  sortTiles(circleTiles);
  sortTiles(windTiles);

  var convertToViewableTiles = [];
  circleTiles.forEach((e) => {
    convertToViewableTiles.push(e);
  });
  stickTiles.forEach((e) => {
    convertToViewableTiles.push(e);
  });
  charTiles.forEach((e) => {
    convertToViewableTiles.push(e);
  });
  windTiles.forEach((e) => {
    convertToViewableTiles.push(e);
  });

  sortedTiles = convertToViewableTiles;
  updateSortedTilesView();
}

function sortTiles(tiles) {
  tiles.sort(function (a, b) {
    return a.value - b.value;
  });
}

function convertTilesToArray() {
  var returnVal = [];
  selectedTiles.forEach((e) => {
    returnVal.push(unicodeToArray[e]);
  });
  return returnVal;
}
