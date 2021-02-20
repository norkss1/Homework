const books = [
    {
        author: "Скотт Бэккер",
        name: "Тьма, что приходит прежде",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Воин-пророк",
    },
    {
        name: "Тысячекратная мысль",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Нечестивый Консульт",
        price: 70
    },
    {
        author: "Дарья Донцова",
        name: "Детектив на диете",
        price: 40
    },
    {
        author: "Дарья Донцова",
        name: "Дед Снегур и Морозочка",
    }
];

const root = document.getElementById('root');
const ul = document.createElement('ul');
root.prepend(ul);


function validate(obj) {

    const {author, name, price} = obj;

    if (!author) {
        throw new Error(`Свойства "author" у книги ${name} c ценой ${price} не существует`);
    }
    if (!name) {
        throw new Error(`Свойства "name" у автора ${author} c ценой ${price} не существует`);
    }
    if (!price) {
        throw new Error(`Свойства "price" у автора ${author} с именем ${name} не существует`);
    }
    return true;
}

function createList(arr) {
    let li = document.createElement('li');
    arr.forEach((item) => {
        if (validate(item)) {
            li.textContent = (`
            Название книги: ${item.name} --- Автор: ${item.author} --- Цена: ${item.price}`);
        }
        ul.append(li)
    })
}

try {
    createList(books);
} catch (error) {
    console.error(`${error.name} ${error.message}`)
}