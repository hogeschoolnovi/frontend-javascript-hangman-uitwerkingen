function displayWordSoFar(word, guesses) {
  return word
    .split("") // ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
    .map((letter) => (guesses.includes(letter) ? `${letter} ` : "_ ")) // ["j ", "a ", "_ ", "a ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ "]
    .join(""); // "j a _ a _ _ _ _ _ _"
}

function isGameWon(word, guesses) {
  const letterNotGuessed = word
    .split("") // // ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
    .find((letter) => {
      if (!guesses.includes(letter)) {
        return true; // we found a letter not guessed, stop looking
      } else {
        return false; // this letter was guessed, keep going
      }
    });

  return letterNotGuessed === undefined; // if there is no letter not guessed, we won
}

function isGameLost(word, guesses) {
  const mistakeCount = countMistakes(word, guesses);

  const MAX_MISTAKE_COUNT = 7;
  if (mistakeCount >= MAX_MISTAKE_COUNT) {
    return true;
  } else {
    return false;
  }
}

function countMistakes(word, guesses) {
  let mistakeCount = 0;
  for (let index = 0; index < guesses.length; index++) {
    const guess = guesses[index];
    const isGuessCorrect = word.includes(guess);
    if (!isGuessCorrect) {
      mistakeCount = mistakeCount + 1;
    }
  }
  return mistakeCount;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  countMistakes: countMistakes,
};
