function CreateNewUser() {
    let userName = prompt('Введите имя: ');
    let userSurname = prompt('Введите Фамилию: ');

    this.setFirstName = function (name) {
        name = prompt('Введите имя: ');
        this.firstName = name;
    }

    this.setLastName = function (surname) {
        surname = prompt('Введите имя: ');
        this.lastName = surname;
    }

    this.firstName = userName;
    this.lastName = userSurname;
    this.getLogin = function () {
        return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
    }
}

let newUser = new CreateNewUser();

// для отображения работы программы:

console.log(newUser.getLogin());
console.log(newUser);
newUser.setFirstName();
newUser.setLastName();
console.log(newUser);
