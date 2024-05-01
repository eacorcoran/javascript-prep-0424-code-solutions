/* exported isVowel */
const vowelArray = ['a', 'e', 'i', 'o', 'u'];
function isVowel(char) {
  for (index = 0; index < vowelArray.length; index++) {
    if (vowelArray[index].toLowerCase() == char.toLowerCase()) {
      return true;
    }
  }
  return false;
}
