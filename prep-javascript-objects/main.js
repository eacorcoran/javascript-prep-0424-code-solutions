const person = {
  firstName: 'Steve',
  lastName: 'Martin',
  hobby: 'Banjo Playing',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Actor';
console.log("The person's current job is:", person.job);

person['previousJob'] = 'Comedian';
console.log("The person's previous job is:", person['previousJob']);

console.log('The complete person object:', person);
