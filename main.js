
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500)
    });
    return promise;
};


// asynchronous code
// even if it was only 1 ms.
setTimeout(() => {
    console.log('Timer is done');
    fetchData()
        .then(text1 => {
            console.log(text1);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);

// synchronous code
// it will run immediately, as javascript does not block execution
console.log('Hello!');
console.log('Hi');