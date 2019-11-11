let floor = 3;
let star = '*';
let space = '1';
let str='';
let str2='';
for (let i = 0; i < floor; i++){
    for (let j = floor; j >0; j--){
        str2 = str2 + space;
        console.log(str2);
    }
    str = str + star;
    console.log(str);
} 