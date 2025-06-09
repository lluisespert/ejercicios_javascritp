const readline = require('readline');

function numeros() {
    let sumaPositivos = 0;
    let sumaNegativos = 0;
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    let contador = 0;

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function preguntarNumero() {
        if (contador < 10) {
            rl.question("Introduce el número correspondiente: ", (input) => {
                let numero = parseInt(input);
                if (numero > 0) {
                    positivos++;
                    sumaPositivos += numero;
                } else if (numero < 0) {
                    negativos++;
                    sumaNegativos += numero;
                } else {
                    ceros++;
                }
                contador++;
                preguntarNumero();
            });
        } else {
            console.log(`Cantidad de positivos: ${positivos}`);
            console.log(`Cantidad de negativos: ${negativos}`);
            console.log(`Cantidad de ceros: ${ceros}`);
            console.log(`Media de positivos: ${positivos > 0 ? (sumaPositivos / positivos).toFixed(2) : 0}`);
            console.log(`Media de negativos: ${negativos > 0 ? (sumaNegativos / negativos).toFixed(2) : 0}`);
            rl.close();
        }
    }
    preguntarNumero();
}

numeros();