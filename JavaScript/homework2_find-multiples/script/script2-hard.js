let m = +prompt('Введите первое число');
let n = +prompt('Введите второе число');

function isInteger(num) {
    return (num ^ 0) === num;
}

while (isInteger(m) === false && isInteger(n) === false) {
    m = 0;
    n = 0;
    m = +prompt('Введите первое число');
    n = +prompt('Введите второе число');
}


next:
for (let i = m; i <= n; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue next;
    }

    console.log(i)

}