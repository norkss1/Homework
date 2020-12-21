let userNumber = +prompt('Введите число');

function isInteger(num) {
    return (num ^ 0) === num;
}

while (isNaN(userNumber) || isInteger(userNumber) === false) {
    userNumber = +prompt('Введите число');
}

if (userNumber > 4) {

    for (let i = 0; i <= userNumber; i = i + 5) {
        console.log(i);
    }
} else {
        alert('Sorry, no numbers');
};