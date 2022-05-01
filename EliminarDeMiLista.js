/*Eliminar pelicula de mi lista.*/ 

function eliminarDeMiLista(pelicula,idPelicula,classBotonAgr,ClassBotonElim){ 
    console.log(pelicula);

    swal("", `You removed ${pelicula} from your wish list :C`,"error");

    sessionStorage.removeItem ("WishList1");

    //necesito el elemento <li> a eliminar

   // console.log(peliculaEliminar);

const peliculaEliminar= document.getElementById(idPelicula);

console.log(peliculaEliminar);

    const contenedor= document.getElementById("list-modal");

    console.log(contenedor);

    contenedor.removeChild( peliculaEliminar );

    //quitar el boton de eliminar y agrego el de agregar
    console.log(document.querySelector(classBotonAgr));
    console.log(document.querySelector(ClassBotonElim))
    document.querySelector(classBotonAgr).style.display = "block";
    document.querySelector(ClassBotonElim).style.display = "none";
    
}
