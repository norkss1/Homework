const randArray1 = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
const randArray2 = ["1", "2", "3", "sea", "user", 23];


function transformArray(arr, parent) {
    let ul = document.createElement('ul');
    if (parent) {
        parent.insertAdjacentElement('afterbegin', ul);
    } else {
        document.body.insertAdjacentElement('afterbegin', ul);
    }

    arr.map(function (array) {
        let li = document.createElement('li');
        li.textContent = `${array}`;
        ul.append(li);
    });
}

transformArray(randArray1, document.querySelector('list'));
transformArray(randArray2);

setTimeout(() => document.body.remove(), 3000);