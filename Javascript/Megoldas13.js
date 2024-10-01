function feladat13(){
    for(let i = 10; i <= 31; i++){
        const a = [];
        for(let j = 2; j <= 31; j++){
           if(i % j == 0){
                a.push(j);
           }
        }
        const b = a.join(", ");
        console.log(i + ":" + b);
    }
}
feladat13();