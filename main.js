const { createApp } = Vue;

createApp({
  data() {
    return {
      table: 9,
      boardTiles: [
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
      ],
    };
  },
  methods: {
    shuffleBoard(array) {
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
    
    },
    genBoard(table){
      for (let i = 1; i < 11; i++) {
        this.boardTiles[i-1] = i;
        this.boardTiles[i+9] = "*";
        this.boardTiles[i+19] = table;
        this.boardTiles[i+29] = "=";
        this.boardTiles[i+39] = i * table;
      }
    }
  },
  computed: {},
  mounted() {
    this.genBoard(this.table);
    this.shuffleBoard(this.boardTiles)
    console.log(this.boardTiles);
  },
}).mount("#app");
