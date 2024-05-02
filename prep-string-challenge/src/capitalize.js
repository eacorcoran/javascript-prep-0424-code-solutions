/* exported capitalize */
function capitalize(word) {
  const firstLetter = word[0];
  const lastLetters = word.slice(1, word.length);
  console.log(firstLetter, lastLetters);
  return firstLetter.toUpperCase() + lastLetters.toLowerCase();
}
