let txt="egykettoharomnegyot6";
let y=0;
let a="";
let b="";
function elsoot(txt){
    console.log(txt.slice(0,5))
    console.log(txt.slice(2,8))
    console.log(txt.slice(4,txt.End))
    console.log(txt.slice(4,11))
    console.log(txt.toUpperCase())
    while(y<txt.length){
        if(y%2==1){
            a+=txt.at(y).toUpperCase();
        }
        else{
            a+=txt.at(y).toLowerCase();
        }
        y++;
    }
    y=0;
    console.log(a);
    
    // while(y<txt.length){
    //     if(txt.at(y)=="e"){
    //         b+=txt[y].toUpperCase();
    //     }
    //     else{
    //         b+=txt[y].toLowerCase();
    //     }
    //     y++;//
    // }
    b=txt.replaceAll("e","E");
    console.log(b);
    b="";
    b=txt.split("e");
    console.log(b);
   } 
elsoot(txt);