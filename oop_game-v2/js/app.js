/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
};

let game;
const startGameButton = document.querySelector('#btn__reset');
startGameButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});

// Add click event listener to all of the onscreen keys
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    })
})
