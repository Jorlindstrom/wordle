/*
Dela upp gissningsordet i bokstäver och lägg dem i array splitGuess
Dela upp svarsordet i bokstäver och lägg dem i array splitAnswer
Skapa arrayen statuses
Fyll statuses med ordet absent på lika många platser som gissningsordet




*/

// const guess = 'STORM';
// const rightAnswer = 'STARK';

export const wordle = (guess, rightAnswer) => {
    const splitAnswer = rightAnswer.split('');
    const splitGuess = guess.split('');
    const statuses = Array(guess.length).fill('absent');

    const letterCount = new Map();
    splitAnswer.forEach(letter => {
        letterCount.set(letter, (letterCount.get(letter) || 0) + 1);
    });

    splitGuess.forEach((letter, i) => {
        if(letter === splitAnswer[i]) {
            statuses[i] = 'correct';
            letterCount.set(letter, letterCount.get(letter) - 1);
        }
    }); 
    
    
    splitGuess.forEach((letter, i) => {
        if (statuses[i] === 'correct') return;
        
        if (letterCount.get(letter) > 0) {
            statuses[i] = 'present';
            letterCount.set(letter, letterCount.get(letter) - 1);
            
            
        }
        
    });
    console.log(letterCount);
                console.log(statuses);
    return statuses;
    

};



