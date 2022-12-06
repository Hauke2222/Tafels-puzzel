let table = 9;
let boardTiles = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

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

function genBoard(table) {
  for (let i = 1; i < 11; i++) {
    boardTiles[i - 1] = i;
    boardTiles[i + 9] = "*";
    boardTiles[i + 19] = table;
    boardTiles[i + 29] = "=";
    boardTiles[i + 39] = i * table;
  }
}

function displayBoard(array) {
  let wrapper = document.getElementById("wrapper")
  for (let index = 0; index < array.length; index++) {
    let div = document.createElement("div");
    div.innerHTML = array[index];
    div.classList.add("box");
    wrapper.appendChild(div)
    
  }
}

genBoard(table);
// shuffleBoard(boardTiles);
displayBoard(boardTiles);
console.log(boardTiles);
