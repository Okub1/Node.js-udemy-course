const name = 'Jacob';
let age = 24;
const hasHobbies = true;

const sumarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}

const add = (a, b) => a + b;

console.log(sumarizeUser(name, age, hasHobbies));
console.log(add(5, 10));