function feladat12(){
    let x = 0;
    let oszt = 0;
    
    for(let i = 1; i <= 100; i++){
        if(i != 3){

            if(x == 1 && i % 3 == 0){
                if(!ost == 2){
                    console.log(i);
                    oszt++;
                } else {
                    oszt = 0;
                }
            } else {
                console.log(i);
            }

            if(x == 2 && i % 3 == 0){
                if(!oszt == 3){
                    console.log(i);
                    oszt++;
                } else {
                    oszt = 0;
                }
            }
            if(x > 2) {
                x = 0;
            }
        } else {
            x++;
        }
    }
}
feladat12();