/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(missed, phrases, activePhrase) {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = 'null';
     }
     // Update this code to add new phrase options to the game
     createPhrases() {
        const phraseArr = [
            new Phrase('perfectly imperfect'),
            new Phrase('love for all'),
            new Phrase('believe in yourself'),
            new Phrase('fall seven times stand up eight'),
            new Phrase('be water my friend')
        ]
        return phraseArr;
     }
    // Hides the overlay screen and adds a random phrase to the game
     startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        const chosenPhrase = this.getRandomPhrase();
        chosenPhrase.addPhraseToDisplay();
        this.activePhrase = chosenPhrase;
     }
     // Selects a random phrase from the phraseArr array
     getRandomPhrase() {
        let index = Math.floor(Math.random() * this.phrases.length);
        let randomPhrase = this.phrases[index];
        return randomPhrase;
     }
     // Checks to see if a selected letter matches a leter on the board.  If true, the letter is revealed and the keyboard letter changes color.  If false, then a heart/life is removed and the keyboard letter is changed to a different color.  The clicked letter is disabled so that the user cannot click it twice.  A check is run to see if the player won the game.
     handleInteraction(selectedLetter) {
        if(this.activePhrase.checkLetter(selectedLetter.textContent) === true) {
            this.activePhrase.showMatchedLetter(selectedLetter.textContent);
            selectedLetter.classList.add('chosen');
            selectedLetter.disabled = true;
            this.checkForWin();
            if(this.checkForWin() === true) {
                this.gameOver();
            }
        } else {
            selectedLetter.classList.add('wrong');
            this.removeLife();
            selectedLetter.disabled = true;
        }  
     }
     // Removes a heart/life from the player each time they guess a letter incorrectly.  
     removeLife() {
        const tries = document.querySelectorAll('.tries img');
        this.missed++;
        for(let i = 0; i < tries.length; i++) {
            if(this.missed === 1) { 
                tries[4].src = "images/lostHeart.png";
            } else if (this.missed === 2) {
                tries[3].src = "images/lostHeart.png";
            } else if (this.missed === 3) {
                tries[2].src = "images/lostHeart.png";
            } else if (this.missed === 4) {
                tries[1].src = "images/lostHeart.png";
            } else if (this.missed === 5) {
                tries[0].src = "images/lostHeart.png";
            }
            if(this.missed === 5) {
                this.gameOver();
            }
        }
     }
     // This logic checks to see if the number of shown letters matches the length of the phrase.  
     checkForWin() {
        const show = document.querySelectorAll('.show');
        const lettersInPhrase = document.querySelectorAll('.letter');
        if (show.length === lettersInPhrase.length) {
            return true;
        }
     }
     // End the game by changing the display property of the overlay to flex and by adding a game over message.  This message will be different depending on if the user won or lost.  You can change the message in the conditional statements below
     gameOver() {
        const overlay = document.querySelector('#overlay');
        const gameOverMessage = document.querySelector('#game-over-message');
        overlay.style.display = 'flex';
        this.missed = 0;
        if (this.checkForWin() === true) {
            gameOverMessage.textContent = 'You won the game!';
            this.resetGame();
        } else {
            gameOverMessage.textContent = 'Sorry, you lost the game...';
            this.resetGame();
        }
     }
     // Reset the game by undoing everything that was originally done to create the initial game board.  Empty the phrase div, remove all of the class names that were added to they onscreen keyboard, and change all of the heart icons back into the live heart image.
     resetGame() {
        const phraseUl = document.querySelector('#phrase ul');
        const keys = document.querySelectorAll('#qwerty .key');
        const hearts = document.querySelectorAll('.tries img');
        phraseUl.innerHTML = '';
        keys.forEach((key) => {
            key.classList.remove('wrong');
            key.classList.remove('chosen');
            key.disabled = false;
        })
        hearts.forEach((heart) => {
            heart.src = 'images/liveHeart.png'; 
        })
     }
 }