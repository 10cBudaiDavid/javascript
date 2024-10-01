function feladat2(){
    const ora=14;
    const perc=34;
    const masodperc=42;
    const currentDate = new Date();
    currentDate.setHours(ora);
    currentDate.setMinutes(perc);
    currentDate.setSeconds(masodperc)
    const datum = new Date();
    datum.setHours(23);
    datum.setMinutes(59);
    datum.setSeconds(59);
    console.log((date - currentDate) / 1000)
}
feladat2();