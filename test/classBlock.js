
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
const block = createBlock({ m: 'MVar' });
console.log(block.link);