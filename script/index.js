
// PRIMER RETO : SEMANA 1 

/*
RETO
 Lista de nombres
Escribe un programa que le pida al usuario 3 nombres, los almacene en un arreglo de datos y luego los muestre, si el nombre está repetido, no debe guardarlo.
*/

var names = [];

function addName() {
  var input = document.getElementById('nombreInput');
  var name = input.value.trim();
  if (name && !names.includes(name)) {
    names.push(name);
    displayNames();
  }
  input.value = ''; // Clear the input field
}

function displayNames() {
  var list = document.getElementById('nombreLista');
  list.innerHTML = '<ol>' + names.map(function(name) {
    return '<li>' + name + '</li>';
  }).join('') + '</ul>';
}


/* SEGUNDO RETO : SEMANA 2

Generador de Números Primos 

Descripción:
Escribe una función en JavaScript que genere todos los números primos menores que un número dado n. Un número primo es un número natural mayor que 1 que no tiene divisores positivos más que 1 y él mismo.

Requisitos:

La función debe tomar un número entero n como argumento.
La función debe devolver un array con todos los números primos menores que n.*/


