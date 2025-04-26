import _ from 'lodash'
// const _ = require('lodash')

function reset() {
  arr = [0,1,2,9,3,5,4,6,8,7,8]
  _arr = _.reverse([...arr])

  arr_l = ['a', 'b', 'g', 'f', 'c', 'c', 'h', 'e', 'w', 'a', 's', 'd'];
  _arr_l = _.reverse([...arr_l])
}


// console.log mais rapido
function puts(...p) {
  console.log("\n",...p,"\n")
  reset()
}

//arrays
var arr;
var _arr;

var arr_l;
var _arr_l;

reset()



/*
 _.chunk(array, [size=1])

Cria uma matriz de elementos dividida em grupos de comprimento size. 
Se arraynão puder ser dividida uniformemente, o bloco final
será composto pelos elementos restantes.
*/

puts("chunk",
  _.chunk(arr,3),
  _.chunk(arr_l,4))

/*
  _.compact(array)

Cria uma matriz com todos os valores falsos removidos.
Os valores false, null, 0, "", undefined, e NaNsão falsos.
*/

// push de exemplo
arr.push(false,'',0, NaN)

puts("Compact",_.compact(arr))
  
  
/*
  _.concat(array, [values])

  Cria uma nova matriz concatenada arraycom quaisquer matrizes e/ou valores adicionais.
*/

puts("concat",
  _.concat(arr,_arr),
  _.concat(arr_l, _arr_l))
  
  
/*
  _.difference(array, [values])

Cria uma matriz de arrayvalores não incluídos nas outras 
matrizes fornecidas usando SameValueZeropara comparações
de igualdade. A ordem e as referências dos valores resultantes
são determinadas pela primeira matriz.

Observação: Ao contrário de _.pullAll, este método retorna 
uma nova matriz.
*/

arr.push(10)
puts("difference", 
  _.difference(arr,_arr))

/*
  _.differenceBy(array, [values], [iteratee=_.identity])
  
Este método é semelhante, _.differenceexceto que aceita 
iterateeque é invocado para cada elemento de arraye valuespara
gerar o critério pelo qual eles são comparados. A ordem e 
as referências dos valores resultantes são determinadas pelo
primeiro array. O iterador é invocado com um argumento:
(valor) .

Observação: Ao contrário de _.pullAllBy, este método retorna
um novo array.

*/

puts("difference_By",
  _.differenceBy(arr,[1,5,3,8], Math.floor),
  _.differenceBy(arr_l,['b','c','f','g']))


/*
  _.differenceWith(array, [values], [comparator])
  
Este método é semelhante a , _.differenceexceto que aceita 
comparatorque é invocado para comparar elementos de array.
valuesA ordem e as referências dos valores resultantes são 
determinadas pelo primeiro array. O comparador é invocado com
dois argumentos: (arrVal, othVal) .

Observação: Ao contrário de _.pullAllWith, este método retorna um novo array.
*/

arr = [{ id: 1 }, { id: 2 }, {id: 3}];
_arr = [{ id: 2 }];

puts("differenceWith",_.differenceWith(arr, _arr, (a, b) => a.id !== b.id),
(_.differenceWith(arr, _arr, (a, b) => a.id === b.id)));

/*
  _.drop(array, [n=1])

Cria uma fatia arraycom nelementos removidos do início.
*/
puts(`drop: [${arr}]\n`,_.drop(arr, 2),_.drop(arr,3))

/*
  _.dropRight(array, [n=1])

Cria uma fatia arraycom nelementos descartados do final.
*/

puts(`dropRight [${_arr}]`, 
  _.dropRight(_arr, 3),
  _.dropRight(_arr,2))
  
  
/*
  _.dropRightWhile(array, [predicate=_.identity])

Cria uma fatia de elementos do array excluídos, removidos do 
final. Os elementos são removidos até que predicateretorne false.
O predicado é invocado com três argumentos: (valor, índice, matriz) .
*/

puts(`dropRightWhile [${_arr}]`,
  _.dropRightWhile(_arr, function(n) { return n < 3;}),
  _.dropRightWhile(_arr, (n) => n > 3) // não ira remover nada
)

