const person = {
    name: 'Jacob',
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const hobbies = ['Sports', 'Cooking'];

// for (let hobby of hobbies) {
//     console.log(hobby);
// }

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);