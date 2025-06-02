const readline = require('readline');

function cuadrado() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function preguntar() {
        rl.question("Introduce un número para calcular su cuadrado (negativo para salir): ", (input) => {
            let numero = parseInt(input);
            if (numero < 0) {
                console.log("Programa terminado.");
                rl.close();
            } else {
                let resultado = numero * numero;
                console.log("El cuadrado de " + numero + " es: " + resultado);
                preguntar();
            }
        });
    }

    preguntar();
}

cuadrado();