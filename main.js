const person = {
    name: 'Jacob',
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};


// object destructuring syntax
const printName = ({ name }) => {
    console.log(name);
}

printName(person);

// destructuring object's properties into two constants
// variables must have same names as object's properties
const { name, age } = person;
console.log(name, age);


const hobbies = ['Sports', 'Cooking', 'Programming'];
// array destructuring, variables could be any name
// in this case, we are pulling first two values of an array
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);