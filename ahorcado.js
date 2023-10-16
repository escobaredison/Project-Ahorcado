let palabra;
let cantidadErrores = 0;
let cantidadAciertos = 0;

// const iniciarJuegoA = document.getElementById("animal");
// iniciarJuego.addEventListener("click", iniciar);
const iniciarJuego = document.getElementById("fruta");
iniciarJuego.addEventListener("click", iniciar);
// const iniciarJuegoOC = document.getElementById("objetoCosa");
// iniciarJuego.addEventListener("click", iniciar);
// const iniciarJuegoC = document.getElementById("colores");
// iniciarJuego.addEventListener("click", iniciar);
const botonesLetra = document.querySelectorAll("#botones button"); //seleccionamos la letra del boton

const animal = ["leon","evestruz","koala","hipopotamo"];
const frutas = ["manzana","pera","banana","mango","fresa","naranja","piña","papaya"];
const objetoCosa = ["mesa","computador","dulce","camisa"];
const colores = ["azul","rojo","amarillo","verde"];

function palabraAleatoria(numMin, numMax){
    const amplitudValores = numMax - numMin;
    const palabraAzar = Math.floor(Math.random() * amplitudValores) + numMin;
    return palabraAzar;
}
function iniciar(event){
    iniciarJuego.disabled = true;// selecionar el boton de las palabras 1 vez
    cantidadErrores = 0;
    cantidadAciertos = 0;
    imagen.src="imgAhorcado/0.png";
    if(cantidadErrores === 0){
        const generaParrafo = document.getElementById('resultado');
        generaParrafo.innerHTML = "";
    }
    if(cantidadAciertos === 0){
        const generaParrafo = document.getElementById('resultado');
        generaParrafo.innerHTML = "";
    }
    //crear SPAN
    const generaSpan = document.getElementById('palabraAdivinar')
    generaSpan.innerHTML = "";
    //Asignar palabra aleatoria
    const cantidadFrutas = frutas.length;
    const palabraAzar = palabraAleatoria(0,cantidadFrutas);
    palabra = frutas[palabraAzar];
    const cantidadLetras = palabra.length;

    console.log(palabra); // palabra aleatoria
    console.log(cantidadLetras); // cantidad de letras de la palabra
    
    for( let i = 0; i < botonesLetra.length ; i++ ){
        botonesLetra[i].disabled = false;
    }

    for (let i = 0; i < cantidadLetras; i++) {
        const ponemoSpan = document.createElement('span');
        // AGREGAR
        generaSpan.appendChild(ponemoSpan);
        console.log(ponemoSpan);
    }
}

for (let i = 0; i < botonesLetra.length; i++) {
    botonesLetra[i].addEventListener('click', SeleccionarLetra);
    
}

function SeleccionarLetra(event){
    const letraSpan = document.querySelectorAll("#palabraAdivinar span");
    const boton = event.target; //la letra que selecciono
    boton.disabled = true;

    const letra = boton.innerHTML;
    const letraPalabra = palabra;
    console.log(palabra);

    let acerto = false;
    for (let i = 0; i < letraPalabra.length; i++) { //posocion letra
        if(letra === letraPalabra[i]){
            console.log(letraSpan);
            letraSpan[i].innerHTML = letra;
            cantidadAciertos++;
            acerto = true;
        }  
    }
    //cambia de imagen
    if(acerto === false){
        cantidadErrores++;
        const source = `imgAhorcado/${cantidadErrores}.png`;
        imagen.src = source;
    }   

    console.log("la letra es: " + letra + " en la palabra " + palabra + " existe: " + acerto);
    
    // mensaje de GANO / PERDIO
    if(cantidadErrores === 7){
        //crear PARRAFO perdio
        const generaParrafo = document.getElementById('resultado');
        generaParrafo.innerHTML = "";
        const ponemoParrafo = document.createElement('p');
        ponemoParrafo.innerHTML = `PERDISTE, la palabra era: ${palabra}`;
        // AGREGAR
        generaParrafo.appendChild(ponemoParrafo);
        console.log(generaParrafo);
        imagen.src = "https://media.tenor.com/Uj4RSxn_BTMAAAAC/game-over-glitch.gif";
        gameOver();
    }
    if(cantidadAciertos === palabra.length){
        //crear PARRAFO gano
        const generaParrafo = document.getElementById('resultado');
        generaParrafo.innerHTML = "";
        const ponemoParrafo = document.createElement('p');
        ponemoParrafo.innerHTML = "GANASTE!!!";
        // AGREGAR
        generaParrafo.appendChild(ponemoParrafo);
        console.log(generaParrafo);
        imagen.src = "https://i.gifer.com/YYHB.gif";
        gameOver();
    }
}
//FIN JUEGO
function gameOver(){
    for( let i = 0; i < botonesLetra.length ; i++ ){
        botonesLetra[i].disabled = true;
    }
    iniciarJuego.disabled = false;
}
gameOver();