/*  Прототипное наследование помогает создать от другого объекта новые объекты в которых будут свойства и методы того другого объекта, но с возможностью расширения этого и
    дополнения новых свойств и методов.
 */

class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }


}
Object.defineProperties(Employee, {
    'name': {
        get: function() { return this._name },
        set: function(value) {this._name = value }
    },
    'age': {
        get: function() { return this._age },
        set: function(value) {this._age = value }
    },
    'salary': {
        get: function() { return this._salary },
        set: function(value) {this._salary = value }
    }
});


class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary*3);
        this.lang = lang;
    }
}
Object.defineProperties(Programmer, {
    'salary': {
        get: function() {return this._salary},
        set: function(value) {this._salary = value}
    }
});


const developer1 = new Programmer('Patrick', 24, 2500, ['JavaScript', 'Pascal', 'Ruby'])

const developer2 = new Programmer('Susan', 30, 3000, ['JavaScript', 'C#', 'C++'])

console.log(developer1, developer2)