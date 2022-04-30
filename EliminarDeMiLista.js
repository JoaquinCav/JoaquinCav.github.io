
/*Eliminar pelicula de mi lista.*/ 

function eliminarDeMiLista1(pelicula){


    indicePelicula = arrayMiLista.indexOf(pelicula);
    arrayMiLista.splice(indicePelicula,1);
    swal("", `You removed ${pelicula} from your wish list :C`,"error");

    sessionStorage.removeItem ("WishList1");

    mostrarBoton1();
    listaModal1.removeItem(`- El Padrino`);
}

function mostrarBoton1(){

    document.querySelector(".btn-agr1").style.display = "block";
    document.querySelector(".btn-elim1").style.display = "none";

}

/**********Pelicula 2*******************/

function eliminarDeMiLista2(pelicula){


    indicePelicula = arrayMiLista.indexOf(pelicula);
    arrayMiLista.splice(indicePelicula,1);
    swal("", `You removed ${pelicula} from your wish list :C`,"error");

    mostrarBotonElim2();
}

function mostrarBotonElim2(){

    document.querySelector(".btn-agr2").style.display = "block";
    document.querySelector(".btn-elim2").style.display = "none";

}

/**********Pelicula 3*******************/

function eliminarDeMiLista3(pelicula){


    indicePelicula = arrayMiLista.indexOf(pelicula);
    arrayMiLista.splice(indicePelicula,1);
    swal("", `You removed ${pelicula} from your wish list :C`,"error");

    mostrarBotonElim3();
}

function mostrarBotonElim3(){

    document.querySelector(".btn-agr3").style.display = "block";
    document.querySelector(".btn-elim3").style.display = "none";

}

/**********Pelicula 4*******************/

function eliminarDeMiLista4(pelicula){


    indicePelicula = arrayMiLista.indexOf(pelicula);
    arrayMiLista.splice(indicePelicula,1);
    swal("", `You removed ${pelicula} from your wish list :C`,"error");

    mostrarBotonElim4();
}

function mostrarBotonElim4(){

    document.querySelector(".btn-agr4").style.display = "block";
    document.querySelector(".btn-elim4").style.display = "none";

}

/**********Pelicula 5*******************/

function eliminarDeMiLista5(pelicula){


    indicePelicula = arrayMiLista.indexOf(pelicula);
    arrayMiLista.splice(indicePelicula,1);
    swal("", `You removed ${pelicula} from your wish list :C`,"error");

    mostrarBotonElim5();
}

function mostrarBotonElim5(){

    document.querySelector(".btn-agr5").style.display = "block";
    document.querySelector(".btn-elim5").style.display = "none";

}

/**********Pelicula 6*******************/

function eliminarDeMiLista6(pelicula){


    indicePelicula = arrayMiLista.indexOf(pelicula);
    arrayMiLista.splice(indicePelicula,1);
    swal("", `You removed ${pelicula} from your wish list :C`,"error");

    mostrarBotonElim6();
}

function mostrarBotonElim6(){

    document.querySelector(".btn-agr6").style.display = "block";
    document.querySelector(".btn-elim6").style.display = "none";

}

/**********Pelicula 7*******************/

function eliminarDeMiLista7(pelicula){


    indicePelicula = arrayMiLista.indexOf(pelicula);
    arrayMiLista.splice(indicePelicula,1);
    swal("", `You removed ${pelicula} from your wish list :C`,"error");

    mostrarBotonElim7();
}

function mostrarBotonElim7(){

    document.querySelector(".btn-agr7").style.display = "block";
    document.querySelector(".btn-elim7").style.display = "none";

}

/**********Pelicula 8*******************/

function eliminarDeMiLista8(pelicula){


    indicePelicula = arrayMiLista.indexOf(pelicula);
    arrayMiLista.splice(indicePelicula,1);
    swal("", `You removed ${pelicula} from your wish list :C`,"error");

    mostrarBotonElim8();
}

function mostrarBotonElim8(){

    document.querySelector(".btn-agr8").style.display = "block";
    document.querySelector(".btn-elim8").style.display = "none";

}

/**********Pelicula 9*******************/

function eliminarDeMiLista9(pelicula){


    indicePelicula = arrayMiLista.indexOf(pelicula);
    arrayMiLista.splice(indicePelicula,1);
    swal("", `You removed ${pelicula} from your wish list :C`,"error");

    mostrarBotonElim9();
}

function mostrarBotonElim9(){

    document.querySelector(".btn-agr9").style.display = "block";
    document.querySelector(".btn-elim9").style.display = "none";

}

/**********Pelicula 10*******************/

function eliminarDeMiLista10(pelicula){


    indicePelicula = arrayMiLista.indexOf(pelicula);
    arrayMiLista.splice(indicePelicula,1);
    swal("", `You removed ${pelicula} from your wish list :C`,"error");

    mostrarBotonElim10();
}

function mostrarBotonElim10(){

    document.querySelector(".btn-agr10").style.display = "block";
    document.querySelector(".btn-elim10").style.display = "none";

}