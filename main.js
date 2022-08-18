const person = {
    name: 'Jacob',
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();