class Block{
    constructor(value, next=null){
        this.value=value;
        this.next=next;
    }
    link(next){
      this.next=next;
    };
    getNext(){
        return this.next;
    };
    getVal(){
       return this.value;
        
    }

}

function createBlock(value, next){
    return new Block(value, next);
};

class List{
    constructor(head=null){
        this.head = head
    }
push(element){
    
    let newBlock = createBlock(element);
    if(this.head==null){
        this.head=newBlock;
    }
    else{
        let tmp = this.head;
        while(tmp.next!==null){
            tmp = tmp.next;
        }
        tmp.link(newBlock);
    }
}

add(element){
    
    let newBlock = createBlock(element);
let val1 = element.age;
    if(this.head==null){
        this.head=newBlock;
    }
    else{
        let tmp = this.head;
        if(val1> tmp.value.age){
            newBlock.link(this.head);
            this.head=newBlock; 
            return;
        }
        while(tmp.next!==null){
            let val2 = tmp.value.age;
            let val3 = tmp.next.value.age;
            console.log(tmp.next.value);
            // console.log(val1);
            // console.log(val2);
            console.log(val3);
            if(val1<val2&val1>val3){
                console.log('trylink');
                newBlock.link(tmp.next);
                tmp.link(newBlock);
                return;
                
            }
            tmp = tmp.next;
        }
        if(val1< tmp.value.age){
            tmp.link(newBlock);
        }
    }
}

print(){
    console.log('start');
    let tmp = this.head;
        while(tmp!==null){
        console.log(tmp.value);  
        tmp = tmp.next;
    }
console.log('end');
}
indexOf(cat){
    let cnt=0;
    let tmp = this.head;
        while(tmp!==null){

        if(tmp.value==cat){
            return cnt;
        };
          
        tmp = tmp.next;
        cnt++;

}
return cnt;
}
}
let family= new List;



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
        family.add(cat);
        return cat;
}


const cat1 = createCat(10, 'Boris');
 family.print();
console.log(' 1');
const cat2 = createCat(7, 'Robert');
family.print();
console.log(' 2');
const cat3 = createCat(11, 'Fedor');
family.print();
console.log(' 3');
const cat4 = createCat(2, 'Doosya');
family.print();
console.log(' 4');
const cat5 = createCat(6, 'Cooper');
family.print();
console.log(' 5');

console.log(cat1.myOrder());
console.log(cat2.myOrder());
console.log(cat3.myOrder());
console.log(cat4.myOrder());
console.log(cat5.myOrder());