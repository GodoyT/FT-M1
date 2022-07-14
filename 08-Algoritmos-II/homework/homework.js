'use strict'
// No cambies los nombres de las funciones.

  function quickSort(array){
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante//[6]
  // Tu código:
  
    if (array.length <= 1) return array;
    let right = []
    let left = []
    let save = []
    let pivote = array.pop();
    for (let i = 0; i < array.length; i++){
        if (array[i] <= pivote){
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return save.concat(quickSort(left), pivote, quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let div = Math.ceil((array.length/2));
  let left = mergeSort(array.slice(0, div));
  let right = mergeSort(array.slice(div, array.length));

  let marge = function(left, right){
    let save = []
    while (left.length > 0 && right.length > 0){
      save.push(left[0] < right[0] ? left.shift() : right.shift())
    }
    return save.concat(left).concat(right);
  }

  return marge(left, right); 
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
