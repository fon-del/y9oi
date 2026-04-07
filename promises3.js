const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Промис успешно выполнен");
    }, 3000);
});

// Начальное состояние промиса
console.log(myPromise);

// Состояние после выполнения
myPromise.then((result) => {
    console.log(result);
    console.log(myPromise);
});