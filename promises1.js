const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Прошло 5 секунд, промис выполнен!");
    }, 5000);
});

myPromise.then((result) => {
    console.log(result);
});