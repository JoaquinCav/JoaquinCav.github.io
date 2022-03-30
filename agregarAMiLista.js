const arrayMiLista = [];

function verLista() {

    console.log(arrayMiLista);
}


function agregarAMiLista(pelicula){

    
    swal("","Agregaste " + pelicula + " a tú lista","success");
    arrayMiLista.push(pelicula);
}

