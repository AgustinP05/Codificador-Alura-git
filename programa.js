

     


/*ENCRIPTAAAAAR*/ 
function accionEncriptar(){
    var escrito= document.getElementById("campoTexto").value; /*Tomar valor de campoTexto por el id.*/

   var letraOriginal=[/e/g,/i/g,/a/g,/o/g,/u/g];
   //Array con las letras originales
   var palabraclave=["enter","imes","ai","ober","ufat"];
   //Array con la encriptacion
    
   for(var contador=0;contador<letraOriginal.length;contador++){
    escrito=escrito.replace(letraOriginal[contador],palabraclave[contador]);
   }//Con el contador, busca cada letra, y luego las cambia por la encriptacion. 


   document.getElementById("campoResultado").innerHTML=escrito;

    
}/*-Expresiones regulares: Lo voy a explicar abajo en el archivo*/ 

/*DESENCRIPTAAAAAR*/ 
function accionDesencriptar(){

    var escrito= document.getElementById("campoTexto").value; /*Tomar valor de campoTexto por el id.*/

   var letraOriginal=["e","i","a","o","u"];
   //Array con las letras originales
   var palabraclave=[/enter/g,/imes/g,/ai/g,/ober/g,/ufat/g];
   //Array con la encriptacion
    
   for(var contador=0;contador<letraOriginal.length;contador++){
    escrito=escrito.replace(palabraclave[contador], letraOriginal[contador]);
   }//Con el contador, busca cada conjunto de caracteres, y luego las cambia por la letra. 

   document.getElementById("campoResultado").innerHTML=escrito;
}

function accionCopiar(){
    var texto= document.getElementById("campoResultado");

   texto.focus();
   document.execCommand("selectAll");
   document.execCommand("copy");
}





/*Expresiones regulares:

Banderas de expresiones regulares
- /caracter/ Solo buscara la primera coincidencia. 
- /caracter/g Buscara todas las coincidencias.
- /caracter/i encontrara coincidencia sin importar la mayuscula o minuscula */