
// const bird1 = createBird();
// function createBird(){

// function Bird(name) {
//     this.name = name;
//     this.fly = function(){ 
//         console.log('flllly')
//     };
//     this.getDistance = function(){};
//     this.compareWith = function(){};
//   }
  
//   let bird = new Bird("Вird1");
// console.log(bird.fly());
// return Bird;
// }


//  const bird1 = createBird()
 function createBird(){


let bird = {    
    name: "bird1",  
    distance: 0,
    fly(a=1) { 
  this.distance+=a;
  return bird;
    },
    //     getDistance(){},
    // compareWith(){}
  };


   return bird;
 };
 const bird1 = createBird();
 bird1.fly().fly().fly().fly().fly().fly();
 
 console.log (bird1);
