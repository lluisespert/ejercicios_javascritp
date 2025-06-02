const readline = require('readline');
function leenumeros(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    function preguntar(){
        rl.question("Introduce numeros hasta que pongas un 0 para salir: ", (input) => {
        let numero = parseInt(input);
            if(numero === 0){
                console.log("El programa ha terminado");
                rl.close();
            }else if(numero %2 !== 0){
                console.log("El numero "+numero+" es impar");
                preguntar();
            }else if(numero % 2 === 0){
                console.log("El numero "+numero+" es par");
                preguntar();
            }
        });
    }
    preguntar();
}


leenumeros();