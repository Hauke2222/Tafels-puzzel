let table = 9;
const nbRows = 10;
let boardTiles = [];
let solvedBoard = [];

function shuffleBoard(array) {
  let m = array.length;
  let t, i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
}

function fillArr(table) {
  document.getElementsByTagName("h1")[0].innerHTML = `Tafel van ${table}.`;
  for (let i = 1; i < 11; i++) {
    boardTiles[i - 1] = { val: i, empty: false };
    boardTiles[i + 9] = { val: "*", empty: false };
    boardTiles[i + 19] = { val: table, empty: false };
    boardTiles[i + 29] = { val: "=", empty: false };
    boardTiles[i + 39] = { val: i * table, empty: false };
  }
  boardTiles[49].empty = true;
}

function createBoard(arr) {
  let wrapper = document.getElementById("wrapper");
  wrapper.innerHTML = "";
  for (let index = 0; index < arr.length; index++) {
    let div = document.createElement("div");
    div.innerHTML = arr[index].val;
    div.id = index;
    div.classList.add("box");
    if (div.id == 49) {
      div.classList.add("gray");
    }
    if (arr[index].empty === true && div.id != 49) {
      div.innerHTML = " ";
    }
    wrapper.appendChild(div);
  }
  const onClick = (e) => {
    nextToEmptyTile(e.target.id, boardTiles);
  };

  document.querySelectorAll(".box").forEach((el) => {
    el.addEventListener("click", onClick);
  });
}

function getColumn(position) {
  return Math.floor(position / nbRows) * 1 + 1;
}

function getRow(position) {
  return (position % nbRows) + 1;
}

function nextToEmptyTile(key, arr) {
  key = parseInt(key);
  const empty = arr.findIndex((index) => index.empty === true);

  // rule: je mag niet EN van rij EN van kolom veranderen
  if (getColumn(key) !== getColumn(empty) && getRow(key) !== getRow(empty)) {
    console.error("Border reached!");
    return;
  }

  switch (true) {
    case arr[key + 1]?.empty:
      [arr[empty], arr[key]] = [arr[key], arr[empty]];
      break;
    case arr[key - 1]?.empty:
      [arr[empty], arr[key]] = [arr[key], arr[empty]];
      break;
    case arr[key + 10]?.empty:
      [arr[empty], arr[key]] = [arr[key], arr[empty]];
      break;
    case arr[key - 10]?.empty:
      [arr[empty], arr[key]] = [arr[key], arr[empty]];
      break;
    default:
      return;
  }
  arr[key].empty = true;
  arr[empty].empty = false;

  return createBoard(arr);
}

fillArr(table);
// solvedBoard = boardTiles;
// shuffleBoard(boardTiles);
createBoard(boardTiles);
