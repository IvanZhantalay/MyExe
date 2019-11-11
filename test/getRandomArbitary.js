function getRandomArbitary(min, max) {
    for (let i = 0; i = 2; i++) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
console.log(getRandomArbitary(1, 9));
