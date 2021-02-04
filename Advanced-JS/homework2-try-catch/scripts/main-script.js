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

function makeBookView({author, name, price}) {
    return (`
    Название книги: ${name}, 
    Автор: ${author}, 
    Цена: ${price}`);
}

function createList() {
    const root = document.getElementById('root');
    const ul = document.createElement('ul');
    root.prepend(ul);

    for (const {author, name, price} of books) {
        try {
            if (!author) {
                throw 'author'
            } else if (!name) {
                throw 'name'
            } else if (!price) {
                throw 'price'
            }

            if (author && name && price) {
                let li = document.createElement('li');
                li.textContent = makeBookView({author, name, price});
                ul.append(li)
            }
        } catch (e) {
            if (e === "author") {
                alert(`Error: Свойства "author" у книги ${name} c ценой ${price} не существует`);
            }
            if (e === "name") {
                alert(`Error: Свойства "name" у автора ${author} c ценой ${price} не существует`);
            }
            if (e === "price") {
                alert(`Error: Свойства "price" у автора ${author} с именем ${name} не существует`);
            }
        }
    }
}

createList();