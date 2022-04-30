

function respuestaLoad1() {
    if(  sessionStorage.getItem(`wishList1`) !=  null  ){
        document.querySelector(".btn-agr1").style.display = "none";
        document.querySelector(".btn-elim1").style.display = "block";
    }   else{
            document.querySelector(".btn-agr1").style.display = "block";
            document.querySelector(".btn-elim1").style.display = "none";
    }
}