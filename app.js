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


function getMatrixRandomIntNumbers(rows, columns, min, max) {
    //TODO matrix of random
    let res = [];
    res.length = rows;
    return [...res].map(x => getArrayRandomIntNumbers(columns, min, max))

}

console.log(getMatrixRandomIntNumbers(5, 4, 2, 5));

//splice method for updating array
// const ars = [10, 20, -70, 100, 6, -10, 0];
// const arI = [1, 2, 3];
// let index = ars.indexOf(-70);
// ars.splice(index + 1, 0, ...arI);
// console.log(ars)
// console.log(ars.slice(index+1, index+4));
// console.log(ars);
// let indexFirstNegative = ars.findIndex(v => v < 0);
// console.log(index == indexFirstNegative);

function arrayCopy(src, posSrc, dst, posDst, length) {
    let res = undefined;
    if (Array.isArray(src) && Array.isArray(dst)) {
        dst.splice(posDst, 0, ...src.slice(posSrc, posSrc + length));
        res = dst;
    }
    return res;
}

function mooveElement(array, index, shift) {
    let newIndex = index + shift;
    if (newIndex >= array.length) {
        newIndex = array.length - 1;
    } else if (newIndex < 0) {
        newIndex = 0;
    }
    array.splice(newIndex, 0, array.splice(index, 1))
    return array;
}

const ars = [10, 20, -70, 100, 6, -10, 0];
const arI = [1, 2, 3];

console.log(arrayCopy(ars, 0, arI, 1, 2))
console.log(ars);
console.log("moove element: " + mooveElement(ars, 2, 8))

//reduce
console.log([1, 2, 3].reduce((res, cur) => res = res < cur ? res : cur));


console.log(ars.reduce((res, cur) => {
    if (cur < res[0]) {
        res[0] = cur;
    }
    if (cur > res[1]) {
        res[1] = cur;
    }
    return res;
}, [ars[0], ars[0]]));

//sort

const ar10 = [2, 3, 123, 200, 99, -5];
console.log(ar10.sort((a,b) => b-a))