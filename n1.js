const Coffee = {
    name: 'Brazil Santos',
    class: 'Arabica',
    continent: 'South America',
    year: 2022
};

getObjectValues(Coffee);

function getObjectValues(obj) {
    for (var key in obj) {
        console.log(key + ' = ' + obj[key]);
    }
}