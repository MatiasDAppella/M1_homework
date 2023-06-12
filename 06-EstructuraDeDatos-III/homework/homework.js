'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value){
    this.value = value,
    this.left = null,
    this.right = null
};

// size: retorna la cantidad total de nodos del árbol.
BinarySearchTree.prototype.size = function(){
    if (this.left && this.right) return 1 + this.left.size() + this.right.size()
    else if (this.left && !this.right) return 1 + this.left.size()
    else if (this.right && !this.left) return 1 + this.right.size()
    else return 1
};

// insert: agrega un nodo en el lugar correspondiente.
BinarySearchTree.prototype.insert = function(v){
    if (v < this.value){
        if (this.left) return this.left.insert(v)
        else this.left = new BinarySearchTree(v)

    } else if (v > this.value){
        if (this.right) return this.right.insert(v)
        else this.right = new BinarySearchTree(v)
    }
    return null
};

// contains: retorna true/false al evaluar si 'v' existe dentro del árbol.
BinarySearchTree.prototype.contains = function(v){
    if (v == this.value) return true
    if (v < this.value && this.left) return this.left.contains(v)
    if (v > this.value && this.right) return this.right.contains(v)
    return false
};

// depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS).
// "in-order" (por defecto), "pre-order" o "post-order", de acuerdo al parametro.
BinarySearchTree.prototype.depthFirstForEach = function(res, p){
    switch (p){
        case 'pre-order':
            res(this.value)
            if (this.left) this.left.depthFirstForEach(res, p)
            if (this.right) this.right.depthFirstForEach(res, p)
            break;

        case 'post-order':
            if (this.left) this.left.depthFirstForEach(res, p)
            if (this.right) this.right.depthFirstForEach(res, p)
            res(this.value)
            break;

        default: // in-order
            if (this.left) this.left.depthFirstForEach(res, p)
            res(this.value)
            if (this.right) this.right.depthFirstForEach(res, p)
            break;
    }
};

// breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS).
BinarySearchTree.prototype.breadthFirstForEach = function(res){
    let queue = new Array(this)

    while (queue.length){
        let current = queue.shift()
        res(current.value)
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }

    return res
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
