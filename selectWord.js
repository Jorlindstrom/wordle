
export function selectWord(words, length, allowDuplicates) {
    
    const filteredWords = words.filter(word => word.length === length);
    console.log(filteredWords);
    if (filteredWords.length === 0) {
      throw new Error('Inget ord matchar kriterierna.');
      
    }
  
    let finalWords;

    if (allowDuplicates) {
      finalWords = filteredWords;
    } else {
      finalWords = filteredWords.filter(word => {
        let uniqueLetters = new Set(word);
        return uniqueLetters.size === word.length;
      });
    }
  
    if (finalWords.length === 0) {
      throw new Error('Inget ord med unika bokstäver finns som matchar kriterierna.');
    }
  
    const randomIndex = Math.floor(Math.random() * finalWords.length);
    return finalWords[randomIndex];
  }
  