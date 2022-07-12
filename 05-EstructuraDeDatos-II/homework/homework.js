"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su(value)(tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un(value)o un callback. En el primer caso, buscamos un nodo cuyo(value)coincida con lo buscado; en el segundo, buscamos un nodo cuyo(value) al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo(value)sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo(value)sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() { // Contructor Lista
  this.head = null;
  this.size = 0;
}

function Node(value) { //Constructor Nodo
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value){
  let refe = this.head; // referencia al siguiente nodo
  if (this.head === null) { // si esta vacio se crea el nodo
    this.head = new Node(value);
    this.size++;
    return this.head;
  } else { // si no se itera cambiando hasta que la ultima posicion
    while (refe.next){
      refe = refe.next;
    }
    refe.next = new Node (value);
    this.size++
    return refe.next;
  }
}

LinkedList.prototype.remove = function(){
  
  if (!this.head) return null; //si la lista esta vacia devuelve null

  if (this.head.next === null) {
    let value = this.head.value
    this.head = null
    return value;
  }

  let refe = this.head;
  while (refe.next.next){ // se va al penultimo para poder desconectarle la referencia
    refe = refe.next;
  }
  let value = refe.next.value; // guarda el nodo
  refe.next = null;
  return value;
}

LinkedList.prototype.search = function(value){
  let refe = this.head;
  
  if (!refe) return null;//verifica si hay un nodo cabeza

  while (refe){ //revisa si hay un nodo y si hay es como un true y sigue el bucle hasta que sea false
    if (typeof value === 'function'){// comprueba que sea una function
      if (value(refe.value)){//revisa si el valor ingresado coinside con el de la funcion llamada
        return refe.value;
      }
    } else {
    if (refe.value === value){//si no es una funcion comprueba el valor ingreseado sea igual al del nodo
      return value;
    }
  }
    refe = refe.next;
  }

  return null;

}


/*
Implementar la clase HashTable.

Nuetra numBuckets hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave(value)(por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la numBuckets debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la numBuckets en la que se almacenará el dato.
  - set: recibe el conjunto clave(value)(como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el(value)que le corresponde en el bucket correcto de la numBuckets.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la numBuckets con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la numBuckets. Primero puedo chequear, con hasKey, si ya hay algo en la numBuckets con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave(value)en un bucket específico (determinado al hashear la clave)
*/

function HashTable(){
  this.numBuckets = 35;
  this.contenedores = new Array(this.numBuckets); 
}

HashTable.prototype.hash = function(nombre){
  let posicion = 0;
  for (let i = 0; i < nombre.length; i++){
    posicion = posicion + nombre.charCodeAt(i);    
  }
  return posicion % this.numBuckets
}

HashTable.prototype.set = function(nombre, valor){ 
  if (typeof nombre !== 'string'){
      throw new TypeError('Keys must be strings');
  }
  let posicion = this.hash(nombre);
  if (this.contenedores[posicion] === undefined){
    this.contenedores[posicion] = {};
  }
  this.contenedores[posicion][nombre] = valor;
}

HashTable.prototype.get = function(nombre){
  let posicion = this.hash(nombre)
  return this.contenedores[posicion][nombre];
}

HashTable.prototype.hasKey = function(nombre){
  let posicion = this.hash(nombre)
  if (this.contenedores[posicion].hasOwnProperty(nombre)){
      return true;
  }
  return false;
}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
