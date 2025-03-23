(function task(){
  `
We need a Game constructor that we can use to create a new game object. When we plan out the constructor, we need to examine all the states that a game needs to track.

    The word chosen for the current game.
    Number of incorrect guesses: this controls the number of apples we show.
    All the letters guessed: the letters will show for "Guesses"
    Total allowed wrong guesses: this should be 6, since we only have 6 apples!

A game object, after it's constructed, should be able to do the following:

    It needs to choose a word from the words array as the word of the game. If all words are chosen, show the "Sorry, I've run out of words!" message.
    Number of incorrect guesses should be initialized to 0.
    The letters guessed should be initialized as an empty array.
    Set total allowed wrong guesses to 6.
    Create blanks in the "Word:" container. The number of blanks should be the same as the length of the chosen word.

There is more than one way to implement the above requirements, and you could try to use both the pseudo-classical pattern or the OLOO pattern when it comes to the game object creation.
  `
})

class Game{

  constructor(documentObject){
    this.document = documentObject;
    this.wordPool = ['apple', 'bat', 'cat'];
    this.newGame();
  }

  newGame(){
    const selectedWord = this.randomWord();
    if (!selectedWord) {
      gameOverNoMoreWords();
      return;
    }
    this.secretWord = selectedWord;
    this.incorrectGuesses = new Set();
    this.lettersGuessed = new Set();
    this.draw();
    this.bindEvents();
  };

  get incorrectGuessesCount(){
    return this.incorrectGuesses.size;
  }

  hasGuessLimitBeenReached(){
    const guessLimit = 6;

    return this.incorrectGuessesCount === guessLimit;
  }

  //TODO: write this logic
  gameOverAllWordsUsed(){
    console.log("Sorry, I've run out of words!")
  }

  randomWord(){
    if (this.wordPool.length === 0) return;

    const randomIdx = Math.floor(Math.random() * 3);
    const word = this.wordPool[randomIdx];
    this.wordPool.splice(randomIdx, 1);

    return word;
  }

  draw(){
    this.drawSpaces();
    this.drawGuesses();
  }

  //TODO: change hardcoded guess
  drawSpaces(){
    let spaces = document.querySelector('#spaces');

    let table = this.document.createElement('table');
    let tr = this.document.createElement('tr');
    table.append(tr)

    let guess = "a";
    this.secretWord.split('').forEach((char) =>{
      const td = this.document.createElement('td');
      td.textContent = guess === char ? char : '_';
      tr.append(td);
    });
    spaces.append(table);
  }

  drawGuesses(){
    let guesses = document.querySelector('#guesses');

    let table = this.document.createElement('table');
    let tr = this.document.createElement('tr');
    table.append(tr)

    this.secretWord.split('').forEach((char) =>{
      const td = this.document.createElement('td');
      td.textContent = this.lettersGuessed.has(char) === char ? char : '_';
      tr.append(td);
    });
    guesses.append(table);
  }

  bindEvents(){
    this.document.addEventListener("keydown", (event) =>{

      function isKeyALetter(key){
        return key.length === 1 && /[a-z]/i.test(key)
      }

      if (!isKeyALetter(event.key)) return;
      const keyUpcased = event.key.toUpperCase();

      console.log(keyUpcased)

    })
  }


}


document.addEventListener("DOMContentLoaded", (event) =>{
  const game = new Game(document);

  // document.addEventListener("keydown", (event) =>{

  //   function isKeyALetter(key){
  //     return key.length === 1 && /[a-z]/i.test(key)
  //   }

  //   if (!isKeyALetter(event.key)) return;
  //   const keyUpcased = event.key.toUpperCase();

  //   console.log(keyUpcased)

  // })

})