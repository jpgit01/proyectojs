precio = 500000;
cantidad = 0;
total = 0;

precioSpan = document.querySelector(".precio-inicial");
cantidadSpan = document.querySelector(".cantidad");
totalSpan = document.querySelector(".valor-total");

precioSpan.innerHTML = precio;
cantidadSpan.innerHTML = cantidad;
totalSpan.innerHTML = total;

btnSuma = document.querySelector("#suma");
btnResta = document.querySelector("#resta");

function suma(){
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
}

function resta(){
    cantidad--;
    cantidadSpan.innerHTML = cantidad;
}