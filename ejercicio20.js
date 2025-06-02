const readline = require('readline');

function pidenumeros(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let numero2=0;

    function preguntar(){
        rl.question("Introduce un número ", (input) => {
        let numero = parseInt(input);
        if (numero != 0){
            numero2 = numero2+numero;
            preguntar();
        }else if(numero === 0){
            console.log("El programa ha terminado");
            console.log("La suma de los números introducidos es: " +numero2);
            rl.close();
        }
    });
    }
    preguntar();

}


pidenumeros();