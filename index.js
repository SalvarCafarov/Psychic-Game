//dom
const win = document.querySelector(".win-count");
const lose = document.querySelector(".lose-count");
const guess = document.querySelector(".guesses-count");
const guesses = document.querySelector(".guesses");

const getNumb = () => {
  let numb = Math.floor(Math.random() * 9);
  return numb;
};
const display = () => {
  win.innerHTML = game.win;
  lose.innerHTML = game.lose;
  guess.innerHTML = game.guessRemain;
  guesses.innerHTML = game.guesses;
};
const game = {
  win: 0,
  lose: 0,
  number: getNumb(),
  guessRemain: 9,
  guesses: [],
  checking: function (guess) {
    if (this.number === guess) {
      this.win += 1;
      this.number = getNumb();
      console.log(this.win);
      this.guessRemain = 9;
      this.guesses = [];
    } else {
      if (this.guessRemain === 0) {
        this.lose += 1;
        this.number = getNumb();
        this.guessRemain = 9;
        this.guesses = [];
      }
    }
  },
};
console.log(game.number);
display()
window.addEventListener("keydown", (e) => {
  let value = e.key;
  if (game.guesses.includes(value)) {
  } else {
    game.checking(Number(value));
    game.guesses.push(value);
   
    game.guessRemain -= 1;
    display();
  }
});
