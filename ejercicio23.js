const readline = require('readline');

function muestranumeros(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    numero = 1;
    function preguntar() {
        rl.question("Introduce un número para luego mostrarlo ", (input) => {
            let numero2 = parseInt(input);
            for (numero; numero <=numero2; numero++){
                console.log("El número es: "+numero);
            }
        rl.close();
        });
    }

    preguntar();
}

muestranumeros();