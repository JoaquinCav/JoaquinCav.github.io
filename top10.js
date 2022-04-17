
function top10(){   

    const array = [];
    
    document.getElementById("botonTop10").style.display = "none";
    mostrarContenido();
    
    
    function Pelicula(titulo){  //Funcion constructora.

        this.Titulo = titulo;
        
    
    }
    
    

    const Pelicula1 = new Pelicula("One piece: Red." );  //Armando las peliculas.
    localStorage.setItem ("peli1", JSON.stringify(Pelicula1));
    array.push(Pelicula1);


    /********************************************************************/

    const Pelicula2 = new Pelicula("Shawshank Redemption.");
    localStorage.setItem ("peli2", JSON.stringify(Pelicula2));
    array.push(Pelicula2);

    /********************************************************************/

    const Pelicula3 = new Pelicula("Destino Final 4");
    localStorage.setItem ("peli3", JSON.stringify(Pelicula3));
    array.push(Pelicula3);

    /********************************************************************/
    
    const Pelicula4 = new Pelicula("Harry Potter.");
    localStorage.setItem ("peli4", JSON.stringify(Pelicula4));
    array.push(Pelicula4);

    /********************************************************************/

    const Pelicula5 = new Pelicula("Star Wars. Episodio IV.");
    localStorage.setItem ("peli5", JSON.stringify(Pelicula5));
    array.push(Pelicula5);

    /********************************************************************/

    const Pelicula6 = new Pelicula("Demon Slayer: The movie.");
    localStorage.setItem ("peli6", JSON.stringify(Pelicula6));
    array.push(Pelicula6);

    /********************************************************************/

    const Pelicula7 = new Pelicula("El padrino: Parte 3");
    localStorage.setItem ("peli7", JSON.stringify(Pelicula7));
    array.push(Pelicula7);

    /********************************************************************/

    const Pelicula8 = new Pelicula("El club de la pelea.");
    localStorage.setItem ("peli8", JSON.stringify(Pelicula8));
    array.push(Pelicula8);

    /********************************************************************/

    const Pelicula9 = new Pelicula("El lobo de Wall Street");
    localStorage.setItem ("peli9", JSON.stringify(Pelicula9));
    array.push(Pelicula9);

    /********************************************************************/

    const Pelicula10 = new Pelicula("Rocky 3");
    localStorage.setItem ("peli10", JSON.stringify(Pelicula10));
    array.push(Pelicula10);

    /********************************************************************/

    const onePiece = JSON.parse(localStorage.getItem ("peli1"));
    document.getElementById("peli1").innerHTML = onePiece.Titulo;
    

    const shawRedemp = JSON.parse(localStorage.getItem ("peli2"));
    document.getElementById("peli2").innerHTML = shawRedemp.Titulo;

    const dFinal = JSON.parse(localStorage.getItem ("peli3"));
    document.getElementById("peli3").innerHTML = dFinal.Titulo;

    const HarryP = JSON.parse(localStorage.getItem ("peli4"));
    document.getElementById("peli4").innerHTML = HarryP.Titulo;

    const starWars = JSON.parse(localStorage.getItem ("peli5"));
    document.getElementById("peli5").innerHTML = starWars.Titulo;

    const demonSlayer = JSON.parse(localStorage.getItem ("peli6"));
    document.getElementById("peli6").innerHTML = demonSlayer.Titulo;

    const padrino = JSON.parse(localStorage.getItem ("peli7"));
    document.getElementById("peli7").innerHTML = padrino.Titulo;

    const clubPelea = JSON.parse(localStorage.getItem ("peli8"));
    document.getElementById("peli8").innerHTML = clubPelea.Titulo;

    const wallStreet = JSON.parse(localStorage.getItem ("peli9"));
    document.getElementById("peli9").innerHTML = wallStreet.Titulo;

    const rocky = JSON.parse(localStorage.getItem ("peli10"));
    document.getElementById("peli10").innerHTML = rocky.Titulo;
    

function mostrarContenido() {
    document.getElementById("contenedorTop10").style.display = "block"; /*Accedo al css mediante "Style", y luego a una parte especifica del css mediante (en este caso) .display = nuevo valor.*/
}


}
