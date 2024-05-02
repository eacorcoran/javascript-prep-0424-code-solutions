/* exported reverseWord */
function reverseWord(word) {
  let newword = '';
  for (index = word.length - 1; index >= 0; index--) {
    newword += word[index];
  }
  return newword;
}
