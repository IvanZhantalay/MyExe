// let a=0;
// let b=0;
let user=4;

function getRandomArbitary(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}
// console.log(getRandomArbitary(1, 9));

let a=getRandomArbitary(1,9);
let b=getRandomArbitary(1,9);

let c = a*b;

function show(a,b){
    return `Сколько будет ${a} * ${b} ? `
};

console.log(show(a,b))

function answ(a,b,c){
if(c!=user){
console.log(a);
console.log(b);
console.log(c);

     console.log(`Вы ошиблись ${a} * ${b} = ${c} `)
 }
 else{
    console.log(`Верно!`) 
 }
}
answ(a,b,c); 
