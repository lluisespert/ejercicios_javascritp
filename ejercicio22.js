const readline = require('readline');

function pidenumeronegativo(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let numero2= 0;
    let contador = 0;

    function preguntar(){
        rl.question("Introduce un número (negativo para salir): ", (input) => {
        let numero = parseInt(input);
        if (numero > 0){
            numero2 = numero2 + numero;
            contador++;
            preguntar();
        }else if(numero < 0){
            console.log("El programa ha terminado");
            let media = numero2 / contador;
            console.log("La media de los números positivos es: "+media )
            rl.close();
        }
    });
    }
    preguntar();
}

pidenumeronegativo();