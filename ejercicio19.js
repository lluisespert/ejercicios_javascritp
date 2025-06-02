const readline = require('readline');
function negativo(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function preguntar(){
        rl.question("Introduce un número ", (input) => {
        let numero = parseInt(input);
        if (numero < 0) {
            console.log("El numero "+numero+" es negativo, por lo tanto te aguantas y se termina el programa");
            rl.close();
        }else if(numero => 0){
            console.log("El número "+numero+" es positivo, por lo tanto te aguantas y sigues con el programa");
            preguntar();
        }
    });
    }
    preguntar();
}


negativo();