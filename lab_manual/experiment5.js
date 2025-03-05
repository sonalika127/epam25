function filterArray() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const condition = (element) => element % 2 === 0;

    const filteredArray = array.filter(condition);

    return filteredArray;
}

const result = filterArray();
console.log(result);
