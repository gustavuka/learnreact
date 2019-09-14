const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);

const item = ['coffe (hot)', '$2.00', '$2.50', '$2.75'];
const [ beverage, , medium] = item;
console.log(`A medium ${beverage} costs ${medium}.`) 