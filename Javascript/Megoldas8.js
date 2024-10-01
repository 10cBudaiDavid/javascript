function feladat8(){
    const szam = parseInt(prompt("Szám:"));
    let a = 1;
    for(let i = 1; i <= szam; i++){
        a = a * i;
    }
    console.log(a)
}
feladat8();