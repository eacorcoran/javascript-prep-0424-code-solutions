/* exported getWords */
function getWords(string) {
  if (string.length > 0) {
    newArray = string.split(' ');
  } else {
    newArray = [];
  }
  return newArray;
}
