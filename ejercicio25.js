const readline = require('readline');
function sumanumeros(){
    let suma = 0;
    let contador = 15;
    let i = 0;
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function preguntar() {
        if (i < contador) {
            rl.question("Introduce un número: ", (input) => {
                let numero = parseInt(input);
                suma = suma + numero;
                i++;
                preguntar();
            });
        } else {
            console.log("La suma de los números introducidos es: " + suma);
            rl.close();
        }
    }

    preguntar();
}

sumanumeros();