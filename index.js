let precio = 500000;
let cantidad = 0;
let total = 0;

let precioSpan = document.querySelector(".precio-inicial");
let cantidadSpan = document.querySelector(".cantidad");
let totalSpan = document.querySelector(".valor-total");

precioSpan.innerHTML = precio;
cantidadSpan.innerHTML = cantidad;
totalSpan.innerHTML = total;

function suma(){
    cantidad++;
    total = cantidad * precio;
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = total;
    if(total < 0){
        cantidad = 1;
        total = cantidad * precio;
        cantidadSpan.innerHTML = cantidad;
        totalSpan.innerHTML = total;
    }
}

function resta(){
    cantidad--;
    total = cantidad * precio;
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = total;
    if(total < 0){
        cantidadSpan.innerHTML = 0;
        totalSpan.innerHTML = 0;
    }
}