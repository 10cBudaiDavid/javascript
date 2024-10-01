function feladat10(){
    const negyzet = parseInt(prompt("FELADAT10: Negyzet merete: "));
    for(let i = 1; i <= negyzet; i++){
        let sor = "";
        for(let j = 1; j <= negyzet; j++){
            if(i == j){
                sor += "%";
            } else if(i == 1 || i == negyzet || j == 1 || j == negyzet){
                sor += "%";

            } else {
                sor += " ";
            }     
        
        }
        console.log(sor);
    }
       
}
feladat10();