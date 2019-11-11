function createOperation(operation) {

function calc(x){
    if (arguments.length == 0){
    x=0;
    }
         return function second(y) {
       if (arguments.length == 0){
    y=0;
    }  
switch(operation) {
        
case 'a':  
         return x+y;

 case 's': 
        return x-y;
    

case 'm':  
        return x*y;
  
case 'd':  
        return x/y;
}
return x+y;
}   

        }
    }