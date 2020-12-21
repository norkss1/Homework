function CreateNewUser() {

    let userName = prompt('Введите имя: ');
    let userSurname = prompt('Введите Фамилию: ');

    this.firstName = userName;
    this.lastName = userSurname;
    this.getLogin = function () {
        return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
    }
}

let newUser = new CreateNewUser();


console.log(newUser.getLogin());

