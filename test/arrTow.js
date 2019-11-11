console.log(doit(5));

function doit(floors) {
    let arr=[];
    let star = '*';
    let space= ' '
    let totalStars = 0;
        for (let i = 0; i < floors; i++){
            totalStars= (2*i)+1;
            let str = '';
             for (let g = 0; g < totalStars; g++){
                str = str + star;
             }
            let spaces =((floors-1)- i);
            console.log(totalStars);
            let add='';
            for (let j =0; j< spaces; j++){
                 add = add + space;
            }
            arr.push(add+str+add);
        }
    return arr;
}
