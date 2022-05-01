
const arrayMiLista = [];


const listaModal = document.getElementById(`list-modal`);




function agregarAMiListaPeli1(pelicula){  //Pelicula 1

    swal("","You added " + pelicula + " to your wish list","success");
    
    
    sessionStorage.setItem ("WishList1", JSON.stringify('El padrino'));
    
    let wishlist = sessionStorage.getItem ("WishList1");
    JSON.parse(wishlist);
    arrayMiLista.push(wishlist);

    mostrarBoton();

    
    const itemDelModal1 = document.createElement(`li`);
    itemDelModal1.textContent = `- El Padrino`;
    listaModal.appendChild(itemDelModal1);
    
}
    

function mostrarBoton () {

document.querySelector(".btn-agr1").style.display = "none";
document.querySelector(".btn-elim1").style.display = "block";

}



//****************Pelicula 2*****************************************/

function agregarAMiListaPeli2(pelicula){

    swal("","You added " + pelicula + " to your wish list","success");
    arrayMiLista.push(pelicula);
    
    sessionStorage.setItem ("WishList2", JSON.stringify('batman'));
    
    mostrarBoton2();
    

    const listaModal1 = document.getElementById(`list-modal`);
    const itemDelModal1 = document.createElement(`li`);
    itemDelModal1.textContent = `- Batman`;
    listaModal1.appendChild(itemDelModal1);
}


function mostrarBoton2 () {

document.querySelector(".btn-agr2").style.display = "none";
document.querySelector(".btn-elim2").style.display = "block";
    
}

//****************Pelicula 3*****************************************/

function agregarAMiListaPeli3(pelicula){

    swal("","You added " + pelicula + " to your wish list","success");
    arrayMiLista.push(pelicula);

    sessionStorage.setItem ("WishList3", JSON.stringify('El señor de los anillos'));

    mostrarBoton3();
    
    const listaModal1 = document.getElementById(`list-modal`);
    const itemDelModal1 = document.createElement(`li`);
    itemDelModal1.textContent = `- El señor de los anillos`;
    listaModal1.appendChild(itemDelModal1);
}
arrayMiLista.push(JSON.parse(sessionStorage.getItem("WishList3")));

function mostrarBoton3 () {

document.querySelector(".btn-agr3").style.display = "none";
document.querySelector(".btn-elim3").style.display = "block";
    
}

//****************Pelicula 4*****************************************/

function agregarAMiListaPeli4(pelicula){

    swal("","You added " + pelicula + " to your wish list","success");
    arrayMiLista.push(pelicula);

    sessionStorage.setItem ("WishList4", JSON.stringify('La milla verde'));
    
    mostrarBoton4();

    const listaModal1 = document.getElementById(`list-modal`);
    const itemDelModal1 = document.createElement(`li`);
    itemDelModal1.textContent = `- La milla verde`;
    listaModal1.appendChild(itemDelModal1);
    
}
arrayMiLista.push(JSON.parse(sessionStorage.getItem("WishList4")));

function mostrarBoton4 () {

document.querySelector(".btn-agr4").style.display = "none";
document.querySelector(".btn-elim4").style.display = "block";
    
}

//****************Pelicula 5*****************************************/

function agregarAMiListaPeli5(pelicula){

    swal("","You added " + pelicula + " to your wish list","success");
    arrayMiLista.push(pelicula);

    sessionStorage.setItem ("WishList5", JSON.stringify('Forrest Gun'));
    
    mostrarBoton5();

    const listaModal1 = document.getElementById(`list-modal`);
    const itemDelModal1 = document.createElement(`li`);
    itemDelModal1.textContent = `- Forrest Gun`;
    listaModal1.appendChild(itemDelModal1);
    
}
arrayMiLista.push(JSON.parse(sessionStorage.getItem("WishList5")));

function mostrarBoton5 () {

document.querySelector(".btn-agr5").style.display = "none";
document.querySelector(".btn-elim5").style.display = "block";
    
}

//****************Pelicula 6*****************************************/

function agregarAMiListaPeli6(pelicula){

    swal("","You added " + pelicula + " to your wish list","success");
    arrayMiLista.push(pelicula);

    
    sessionStorage.setItem ("WishList6", JSON.stringify('Conan'));
    
    arrayMiLista.push(JSON.parse(sessionStorage.getItem("WishList6")));
    
    mostrarBoton6();

    const listaModal1 = document.getElementById(`list-modal`);
    const itemDelModal1 = document.createElement(`li`);
    itemDelModal1.textContent = `- Conan`;
    listaModal1.appendChild(itemDelModal1);
    
    
}

function mostrarBoton6 () {

document.querySelector(".btn-agr6").style.display = "none";
document.querySelector(".btn-elim6").style.display = "block";
    
}

//****************Pelicula 7*****************************************/

function agregarAMiListaPeli7(pelicula){

    swal("","You added " + pelicula + " to your wish list","success");
    arrayMiLista.push(pelicula);

    sessionStorage.setItem ("WishList7", JSON.stringify('Revancha'));
    
    arrayMiLista.push(JSON.parse(sessionStorage.getItem("WishList7")));
    
    mostrarBoton7();

    const listaModal1 = document.getElementById(`list-modal`);
    const itemDelModal1 = document.createElement(`li`);
    itemDelModal1.textContent = `- Revancha`;
    listaModal1.appendChild(itemDelModal1);
    
}

function mostrarBoton7 () {

document.querySelector(".btn-agr7").style.display = "none";
document.querySelector(".btn-elim7").style.display = "block";
    
}

//****************Pelicula 8*****************************************/

function agregarAMiListaPeli8(pelicula){

    swal("","You added " + pelicula + " to your wish list","success");
    arrayMiLista.push(pelicula);

    sessionStorage.setItem ("WishList8", JSON.stringify('Scre4m'));
    
    arrayMiLista.push(JSON.parse(sessionStorage.getItem("WishList8")));
    
    mostrarBoton8();

    const listaModal1 = document.getElementById(`list-modal`);
    const itemDelModal1 = document.createElement(`li`);
    itemDelModal1.textContent = `- Scre4m`;
    listaModal1.appendChild(itemDelModal1);
    
}

function mostrarBoton8 () {

document.querySelector(".btn-agr8").style.display = "none";
document.querySelector(".btn-elim8").style.display = "block";
    
}

//****************Pelicula 9*****************************************/

function agregarAMiListaPeli9(pelicula){

    swal("","You added " + pelicula + " to your wish list","success");
    arrayMiLista.push(pelicula);

    sessionStorage.setItem ("WishList9", JSON.stringify('Spider-Man'));
    
    arrayMiLista.push(JSON.parse(sessionStorage.getItem("WishList9")));
    
    mostrarBoton9();

    const listaModal1 = document.getElementById(`list-modal`);
    const itemDelModal1 = document.createElement(`li`);
    itemDelModal1.textContent = `- Spider-Man`;
    listaModal1.appendChild(itemDelModal1);
    
}

function mostrarBoton9 () {

document.querySelector(".btn-agr9").style.display = "none";
document.querySelector(".btn-elim9").style.display = "block";
    
}

//****************Pelicula 10*****************************************/

function agregarAMiListaPeli10(pelicula){

    swal("","You added " + pelicula + " to your wish list","success");
    arrayMiLista.push(pelicula);

    sessionStorage.setItem ("WishList10", JSON.stringify('Sonic 2'));
    
    arrayMiLista.push(JSON.parse(sessionStorage.getItem("WishList10")));
    
    mostrarBoton10();

    const listaModal1 = document.getElementById(`list-modal`);
    const itemDelModal1 = document.createElement(`li`);
    itemDelModal1.textContent = `- Sonic 2`;
    listaModal1.appendChild(itemDelModal1);
    
}

function mostrarBoton10 () {

document.querySelector(".btn-agr10").style.display = "none";
document.querySelector(".btn-elim10").style.display = "block";
    
}







