function createPromise() {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 10) + 1; // от 1 до 10 секунд

        setTimeout(() => {
            resolve(delay);
        }, delay * 1000);
    });
}

const promises = [];

for (let i = 0; i < 10; i++) {
    promises.push(createPromise());
}

console.log(promises);