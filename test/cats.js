let family=[];

class Cat{
    constructor(age,name){
        this.age = age,
        this.name= name
    }
    meow(){
        return `My name is ${this.name}!`;
    }
    myAge(){
        if (this.age>=10){
            return 'I am too old...';
        }
        else{
            return `My age is ${this.age}`;
        }
    }
    myOrder(){
        return `I am cat №${family.indexOf(this)+1} in family`;
    }

}
function createCat(age,name){
    let cat = new Cat(age,name);
        family.push(cat);
        family.sort(function(a, b){
            return b.age-a.age
        })
            return cat;
}
const cat1 = createCat(10, 'Boris');
const cat2 = createCat(7, 'Robert');
const cat3 = createCat(11, 'Fedor');
const cat4 = createCat(2, 'Doosya');
const cat5 = createCat(6, 'Cooper');
// console.log(cat1.myAge());



// console.log(family.indexOf(this));

cat1.myOrder();
cat2.myOrder();
cat3.myOrder();
