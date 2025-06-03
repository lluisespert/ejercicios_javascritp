const readline = require('readline');

function factorial() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function preguntar(){
        rl.question("Introduce un número para calcular su factorial: ", (input) => {
            let numero = parseInt(input);
            let resultado = 1;
            for(numero; numero >= 1; numero--){
                resultado *= numero;
                console.log("El factorial de " +numero+ " es: "+resultado);
            }
        });
    }

    preguntar();
}

factorial();