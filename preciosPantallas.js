function pantallas(){
    
    document.getElementById("botonPantallas").style.display="none";
    
    let precioInicial = 200;
    const contenedorDePrecios = document.querySelector(".contenedorDePrecios");
    const fragmento = document.createDocumentFragment();
    let x = 1;
    
    for(var i = 1; i < 7; i++){
        
        
        const precio = document.createElement("LI");
        
        precio.innerHTML = JSON.stringify ("El precio para " +  x  + " pantalla/s es de: " + precioInicial);
        x++;
        fragmento.appendChild(precio);

        precioInicial = precioInicial + 150;
        
    }

    contenedorDePrecios.appendChild(fragmento);

}