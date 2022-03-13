
let edad = prompt('Ingrese su edad: ');
    if (edad >= 13){
        alert('Puedes continuar en este sitio :D');
    } else {
        alert('No puedes continuar en este sitio :C')
    }

/******************************************************************************/ 
/***********************Funcion para agragar a Mi lista************************/
/******************************************************************************/ 

const arrayMiLista = [];

function verLista() {

    console.log(arrayMiLista);
}


function agregarAMiLista(pelicula){

    console.log("Agregaste " + pelicula + " a tú lista.");
    alert("Agregaste " + pelicula + " a tú lista");
    arrayMiLista.push(pelicula);
}

/*Eliminar pelicula de mi lista.*/ 

function eliminarDeMiListaRandom1(){  /*Eliminar pelicula random 1 */

    indicePelicula = arrayMiLista.indexOf("Pelicula random");
    arrayMiLista.splice(indicePelicula,1);
    console.log("Pelicula random se eliminó de tu lista.");
}

function eliminarDeMiListaRandom2(){ /*Eliminar pelicula random 2 */

    indicePelicula = arrayMiLista.indexOf("Pelicula random2");
    arrayMiLista.splice(indicePelicula,1);
    console.log("Pelicula random2 se eliminó de tu lista.");
}

function eliminarDeMiListaRandom3(){ /*Eliminar pelicula random 3 */

    indicePelicula = arrayMiLista.indexOf("Pelicula random3");
    arrayMiLista.splice(indicePelicula,1);
    console.log("Pelicula random3 se eliminó de tu lista.");
}

function eliminarDeMiListaRandom4(){ /*Eliminar pelicula random 4 */

    indicePelicula = arrayMiLista.indexOf("Pelicula random4");
    arrayMiLista.splice(indicePelicula,1);
    console.log("Pelicula random4 se eliminó de tu lista.");
}

function eliminarDeMiListaRandom5(){ /*Eliminar pelicula random 5 */

    indicePelicula = arrayMiLista.indexOf("Pelicula random5");
    arrayMiLista.splice(indicePelicula,1);
    console.log("Pelicula random5 se eliminó de tu lista.");
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

/******************************************************************************/ 
/****************Funcion para mostrar el top 10*********************/
/******************************************************************************/ 

function top10(){

    const array = [];
    
    function Pelicula(titulo, Calificación){  //Funcion constructora.

        this.Titulo = titulo;
        this.calificacion = Calificación;
    
    }
    

    const Pelicula1 = new Pelicula("One piece: Red.", "10/10");  //Armando las peliculas.
    array.push(Pelicula1);

    /********************************************************************/

    const Pelicula2 = new Pelicula("Shawshank Redemption.", "10/10");
    array.push(Pelicula2);

    /********************************************************************/

    const Pelicula3 = new Pelicula("Destino Final 4", "7/10");
    array.push(Pelicula3);

    /********************************************************************/
    
    const Pelicula4 = new Pelicula("Harry Potter.", "9/10");
    array.push(Pelicula4);

    /********************************************************************/

    const Pelicula5 = new Pelicula("Star Wars.", "8/10");
    array.push(Pelicula5);

    /********************************************************************/

    const Pelicula6 = new Pelicula("Demon Slayer: The movie.", "10/10");
    array.push(Pelicula6);

    /********************************************************************/

    const Pelicula7 = new Pelicula("El padrino: Parte 3", "8.5/10");
    array.push(Pelicula7);

    /********************************************************************/

    const Pelicula8 = new Pelicula("El club de la pelea.", "10/10");
    array.push(Pelicula8);

    /********************************************************************/

    const Pelicula9 = new Pelicula("El lobo de Wall Street", "10/10");
    array.push(Pelicula9);

    /********************************************************************/

    const Pelicula10 = new Pelicula("Rocky 3", "8/10");
    array.push(Pelicula10);

    /********************************************************************/

    for (let i = 0; i < array.length; i++) {  //Mostrando el top 10 en la consola.
        console.log(array[i]);
    }

}