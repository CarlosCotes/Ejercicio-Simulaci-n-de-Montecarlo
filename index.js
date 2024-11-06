function calcularPI(numPuntos) {
    let puntosDentroDelCirculo = 0;

    for (let i = 0; i < numPuntos; i++) {
        let x = Math.random() * 2 - 1;  // Aleatorio entre -1 y 1
        let y = Math.random() * 2 - 1;  // Aleatorio entre -1 y 1

        if (x * x + y * y <= 1) {
            puntosDentroDelCirculo++;
        }
    }

    let aproximacionPI = 4 * (puntosDentroDelCirculo / numPuntos);
    return aproximacionPI;
}

let numPuntos = 1000000;  
let piEstimado = calcularPI(numPuntos);

var btn = document.getElementById("btn")
var RES = document.getElementById("text")
btn.addEventListener('click',function(){
    RES.innerHTML = `Estimación de PI con ${numPuntos} puntos: ${piEstimado}`
})




