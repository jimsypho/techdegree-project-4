/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }
     // Turn the phrase into an array that is split with a comma that separate each letter or space, then create LI elements for each item in the array and add css class names depending on if the item is a letter or a space.  Then append it to the game.
     addPhraseToDisplay() {
        const phraseDiv = document.querySelector('#phrase ul');
        const currentPhraseArr = this.phrase.split("");
            currentPhraseArr.forEach((currentPhrase, i) => {
                const li = document.createElement('li');
                if(currentPhrase !== ' ') {
                    li.classList.add("hide");
                    li.classList.add("letter");
                    li.classList.add(currentPhrase);
                    li.textContent = currentPhrase;
                } else {
                    li.classList.add('space');
                    li.textContent = currentPhrase;
                }
                phraseDiv.appendChild(li);
            });
     }


     // Get either a true or false value if the letter is present in the phrase
     checkLetter(letter) {
        if(this.phrase.includes(letter)) {  
            return true;
        } else {
            return false;
        }
     }
     // If the letter that was selected by the player matches a letter on the board, update the css classes to reveal it by utilizing "hide" and "show" classes
     showMatchedLetter(letter) {
        const selectedLetters = document.querySelectorAll('.letter');
        selectedLetters.forEach((selectedLetter) => {
            if(selectedLetter.textContent === letter) {
                selectedLetter.classList.remove('hide');
                selectedLetter.classList.add('show');
            }
        })
     }
 }