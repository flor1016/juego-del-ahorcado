var pantalla = document.querySelector("canvas"); //tomo la pizzarra que cree en html
var pincel = pantalla.getContext("2d"); //capto todo lo que hay en la pantalla

function dibujoAhorcado() {
    pincel.lineWidth = 5;
    pincel.lineJoin="round"    
    
    //triangulo inferior
    pincel.beginPath(); //que inicie un nuevo camino
    pincel.moveTo(50,600);
    pincel.lineTo(80,550);
    pincel.lineTo(110,600);
    pincel.lineTo(50,600);
    pincel.stroke();
    
    //palo largo vertical del ahorcado
    pincel.beginPath(); 
    pincel.moveTo(80,550);
    pincel.lineTo(80,300);
    pincel.stroke();
    
    //palo horizontal del ahorcado
    pincel.lineTo(250,300);
    pincel.stroke();
    
    //palo corto vertical del ahorcado
    pincel.lineTo(250,350);
    pincel.stroke();
    pincel.strokeStyle = "#000000";
}

function dibujoCabeza(){
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 5;
    pincel.lineJoin="round"
    //circulo (cabeza)
    pincel.beginPath();
    pincel.arc(250,375,25,0,(Math.PI/180)*360);
    pincel.stroke();
}

function dibujoCuerpo(){
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 5;
    pincel.lineJoin="round"
     //palo cuerpo vertical del ahorcado
     pincel.beginPath(); 
     pincel.moveTo(250,400);
     pincel.lineTo(250,500);
     pincel.stroke();
}

function dibujoBrazoDerecho(){
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 5;
    pincel.lineJoin="round"
    //palo brazo derecho del ahorcado
    pincel.beginPath(); 
    pincel.moveTo(250,420);
    pincel.lineTo(215,450);
    pincel.stroke();     
}

function dibujoBrazoIzquierdo(){
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 5;
    pincel.lineJoin="round"
    //palo brazo izquierdo del ahorcado
    pincel.beginPath(); 
    pincel.moveTo(250,420);
    pincel.lineTo(285,450);
    pincel.stroke();   
}

function dibujoPiernaDerecha(){
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 5;
    pincel.lineJoin="round"
    //palo pierna derecha del ahorcado
    pincel.beginPath(); 
    pincel.moveTo(250,500);
    pincel.lineTo(205,580);
    pincel.stroke();      
}
function dibujoPiernaIzquierdo(){
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 5;
    pincel.lineJoin="round"
    //palo pierna izquierda del ahorcado
    pincel.beginPath(); 
    pincel.moveTo(250,500);
    pincel.lineTo(295,580);
    pincel.stroke();      
}


function rayas(palabraRayada){
    var palabraRayada;
    pincel.font=" bold 45pt Verdana";
    pincel.fillText(palabraRayada,425,580);
    medida= pincel.measureText(palabraRayada) .width;
    return medida;
}

function letraIncorrecta(letraPresionada,x){
    var letraPresionada;
    pincel.font="30pt Verdana";
    pincel.fillText(letraPresionada,x,300); //x=425
}
function letraCorrecta(letraPresionada,x1){    
    pincel.font=" bold 40pt Verdana";
    pincel.fillText(letraPresionada,x1,580);//x=425
}


function finJuego(palabra,palabraActiva){
    pincel.fillStyle = 'red';
    pincel.font="30pt Verdana";
    pincel.fillText("Fin del Juego",425,400);
    pincel.fillText(palabra,425,450);
    pincel.fillText(palabraActiva,740,450);
}

function Gano(){
    pincel.fillStyle = 'blue';
    pincel.font="30pt Verdana";
    pincel.fillText("Gano",425,400); 

}