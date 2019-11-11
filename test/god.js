checkYear(1900);

function checkYear(y){
if(y%100==0){
    if(y%400==0){
        console.log("Високостный1");
    }
    else{
        console.log("НЕ високостный1");
    }
}
else{
    if (y%4 ==0){
    console.log("Високостный2");
    }
    else{
    console.log("НЕ високостный");
    }
    }
}