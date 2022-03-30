
/*Eliminar pelicula de mi lista.*/ 

function eliminarDeMiLista(pelicula){


    indicePelicula = arrayMiLista.indexOf(pelicula);
    arrayMiLista.splice(indicePelicula,1);
    swal("", `Eliminaste ${pelicula} de tu lista :C`,"error");

}