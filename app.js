let ar = [];
ar[10] = 100;
ar[0] = 'hello';
ar[3] = [];
ar.length = 0;
[] && console.log(true);
//add at array end
ar[ar.length] = 10
ar.push(0)

//method "map"

console.log([1, 2, 3].map(n => n ** 3));

function getRandomIntNumber(min, max, minInclusive = true, maxInclusive = false) {
    if (!minInclusive) {
        min++;
    }
    if (maxInclusive) {
        max++;
    }
    return min < max ? Math.floor(Math.random() * (max - min) + min) : undefined;
}

function getArrayRandomIntNumbers(nNumbers, min, max, minInclusive = true, maxInclusive = false) {
    let ar = [];
    ar.length = nNumbers;
    return min <= max ? ([...ar].map(() => getRandomIntNumber(min, max, minInclusive, maxInclusive)))
        : undefined;
}

console.log(getArrayRandomIntNumbers(10, 3, 3, true));

function getOrderedList(array) {
    //return HTML string of element <ol> with items form
    //a given array elements
    //example: input- [1.2.3]
    //output "<ol><li>1</li><li>2</li><li>3</li></ol>"
    // array.map( n => res += '<li>' + n + '</li>');
    return `<ol style = "text-align: center; list-style: none">${getListItems(array)}</ol>`;
}

function getListItems(array) {
    return array.map(v => `<li style = "font-size: 50px"> ${v} </li>`).join(" ")
}

function getBlackOrWhiteDiv(array) {
    return array.map(v => `<div class = ${v == 0 ? 'white' : 'black'}> </div>`).join(' ');
}

// bodyId.innerHTML = getBlackOrWhiteDiv(getArrayRandomIntNumbers(10, 0, 2));
console.log(getOrderedList([1, 2, 3, 4, 5, 6]))


function getMatrixRandomIntNumbers(rows, columns, min, max){
    //TODO matrix of random
    let res = [];
    res.length = rows;
    return [...res].map(x => getArrayRandomIntNumbers(columns, min, max))

}

console.log(getMatrixRandomIntNumbers(5,4, 2,5));

