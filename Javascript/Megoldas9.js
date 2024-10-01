function feladat9(){

    console.info("FELADAT 9");

    const szam = 268;

    const string = szam.toString();

    let sum = 0;

    for(let i = 0; i <= string.length; i++){
        if(parseInt(string[i])){
            sum += parseInt(string[i]);
        }
    }
    console.log(sum / string.length)

}
feladat9();