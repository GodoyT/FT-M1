"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto value existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value; 
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function(value){
  let nodo = new BinarySearchTree(value);
        if (value < this.value) {
            if (this.left === null){
                this.left = nodo;
                return this.left
            } else {
            return this.left.insert(value);
            }
        } else {
            if (this.right === null){
                this.right = nodo;
                return this.right
            } else {
            return this.right.insert(value);
            }
        }
}

BinarySearchTree.prototype.contains = function(value){
  if (this.value === value) return true;
    if (value < this.value){
        if (this.left === null){
            return false
        } else {
            if (this.left.value === value){
                return true; 
            }  
        }
        return this.left.contains(value);
    } else {
        if (this.right === null){
            return false
        } else {
            if (this.right.value === value) {
                return true;
            }
        }
        return this.right.contains(value);
    }
}

BinarySearchTree.prototype.size = function(value){
  if (this.left === null && this.right === null) return 1;
  if (this.left !== null && this.right === null) return 1 + this.left.size();
  if (this.left  == null && this.right !== null) return 1 + this.right.size();
  if (this.left !== null && this.right !== null) return 1 + this.left.size() + this.right.size();
}

BinarySearchTree.prototype.depthFirstForEach = function(cb ,order){
  if (!order || order === 'in-order'){
    if (this.left) this.left.depthFirstForEach(cb, order)
    cb(this.value)
    if (this.right) this.right.depthFirstForEach(cb, order);
  } else if (order === 'pre-order'){
    cb(this.value)
    if (this.left) this.left.depthFirstForEach(cb, order)
    if (this.right) this.right.depthFirstForEach(cb, order);
  } else {
    if (this.left) this.left.depthFirstForEach(cb, order)
    if (this.right) this.right.depthFirstForEach(cb, order);
    cb(this.value)
  }
}


BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr = []){
  cb(this.value)
  if(this.left) arr.push(this.left);
  if(this.right) arr.push(this.right);
  arr.length && arr.shift().breadthFirstForEach(cb, arr);
}





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
