const readline = require('readline');

function numeronegativo (){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    function preguntar() {
        rl.question("Introduce un número para saber si es positivo o negativo (cero para salir): ", (input) => {
            let numero = parseInt(input);
            if (numero < 0) {
                console.log("El número " + numero + " es negativo.");
                preguntar();
            } else if(numero > 0){
                console.log("El número "+numero+" es positivo.");
                preguntar();
            }else if (numero === 0){
                console.log("Se termina el programa.");
                rl.close();
            }
        });
    }
    preguntar(); 
}

numeronegativo();