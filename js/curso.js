let numero = parseInt(prompt("Ingrese un numero, le diremos si todos los anteriores son pares u impares."));

for (var i = 1; i < numero; i++) {
    let resto= i%2;
        if (resto == 0) {
            console.log("El numero " + i + "es par.");
        } else {
            console.log("El numero " + i + "es impar.")
        }
}
