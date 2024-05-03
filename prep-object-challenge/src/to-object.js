/* exported toObject */
function toObject(keyValuePair) {
  const newObject = {};
  const newProperty = keyValuePair[0];
  const newValue = keyValuePair[1];
  newObject[newProperty] = newValue;
  return newObject;
}
