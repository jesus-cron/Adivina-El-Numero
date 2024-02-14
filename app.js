// control f para buscar errores o datos en el codigo 
//ipt ubica si existen funciones en el codigo yn las ejecuta dem primera mano para dejarlas en cierta ubicacion por si es utilizada 
// document querySelectorretorna el objeto o variable , enlaSA el html (pagina usando la ubicacion de h1) , con el codigop app.js en cierta ubicacion de la pagina 
//let titulo = document.querySelector("h1");
// inerhtml permite colocar texto en la varible 
//titulo.innerHTML = ("juego del numero secreto ");
// document querySelector enlaSA el html (pagina usando la ubicacion de p [parrafo]) , con el codigop app.js en cierta ubicacion de la pagina 
// funci
//let parrafo = document.querySelector("p");
//parrafo.innerHTML = ("Escribe un numero del 1 al 10");

// la funcion asignartextoelemenmto con el parametro (elemento,texto) 
//funciona para automatiozar y reducir el codigo ya que se puede colocar el comando establkecio con el elemeto h1 
//en el cual se va a escribbir un texto como titulo
// para poder ejecutar una funcion sse debe escribir funtion mas el nombre de la misma y lo parametro si es el caso dlo contrario solo se coloca ()
// ademas se debe colocar las llaves para ingresar la operacion a realizar 
// se deja en ceros para que las condiciones iniciakes le den el valor correcto 
let numeroSecreto = 0;
let intentos = 0; 
// una lista o array se crea al escribir una variable y asignarle []
// para asignar un valor alk final del array se usa .push para borrar el ultimo dato  de usa .pop 
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;




}
// realiza una tarea ( insertada en un boton del htmlusando onclick despues del comando button ubicando la variable colocada verificar intento)
// las llaves {encierran la accion que se realizara al usar el botton }

// variable igual a la fuincion 

// input se ubica  como etiqueta en el archivo html el cual representa el cuadro de texto en la pagina 
// se ubica el atributo id("") para indentificar los datos  insertados (numerDeUsuario)
// document.get element(byid) se usa para obgter el objeto dela funcion ,para obtener el valor de la funcion se usa .value
function verificarIntento() {
    // parseint iguala el tipo de dato string a number  ,posibilita el uso de el === para validar si es dato es igual en valor (number)(number)
// (string)(string),
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
 // contador de intentos 
    // regresa algun dato si es el caso 
   // typeof indica que tipoo de dato es la variable (string o number )
   
   //console.log (typeof(numeroDeUsuario));
  // console.log(numeroSecreto);
   //console.log(typeof(numeroSecreto));
   //console.log (numeroDeUsuario);
   // dato booleano compara variables si es el caso y muestra si el resultado es igual true de lo contrario false  
   //console.log ( numeroDeUsuario === numeroSecreto); 
   // para agregar un texto se aplica if como condicion 
   console.log (intentos);
   // usamos el valor ternario para ejecutar condiciones en un templete string para poder identificar si correspode vez o veces segun el contador 
   if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez": "veces"}`);
   // se activa el boton despues de que el usuario acerta el numero secreto 
    // usamos el dom (document.) mediante id o query selecftorcon el parametro del botton que se quiera activar en el html 
    // agregando removeAttribute con el parametro que mantiene desactivado el boton (disabled)sin olvidar que dentro de los parametros de debe poner comillas 
    document.getElementById("reiniciar").removeAttribute("disabled");

} else {
    // el usuario no acerta 
    if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento("p","El numero secreto es menor");
    } else {
        asignarTextoElemento("p","El numero secreto es mayor");
    }
      intentos++;
      // se usa la funcion cuando el usuario no acierta por lo que se ubica en el condicionante else
      limpiarcaja(); 

   }
    return;

}

function limpiarcaja() {
    // se usa el numeral # para establecer en la funcion que se requiere selecionar un documento por id 
    //let valorCaja =
     document.querySelector("#valorUsuario").value = "";
    // se usa value = a ""; para mostrar que el valor es vacio
     // podemos cancelar la variable y ubicar este dato al final de la funcion valorCaja.value = ""; 
}

// con la funcion y un cuadrado podemos ubicar la integracion de un numero aleatorio
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // si el numero generado esta imcluidoen la lista 

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    // si ya sorteamos todos los numeros 
    // si los numeros validados son igual al numero maximo se muestra un mensaje para solucionar la recursividad y el error en la cosola y dar una opcion  de salida 
    if (listaNumerosSorteados.length == numeroMaximo){

            asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
    } else {

       if (listaNumerosSorteados.includes(numeroGenerado)) {
         return generarNumeroSecreto();
        } else {
         listaNumerosSorteados.push(numeroGenerado); 
         return numeroGenerado;
        }
     // no es necesario ya que se ubica la variable en el inicio en su lugar ubicamos solo return
     // return numeroSecreto; 
      // se crea una funcion para encerrar los menssjes iniciales con la finalidad de acortar el codigo y 

 
    }
}
  function condicionesIniciales() {
    asignarTextoElemento("h1","¡JUego el numero secreto");
    asignarTextoElemento("p",` Escribe un  numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;


  }



  function reiniciarJuego(){
    //limpiar caja 
    limpiarcaja();
    //indicar mesaje de intervalos de numeros 
    //generar el numero aleatorio se coloca en las condiciones iniciales ();
    // iniciar el numero de intentos 
    condicionesIniciales();
    //deshabilitar el boton nuevo juego
    //se usa el siguiemte mando para poder desactivar el boton nuevo juego al  momento de iniciar un nuevo juego 
  // aplicando el comamdo set attribute 
    document.querySelector("#reiniciar").setAttribute("disabled","true");
  }

// al ejecutar esta funcion podemos eliminar gran cantidad del codigo java escript
// el cual con lam funcion asignartextoelemento se realiza automaticamente en un parametro() usando los  elementos "p" como "h1"
// se coloca el nombre de la funcion el la que se encerro los mensajes inciales 

condicionesIniciales();

 //asignarTextoElemento("h1","¡Juego del numero secreto!");
 //asignarTextoElemento("p"," Escribe un  numero del 1 al 10");


