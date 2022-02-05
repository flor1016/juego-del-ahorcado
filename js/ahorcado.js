var k=0;
var j=0;
var x=425;
var x1=425;
var x2=425;
var letras=[];
var listaDePalabras = ["lienzo","manzana", "banana","lapiz","flotante","bolsillos","arrogante","simpatico"];
var palabraActiva = palabra(listaDePalabras);
console.log(palabraActiva);
cantidadLetras= palabraActiva.length;
console.log(cantidadLetras);

var botonIniciarJuego = document.querySelector("#iniciar-juego");
botonIniciarJuego.addEventListener("click",function(event){
    dibujoAhorcado();
    palabraRayada = palabraActiva.replace(/./g,"_ ");
    rayas(palabraRayada);    
    document.addEventListener('keydown', letrasTeclado);         
    return;
});

function letrasTeclado(event) {
    var keycodeentero = event.keyCode;
    var objeto = document.getElementById('tecla'); //Buscamos el objeto tecla
    var letraPresionada = String.fromCharCode(keycodeentero); // Y con el String obtenemos la tecla presionada.
    letraCorrectaIncorrecta(letraPresionada,palabraActiva);    
    return letraPresionada;  
}

function palabra(listaDePalabras){    
    var random = Math.floor(Math.random()*listaDePalabras.length);
    var palabraRandom = listaDePalabras[random];
    return palabraRandom;
}

function letraCorrectaIncorrecta(letraPresionada,palabraActiva,x1){
    palabraRayada = palabraActiva.replace(/./g,"_ ");
    var medidaPorLetra=rayas(palabraRayada)/cantidadLetras;
    buchon=1;
    contadorIncorrecta=0;
    var letraAscii= letraPresionada.charCodeAt();
    if (letraAscii>64 && letraAscii<91){        
        if(!letras.includes(letraPresionada)){
            letras.push(letraPresionada);//agrego letras a un array             
            for(var i=0;i<palabraActiva.length;i++){
                var palabraActivaMayuscula = palabraActiva.toUpperCase();
                var letraPalabraActiva = palabraActivaMayuscula.charCodeAt(i);
                if (letraPalabraActiva == letraAscii){
                    x1=(x2+(i*medidaPorLetra));//obtengo la posicion de la letra para escribir.
                    letraCorrecta(letraPresionada,x1);
                    buchon=0;
                    k++;
                    if(k==cantidadLetras){
                        Gano();
                        document.removeEventListener('keydown',letrasTeclado);
                    }else {
                        continue;
                    }
                } else{
                    contadorIncorrecta ++;
                }
            }
            if(buchon==1 && contadorIncorrecta>0){
                letraIncorrecta(letraPresionada,x);
                j++;
                x=(x+35);
                switch(j){
                    case 1: dibujoCabeza();
                    break;
                    case 2: dibujoCuerpo();
                    break;
                    case 3: dibujoBrazoDerecho();
                    break;
                    case 4: dibujoBrazoIzquierdo();
                    break;
                    case 5: dibujoPiernaDerecha();
                    break;
                    case 6: dibujoPiernaIzquierdo();
                            finJuego();
                            document.removeEventListener('keydown',letrasTeclado);
                       
                    break;             
                }           
            }
        } else{
            alert("Ya ingreso esa letra.");     
        }
    } else{
        alert("Solo puede introducir letras!! Por favor intentelo de nuevo.");
    }
}

