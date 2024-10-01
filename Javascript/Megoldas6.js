function feladat6(){
    const p1= parseInt(prompt("Player1: 1 = kő 2 = papír 3 = olló"));
    const p2= parseInt(prompt("Player2: 1 = kő 2 = papír 3 = olló"));
    if(p1 == 1){
        if(p2 == 2){
            console.log("p2 nyert");
        } else if(p2 == 1) {
            console.log("dontetlen")
        } else {
            console.log("p1 nyert")
        }
    }
    if(p1 == 2){ // 
        if(p2 == 3){
            console.log("p2 nyert");
        } else if(p2 ==2){
            console.log("dontetlen")
        } else {
            console.log("p1 nyert");
        }
    }
    if(p1 == 3){
        if(p2 == 1){
            console.log("p2 nyert");
        } else if(p2 == 3){
            console.log("dontetlen")
        } else {
            console.log("p1 nyert");
        }
    }
}
feladat6();