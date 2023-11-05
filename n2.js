const Coffee = {
    name: 'Brazil Santos',
    class: 'Arabica',
    continent: 'South America',
    year: 2022
};

console.log(isProperty(Coffee, 'roaster'));

function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}