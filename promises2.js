const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 6); // число от 0 до 5

        console.log("Сгенерированное число:", randomNumber);

        if (randomNumber === 0) {
            reject("Ошибка: деление на ноль!");
        } else {
            const result = 1 / randomNumber;
            resolve(result);
        }
    }, 1000);
});

myPromise
    .then((result) => {
        console.log("Результат деления:", result);
    })
    .catch((error) => {
        console.log(error);
    });