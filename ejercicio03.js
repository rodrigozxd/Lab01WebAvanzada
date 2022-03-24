const comision = (venta) => {
    if (venta <= 150){
        return 0;
    }
    else if (venta <= 400){
        return venta*0.1;
    } 
    else {
        return 50+(venta*0.09);
    }
}

let ventas = parseInt(prompt("Ingrese las ventas de hoy"));
console.log(`la comision por vender ${ventas} es ${comision(ventas)}`);