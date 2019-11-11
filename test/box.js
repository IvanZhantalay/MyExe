class Object{
    constructor(prop){
        this.prop=prop
    }
    unbox(){
        let tmp = this.prop;
        while(tmp.prop!==undefined){
            tmp = tmp.prop;
console.log(tmp);
        }
        // return this.prop;
        return tmp;
    }
};

function box(obj){
    return new Object(obj);
}

const box1 = box({ prop: 10 })
const box2 = box(box1)
const box3 = box(box2)
box3.unbox()

// assert(box1.unbox()).toBe({ a: 10 });
// assert(box2.unbox()).toBe({ a: 10 });
// assert(box3.unbox()).toBe({ a: 10 });

