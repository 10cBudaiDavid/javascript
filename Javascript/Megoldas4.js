function feladat4(){
    const osztalyzatok = {
        [5]: "A",
        [4]: "B",
        [3]: "C",
        [2]: "E",
        [1]: "F"
    }
    const input = parseInt(prompt("Átkonvertálandó jegy:"));   
    console.log(osztalyzatok[input] == undefined ? "Nincs ilyen jegy" : osztalyzatok[input]);
}
feladat4();