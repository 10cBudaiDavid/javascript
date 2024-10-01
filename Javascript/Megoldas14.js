function feladat14(){

    const szamolas = parseInt(prompt("FELADAT 14: Meddig szamoljon: "));

    for(let i = 1; i <= szamolas; i++){

        if(i % 3 == 0){
            if(i % 5 == 0){
                console.log("FizzBuzz");
            } else {
                console.log("Fizz");
            }
        } else if(i % 5 == 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
feladat14();