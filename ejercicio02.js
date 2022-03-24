const multiplos = (top) => {
    let arrMultip = [];
    for (let index = 1; arrMultip.length < top; index++) {
        let element = 7*index;
        //console.log(element%2);
        if (element%2 !== 0 && element%3 !== 0 && element%5 !== 0){
            arrMultip.push(+element);
        }
    }
    return(arrMultip);
}

let multiplo = parseInt(prompt("Ingrese la cantida de numeros que desee ver"));
console.log(multiplos(multiplo));