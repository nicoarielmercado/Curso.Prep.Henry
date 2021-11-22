
// Practica de length
var name = "rodolfo"
console.log (name.length);


// Practica funciones

function ladrido(name){
    console.log(name+ " esta ladrando"); 
}
ladrido(name);

function jugar(name){
    console.log(name+ " esta jugando a la pelota");
}
jugar(name)

function suma(){
    console.log(20+5);
}
suma();
///////////////

function multiplicacion(n1,n2){
    return n1*n2;
    }
multiplicacion(5,1)
console.log(multiplicacion(5,1));

//////////////

function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    return str+ "!";
  
  }
agregarSimboloExclamacion ("hola mundo");
console.log (agregarSimboloExclamacion ("Hoy es una linda noche"));

////

function combinarNombres1(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Henry" -> "Soy Henry"
    // Tu código:
    
  return nombre+" "+apellido;
  
  }


  console.log (combinarNombres1("Nicolás", "Mercado"));

  /////////////////////////

function combinarNombres2(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Henry" -> "Soy Henry"
    // Tu código:
    
  console.log (nombre+" "+apellido);
  
  }
  
 combinarNombres2("Nicolás", "Mercado");

 //////////////////////////////////

 function obtenerSaludo(nombre,apellido) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    return "Hola "+nombre+" "+apellido+"!";
  }
  console.log(obtenerSaludo ("Nico","Mercado"));

  ///////////////////////////////////

  function esVocal(letra){
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    // Si no es vocal, tambien debe devolver "Dato incorrecto".
    //Escribe tu código aquí
   
if (letra.length > 1) {
  return "Dato incorrecto"
}
if (letra === "a" || letra === "e" ||letra === "i" ||letra === "o" ||letra === "u") {
  return "Es vocal"
}
return "Dato incorrecto"
}

