let arrExample = ['hello', 'world', 23, '23', null];
let type = 'string';

let filterBy = function (arr, type) {
    return arr.filter(function (value) {
            return typeof(value) !== type;
        });
}

console.log(filterBy(arrExample, type));