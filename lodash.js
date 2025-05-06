import { _, puts } from './modules/export_config.js';

class Lodash_teste {
  constructor(config = { menu_able: false }) {
    this.arr = []; 
    this._arr = [];
    this.arr_l = [];
    this._arr_l = [];
  }

  values_default() {
    this.arr = [0, 1, 2, 9, 3, 5, 4, 6, 8, 7, 8];
    this._arr = _.reverse([...this.arr]);
    this.arr_l = ['a', 'b', 'g', 'f', 'c', 'c', 'h', 'e', 'w', 'a', 's', 'd'];
    this._arr_l = _.reverse([...this.arr_l]);
  }

  options_class() {
    return [
      ['selecione uma opcao'],
      ['chunk_lodash', 'Divide o array em pedaços.'],
      ['compact_lodash', 'Remove valores falsy do array.'],
      ['concat_lodash', 'Concatena arrays e/ou valores.'],
      ['difference_lodash', 'Retorna os valores do primeiro array que não estão nos outros.'],
      ['differenceBy_lodash', 'Similar a difference, mas com um iteratee.'],
      ['differenceWith_lodash', 'Similar a difference, mas com um comparator.'],
      ['drop_lodash', 'Cria uma fatia do array removendo elementos do início.'],
      ['dropRight_lodash', 'Cria uma fatia do array removendo elementos do final.'],
      ['dropRightWhile_lodash', 'Cria uma fatia do array removendo elementos do final enquanto o predicado retorna true.'],
    ];
  }

  chunk_lodash(array, size = 1) {
    return _.chunk(array, size);
  }

  compact_lodash(array) {
    return _.compact(array);
  }

  concat_lodash(array, ...values) {
    return _.concat(array, ...values);
  }

  difference_lodash(array, ...values) {
    return _.difference(array, ...values);
  }

  differenceBy_lodash(array, values, iteratee) {
    return _.differenceBy(array, values, iteratee);
  }

  differenceWith_lodash(array, values, comparator) {
    return _.differenceWith(array, values, comparator);
  }

  drop_lodash(array, n = 1) {
    return _.drop(array, n);
  }

  dropRight_lodash(array, n = 1) {
    return _.dropRight(array, n);
  }

  dropRightWhile_lodash(array, predicate) {
    return _.dropRightWhile(array, predicate);
  }
}

export const objlodash = new Lodash_teste();

export default objlodash;