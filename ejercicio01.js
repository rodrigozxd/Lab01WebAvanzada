const mayorTres = (x,y,z) => {
    if (x < y && x < z) {
        return(z);
    } else if(y < x) {
        return(x);
    } else {
        return(y);
    }
}

let a = 0;
let arrNum = [];
while (a <= 2){
    let ingreso = prompt("Ingrese un número");
    arrNum.push(+ingreso)
    a++;
};
console.log(`El mayor de ${arrNum} es ${mayorTres(arrNum[0],arrNum[1],arrNum[2])}`);