function add(arr) {
    var sum;
    
    for (let i = 0; i<arr.length; i++){
arr[0].length
    let x =arr[0];
    let y =arr[1];
    sum= x+y;

    }

return sum;
parseInt

}



var x= 20;
var y;

function add(x,y) {
return y;
console.log(x);
console.log(y);
}

function add(...args) {
    let sum =0;
     for (let i = 0; i<args.length; i++){
        sum +=args[i];
    }
    return sum;
  }

  let arr =   add(); 
  console.log(arr)




  function add(...x){
    let getX=0;
     for (let i = 0; i<x.length; i++){
      getX +=x[i];
  }
     return function second(...y) {
  let sum =0;
   for (let i = 0; i<y.length; i++){
      sum +=y[i];
  }
return getX+sum;
}

}


add(20)(30)(-10)

  function add(...x){
    let argX = getArg(x);
       return function second(...y) {
    let argY = getArg(y);
      return function third(...q) {
        let argQ = getArg(q);
        return argX+argY+argQ;   
} 
}
}
function getArg(z){
    let result= 0;

    for (let i = 0; i<z.length; i++){
        result +=z[i];
     }
    return result;
    
}



add(20)(30)(-10)(2)()

function add(...x){
   
    let sum = getArg(x);

    return function collect(...args){
        if(args.length>0){
       sum+=getArg(args);
      
       return collect;
        }
        else return sum;
    }
         
}
    function getArg(z){
        let result= 0;
    
        for (let i = 0; i<z.length; i++){
            result +=z[i];
         }
        return result;
}




function doit(){
       let sum=0;

    return function counter(){
         ++sum;
      console.log(sum);
       return sum;
        }   
}
const incrementer1 = doit();
incrementer1();
incrementer1();
const resul1 = incrementer1();



console.log(mul()())

function  mul(x){

     return function second(y) {

return x*y;
    }
}

let floors =3
    let star ='*';
    let spaсe =' ';
 for(let i = 0; i<floors; i++){
    //  console.log(floors);
    //  for(let i = 0; i=floors;){
        console.log(floors);
    //  }
 }

 function createOperation(operation) {

    switch(operation) {
      case 'a':  
       return add;
       
    
      case 's':  
        return sub;
        
    
      case 'm':  
        return mul;
      
    
      case 'd':  
        return div;
    }
    return add;
    }
    
    function add(x){
    if (arguments.length == 0){
    x=0
    }
         return function second(y) {
       if (arguments.length == 0){
    y=0
    }      
    return x+y;
        }
    }
    
    function sub(x){
    if (arguments.length == 0){
    x=0
    }
         return function second(y) {
    if (arguments.length == 0){
    y=0
    }
    return x-y;
        }
    }
    
    function  mul(x){
    
         return function second(y) {
    
    return x*y;
        }
    }
    
    function  div(x){
         return function second(y) {
    
    return x/y;
        }
    }

//  doit(1)

//  function doit(floors) {
//     let star ='*';
//     let spaсe =' ';
//  for(let i = 0; i<floors; i++){
//     let space += star
//  }
// return star;
// }

function doit(floors) {
    let lines = line = floors; 
    let a=' '; 
    let b='*';
    while(line-->0) 
    return Array(line+1).join(a) +Array(2*(lines-line)).join(b) +Array(line+1).join(a);
    }



    function User(name) {
        if (!new.target) { // в случае, если вы вызвали без оператора new
          return new User(name); // ...добавим оператор new за вас
        }
      
        this.name = name;
      }