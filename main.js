let table = 9;
let boardTiles = [];

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
  for (let i = 1; i < 11; i++) {
    boardTiles[i - 1] = i;
    boardTiles[i + 9] = "*";
    boardTiles[i + 19] = table;
    boardTiles[i + 29] = "=";
    boardTiles[i + 39] = i * table;
  }
  boardTiles.push('empty')
}

function createBoard(arr) {
  let wrapper = document.getElementById("wrapper");
  wrapper.innerHTML = ''
  for (let index = 0; index < arr.length; index++) {
    let div = document.createElement("div");
    div.innerHTML = arr[index];
    div.id = index;
    div.classList.add("box");
    wrapper.appendChild(div);
  }
  const onClick = (e) => {
    console.log(e.target.id);
    nextToEmptyTile(e.target.id, boardTiles);
  };
  
  document.querySelectorAll(".box").forEach((el) => {
    el.addEventListener("click", onClick);
  });
  
}

function nextToEmptyTile(key, arr) {
  key = parseInt(key);
  let empty = arr.indexOf("empty");

  switch ("empty") {
    case arr[key + 1]:
      [arr[empty], arr[key]] = [arr[key], arr[empty]];
      createBoard(arr);
      break;
    case arr[key - 1]:
      [arr[empty], arr[key]] = [arr[key], arr[empty]];
      createBoard(arr);
      break;
    case arr[key + 10]:
      [arr[empty], arr[key]] = [arr[key], arr[empty]];
      createBoard(arr);
      break;
    case arr[key - 10]:
      [arr[empty], arr[key]] = [arr[key], arr[empty]];
      createBoard();
      break;
    default:
      break;
  }
}

fillArr(table);
// shuffleBoard(boardTiles);
createBoard(boardTiles);
