let person = {
    firstName: 'Oleh',
    age: 20
};
// Dot notations
person.firstName = 'Maksym';

// Bracket notations
let selection = 'firstName';
person[selection] = 'Anya';

console.log(person.firstName);