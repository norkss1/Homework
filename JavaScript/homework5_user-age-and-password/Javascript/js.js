function CreateNewUser() {

    let userName = prompt('Введите имя: ');
    let userSurname = prompt('Введите Фамилию: ');
    let birthday = prompt('Введите дату Вашего рождения (текст в формате dd.mm.yyyy): ');

    this.firstName = userName;
    this.lastName = userSurname;
    this.bDay = new Date(Date.parse(birthday.split('.').reverse()));

    // Метод превращения имени и фамилии в LowerCase
    this.getLogin = function () {
        return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
    }

    // Метод подсчета возраста
    this.getAge = function () {
        let nowYear = new Date();
        let today = new Date(nowYear.getFullYear(), nowYear.getMonth(), nowYear.getDate());
        let birthCurrentYear = new Date(today.getFullYear(), this.bDay.getMonth(), this.bDay.getDate());
        let age;

        age = today.getFullYear() - this.bDay.getFullYear();

        if (today < birthCurrentYear) {
            age = age-1;
        }
        return age;
    }

    // Метод формирования строки из первой большой буквы + фомилия из маленьких букв + год рождения

    this.getPassword = function () {
        return this.firstName[0].toLocaleUpperCase() + this.lastName.toLowerCase() + birthday.slice(6);
    }
}

let newUser = new CreateNewUser();

console.log(newUser.getLogin());
console.log(newUser.getAge());
console.log(newUser.getPassword());













