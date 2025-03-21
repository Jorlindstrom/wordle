import { selectWord } from './selectWord.js';
import { wordle } from './wordle.js';


const words = ["apple", "mango", "grape", "peach", "banana", "melon", "piano", "stark", "smaka", "pluto", "trams", "smaka","smart", "staka", "rakad"];
const length = 5;
const allowDuplicates = false;

const selectedWord = selectWord(words, length, allowDuplicates);

if (selectedWord) {
    console.log(`Dagens Wordle-ord: ${selectedWord}`);
    const guess = "piano";  // Exempelgissning
    console.log(wordle(guess, selectedWord));
} else {
    console.log("Inga passande ord hittades.");
}
