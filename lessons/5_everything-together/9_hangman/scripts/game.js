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
    this.bindEvents();
    this.wordPool = ['APPLE', 'BAT', 'CAT'];
    this.newGame();
  }

  newGame(){
    const selectedWord = this.randomWord();
    const outOfWords = !selectedWord;
    console.log(selectedWord, outOfWords, this.wordPool.length)

    if (outOfWords) {
      this.handleNoMoreWords()
      return
    }

    this.clearGameState();

    this.clearMessage();
    this.clearSpaces();
    this.clearGuesses();
    this.clearCSS();

    this.secretWord = selectedWord;
    this.secretWordUniqueCharsCount = new Set(selectedWord.split('')).size;
    this.correctGuesses = new Set();
    this.incorrectGuesses = new Set();
    this.lettersGuessed = new Set();
    this.currentlyAcceptingGuesses = true;
    this.draw();
    // this.bindEvents();
  };

  get incorrectGuessesCount(){
    return this.incorrectGuesses.size;
  }

  get correctGuessesCount(){
    return this.correctGuesses.size;
  }

  isGameWon(){
    return this.secretWordUniqueCharsCount === this.correctGuessesCount;
  }

  isGameLost(){
    const guessLimit = 6;
    return this.incorrectGuessesCount === guessLimit;
  }

  handleWin(){
    let message = this.document.querySelector('#message');
    message.textContent = "You Win!";
    this.document.body.classList.add('win');
  }

  handleLoss(){
    let message = this.document.querySelector('#message');
    message.textContent = "You lose"
    this.document.body.classList.add('lose');
  }

  handleNoMoreWords(){
    let message = this.document.querySelector('#message');
    message.textContent = "Sorry! You're out of words"
  }


  randomWord(){
    if (this.wordPool.length === 0) return;

    const randomIdx = Math.floor(Math.random() * this.wordPool.length);
    const word = this.wordPool[randomIdx];
    this.wordPool.splice(randomIdx, 1);

    return word;
  }

  draw(){
    this.drawSpaces();
    this.drawGuesses();
  }

  drawSpaces(){
    let spaces = document.querySelector('#spaces');

    let table = this.document.createElement('table');
    let tr = this.document.createElement('tr');

    this.clearSpaces();
    this.secretWord.split('').forEach((char) =>{
      const td = this.document.createElement('td');
      td.textContent = this.correctGuesses.has(char) ? char : '_';
      tr.append(td);
    });
    table.append(tr)
    spaces.append(table);
  }

  clearGameState(){
    this.clearMessage();
    this.clearSpaces();
    this.clearGuesses();
    this.clearCSS();
  }

  clearMessage(){
    let message = this.document.querySelector('#message');
    message.innerHTML = "";
  }

  clearSpaces(){
    let spacesTable = this.document.querySelector('#spaces > table');
    spacesTable?.remove();
  }

  clearGuesses(){
    let guessesTable = this.document.querySelector('#guesses > table');
    guessesTable?.remove();
  }

  clearCSS(){
    this.document.body.classList.remove('win', 'lose');

    let apples = this.document.getElementById('apples');
    [...apples.classList].forEach((className) => {
      if (className.startsWith('guess_')) {
        apples.classList.remove(className);
      }
    })

  }

  drawGuesses(){
    let guesses = document.querySelector('#guesses');

    let table = this.document.createElement('table');
    let tr = this.document.createElement('tr');

    this.clearGuesses();
    this.lettersGuessed.forEach((incorrectGuess) =>{
      const td = this.document.createElement('td');
      td.textContent = incorrectGuess;
      tr.append(td);
    })

    table.append(tr)
    guesses.append(table);
  }

  bindEvents(){
    this.document.addEventListener("keydown", (event) => this.handleKeydown(event));
    this.document.addEventListener("click", (event) => this.handleClick(event));
  }

  handleClick(event){
    const target = event.target;
    if (target.id === "replay"){
      event.preventDefault();
      this.newGame()
    }
  }

  handleKeydown(event){
    if (!this.currentlyAcceptingGuesses) return;

    function isKeyALetter(key){
      return key.length === 1 && /[a-z]/i.test(key);
    }

    if (!isKeyALetter(event.key)) return;
    this.makeGuess(event.key);
    this.draw();
    if (this.isGameWon()) return this.handleWin();
    if (this.isGameLost()) return this.handleLoss();

  }

  //TODO: this should probably be made private
  makeGuess(letter){
    const letterUpcased = letter.toUpperCase();
    const letterWasAlreadyGuessed = this.lettersGuessed.has(letterUpcased);
    if (letterWasAlreadyGuessed) return;

    this.lettersGuessed.add(letterUpcased);

    const isGuessCorrect = new RegExp(letterUpcased).test(this.secretWord);

    isGuessCorrect
    ? this.handleCorrectGuess(letterUpcased)
    : this.handleIncorrectGuess(letterUpcased)
  }

  //TODO: this should probably be made private
  handleCorrectGuess(correctLetter){
    this.correctGuesses.add(correctLetter)
  }

  //TODO: this should probably be made private
  handleIncorrectGuess(incorrectLetter){
    this.incorrectGuesses.add(incorrectLetter)

    let apples = this.document.getElementById('apples');
    const newClass = "guess" + "_" + this.incorrectGuessesCount;
    apples.classList.add(newClass);
  }


}


document.addEventListener("DOMContentLoaded", (event) =>{
  const game = new Game(document);

})