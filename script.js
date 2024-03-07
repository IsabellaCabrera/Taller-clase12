const valor1 = prompt("digite el primer valor");
const valor2 = prompt("digite el segundo valor");
const valor3 = prompt("digite el tercer valor");

const conversion1= parseInt(valor1);
const conversion2= parseInt(valor2);
const conversion3= parseInt(valor3);

const parrafo = document.querySelector("#parrafo");

if (valor1 > valor2 && valor1 > valor3) {
    parrafo.innerHTML = "El numero mas grande es " + valor1;
}

else if (valor2 > valor1 && valor2 > valor3) {

    parrafo.innerHTML = "El numero mas grande es " + valor2;
}

else  {
    parrafo.innerHTML = "El numero mas grande es " + valor3;
}