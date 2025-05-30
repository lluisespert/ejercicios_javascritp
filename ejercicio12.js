function pares (){
    let numerospares = 0;
    let numero=1;
    while (numerospares < 5) {
        if(numero %2 === 0){
            console.log("El numero par es "+numero);
            numerospares++;

        }
        numero++;
    }
}

pares();