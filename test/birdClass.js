class Bird{
    constructor(){
    this.distance = 0;  
    }
    fly(a=1) { 
        this.distance+=a;
        return this;
          }
    getDistance(){
       return this.distance;
    }
    compareWith(other){
      if(this.distance==other.distance){
        return 'friendship';
      }
  else if(this.distance>other.distance){
    return 'I win';
}
else{
    return 'Another bird win';
}
    }
}
function createBird(){
    return new Bird();
}

