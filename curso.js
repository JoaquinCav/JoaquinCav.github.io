
let edad = prompt('Ingrese su edad: ');
    if (edad >= 13){
        alert('Puedes continuar en este sitio :D');
    } else {
        alert('No puedes continuar en este sitio :C')
    }

/******************************************************************************/ 
/***********************Funcion para agragar a Mi lista************************/
/******************************************************************************/ 
function miLista(pelicula){

    console.log("Agregaste " + pelicula + " a tú lista.");
    alert("Agregaste " + pelicula + " a tú lista");
}

/******************************************************************************/ 
/****************Funcion para calcular precio de pantallas*********************/
/******************************************************************************/ 
function pantallas(){


    let precio = 200;
    for(var i = 1; i < 7; i++){
        
        alert("El precio para " + i + " pantalla/s, es de $" + precio + " por mes.");
        precio = precio + 150;
    }

}
