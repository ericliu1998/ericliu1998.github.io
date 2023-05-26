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
  oneCharacter: { 1: "Character" },
  twoCharacter: { 2: "Character" },
  threeCharacter: { 3: "Character" },
  fourCharacter: { 4: "Character" },
  fiveCharacter: { 5: "Character" },
  sixCharacter: { 6: "Character" },
  sevenCharacter: { 7: "Character" },
  eightCharacter: { 8: "Character" },
  nineCharacter: { 9: "Character" },
  oneStick: { 1: "Stick" },
  twoStick: { 2: "Stick" },
  threeStick: { 3: "Stick" },
  fourStick: { 4: "Stick" },
  fiveStick: { 5: "Stick" },
  sixStick: { 6: "Stick" },
  sevenStick: { 7: "Stick" },
  eightStick: { 8: "Stick" },
  nineStick: { 9: "Stick" },
  oneCircle: { 1: "Circle" },
  twoCircle: { 2: "Circle" },
  threeCircle: { 3: "Circle" },
  fourCircle: { 4: "Circle" },
  fiveCircle: { 5: "Circle" },
  sixCircle: { 6: "Circle" },
  sevenCircle: { 7: "Circle" },
  eightCircle: { 8: "Circle" },
  nineCircle: { 9: "Circle" },
  dungOneWind: { 1: "Wind" },
  naamTwoWind: { 2: "Wind" },
  saiThreeWind: { 3: "Wind" },
  pakFourWind: { 4: "Wind" },
  jungSevenWind: { 6: "Wind" },
  fatEightWind: { 7: "Wind" },
  bakNineWind: { 8: "Wind" },
};

var arrayToUnicode = {
  '{"1":"Character"}': "oneCharacter",
  '{"2":"Character"}': "twoCharacter",
  '{"3":"Character"}': "threeCharacter",
  '{"4":"Character"}': "fourCharacter",
  '{"5":"Character"}': "fiveCharacter",
  '{"6":"Character"}': "sixCharacter",
  '{"7":"Character"}': "sevenCharacter",
  '{"8":"Character"}': "eightCharacter",
  '{"9":"Character"}': "nineCharacter",
  '{"1":"Stick"}': "oneStick",
  '{"2":"Stick"}': "twoStick",
  '{"3":"Stick"}': "threeStick",
  '{"4":"Stick"}': "fourStick",
  '{"5":"Stick"}': "fiveStick",
  '{"6":"Stick"}': "sixStick",
  '{"7":"Stick"}': "sevenStick",
  '{"8":"Stick"}': "eightStick",
  '{"9":"Stick"}': "nineStick",
  '{"1":"Circle"}': "oneCircle",
  '{"2":"Circle"}': "twoCircle",
  '{"3":"Circle"}': "threeCircle",
  '{"4":"Circle"}': "fourCircle",
  '{"5":"Circle"}': "fiveCircle",
  '{"6":"Circle"}': "sixCircle",
  '{"7":"Circle"}': "sevenCircle",
  '{"8":"Circle"}': "eightCircle",
  '{"9":"Circle"}': "nineCircle",
  '{"1":"Wind"}': "dungOneWind",
  '{"2":"Wind"}': "naamTwoWind",
  '{"3":"Wind"}': "saiThreeWind",
  '{"4":"Wind"}': "pakFourWind",
  '{"6":"Wind"}': "jungSevenWind",
  '{"7":"Wind"}': "fatEightWind",
  '{"8":"Wind"}': "bakNineWind",
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
console.log(prints);

function onClickDelete() {
  selectedTiles.pop();
  updateSelectedTilesView();
}

function onClickExecute() {
  //   combineAndSortTiles();
}

function onClickSortTiles() {
  combineAndSortTiles();
}

function addTileToLabel(dom) {
  selectedTiles.push(dom.id);
  updateSelectedTilesView();
}

function updateSelectedTilesView() {
  var selectedTilesLabel = document.getElementById("selectedTilesLabel");
  selectedTilesLabel.innerHTML = "";
  selectedTiles.forEach((e) => {
    selectedTilesLabel.innerHTML += nameToUniCode[e];
  });
}
function updateSortedTilesView() {
  var selectedTilesLabel = document.getElementById("sortedTilesLabel");
  selectedTilesLabel.innerHTML = "";
  sortedTiles.forEach((e) => {
    selectedTilesLabel.innerHTML += nameToUniCode[e];
  });
}

function combineAndSortTiles() {
  var refinedSelectedTiles = convertTilesToArray();
  var charTiles = [];
  var stickTiles = [];
  var circleTiles = [];
  var windTiles = [];
  refinedSelectedTiles.forEach((e) => {
    if (Object.values(e)[0] == "Character") {
      charTiles.push(e);
    } else if (Object.values(e)[0] == "Stick") {
      stickTiles.push(e);
    } else if (Object.values(e)[0] == "Circle") {
      circleTiles.push(e);
    } else if (Object.values(e)[0] == "Wind") {
      windTiles.push(e);
    }
  });
  sortTiles(charTiles);
  sortTiles(stickTiles);
  sortTiles(circleTiles);
  sortTiles(windTiles);

  var convertToViewableTiles = [];
  charTiles.forEach((e) => {
    convertToViewableTiles.push(arrayToUnicode[JSON.stringify(e)]);
  });
  stickTiles.forEach((e) => {
    convertToViewableTiles.push(arrayToUnicode[JSON.stringify(e)]);
  });
  circleTiles.forEach((e) => {
    convertToViewableTiles.push(arrayToUnicode[JSON.stringify(e)]);
  });
  windTiles.forEach((e) => {
    convertToViewableTiles.push(arrayToUnicode[JSON.stringify(e)]);
  });

  sortedTiles = convertToViewableTiles;
  updateSortedTilesView();
}

function sortTiles(tiles) {
  tiles.sort(function (a, b) {
    return Object.keys(a)[0] - Object.keys(b)[0];
  });
}

function convertTilesToArray() {
  var returnVal = [];
  selectedTiles.forEach((e) => {
    returnVal.push(unicodeToArray[e]);
  });
  return returnVal;
}
