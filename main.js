//declaro variables con sus respectivos votantes en la ultima eleccion

let azul = 87306;
let bolivar = 72618;
let generalalvear = 20770;
let olavarria = 221993;
let roqueperez = 26340;
let saladillo = 65320;
let tapalque = 20599;
let veinticincodemayo = 73682;
let total = (azul+bolivar+generalalvear+olavarria+roquePerez+saladillo+tapalque+veinticincodeMayo);
let distrito;
let consultaPorcentaje;
let porcentaje;
let entrada;

const SALIR = "salir";
const INGRESAR = "ingresar";



//interaciones con el usuario
do {
    entrada = prompt('Bienvenido a la consulta sobre la septima seccion electoral' + '\n'
    + "ingresar" + '\n'
    + "salir" + '\n');
    if (entrada !== INGRESAR && entrada !== SALIR) {
        alert('Usted ha ingresado una operacion incorrecta');
    } else {
        if (entrada !== "salir"){

            let consulta = prompt("¿desea saber la cantidad de votantes de su distrito?")
                if (consulta === "si") {
                        distrito = prompt("escriba el nombre del distrito de la septima  seccion electoral sin mayusculas ni espacios")
                        switch (distrito){
                        case "azul": 
                            alert ("el numero de votantes de su distrito es " + azul)
                            break
                        case "bolivar": 
                            alert  ("el numero de votantes de su distrito es " + bolivar)
                            break
                        case "generalalvear": 
                            alert  ("el numero de votantes de su distrito es " + generalalvear)
                            break
                        case  "olavarria": 
                            alert  ("el numero de votantes de su distrito es " + olavarria) 
                            break 
                        case "roquePerez": 
                            alert  ("el numero de votantes de su distrito es " + roquePerez)
                            break         
                        case "saladillo": 
                            alert  ("el numero de votantes de su distrito es " + saladillo)
                            break
                        case "tapalque": 
                            alert  ("el numero de votantes de su distrito es " + tapalque)
                        break
                        case "veinticincodeMayo": 
                            alert  ("el numero de votantes de su distrito es " + veinticincodeMayo)
                            break
                        
                        }            
            }
                else {
                alert("Hasta luego");}
                
            //calculadora que te devuelva el % del distrito en relacion al total    
            consultaPorcentaje = prompt("¿desea saber cual es el % de votantes de su distrito respecto al total de la seccion?")
                if (consultaPorcentaje === "si"){
                    distrito = prompt("escriba el nombre del distrito de la septima  seccion electoral sin mayusculas ni espacios")
                        switch (distrito){
                        case "azul":
                            porcentaje = (azul * 100) / total
                            break
                        case "bolivar": 
                            porcentaje = (bolivar * 100) / total
                            break
                        case "generalalvear":
                            porcentaje = (generalalvear * 100) / total
                            break
                        case "olavarria": 
                            porcentaje = (olavarria * 100) / total
                        case "roquePerez": 
                            porcentaje = (roquePerez * 100) / total
                            break
                        case "saladillo": 
                            porcentaje = (saladillo* 100) / total
                            break
                        case "tapalque": 
                            porcentaje = (tapalque * 100) / total
                            break
                        case "veinticincodeMayo": 
                            porcentaje = (veinticincodeMayo * 100) / total
                            break
                    
                    }
                    alert("el porcentaje de su distrito es " +porcentaje + "%");
                }
                else if (consultaPorcentaje === "no") {
                    alert ("Gracias por visitar nuestra web")
                }
    }
        }
} while (entrada !== "salir");

alert("Gracias por usar visitar nuestra web!");







