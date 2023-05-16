// const person = { name: 'Vasya', id: 123, birthYear: 1990,
// addres: {country: 'Israel', city: 'Rehovot'} }

function createPerson(id, name, birthYear, country, city) {
    return { id, name, birthYear, addres: { country, city } }
}

const person1 = createPerson(123, 'Vasya', 1999, 'Israel', 'Rehovot');
const person2 = createPerson(123, 'Vasya', 1999, 'Israel', 'Rehovot');
// console.log(`person1 == person2 is ${person1 == person2}`); // is false
// оператор "==" для обьектов предполагает isSame / в JS нету isEquals
// в JS есть 2 способа добраться до полей объектов
// 1:
// console.log(person1.name);
// 2: используя как выражение в ковычках
console.log(person1['name']);

function displayKeyValue(person, key1, key2) { //распечатывает значение любого ключа: key - выражение
    if (key2) {
        console.log(`key1 ${key1}, key2 ${key2}, value is ${person[key1][key2]}`);
    } else {
        console.log(`key1 ${key1} value is ${person[key1]}`); //в случае person.key - key name is undefined
    }
}
// displayKeyValue(person1, 'name');
// displayKeyValue(person1, 'address', 'city');

// console.log(Object.keys(person1)) // возвращает массив строк - параметры

// Method keys of Object returns array of key values
console.log('keys', Object.keys(person1));
// Method values of Object returns array of key values
console.log('values', Object.values(person1));
// Method entries of Object returns array of arrays with key as first element and value as second one
console.log('entries', Object.entries(person1));

const x = {};
x['ab'] = 10;
x['ab']++;
console.log(x);

function getOccurrences(array) {
    return array.reduce((obj, s) => ({ ...obj, [s]: obj[s] ? obj[s] + 1 : 1 }), {});
}

function displayOccurrences(array) {
    // array of strings
    // display strings with their occurrency counts in the descending order of the counts
    // if counts are equaled then in ascending string values order

    const occurrences = array.reduce((obj, s) => ({ ...obj, [s]: obj[s] ? obj[s] + 1 : 1 }), {})
    Object.entries(occurrences).sort((e1, e2) => e1[1] == e2[1] ? e1[0].localeCompare(e2[0]) : e2[1] - e1[1])
        .forEach(e => console.log(`${e[0]} -> ${e[1]}`))
    console.log(occurrences)

}

function createStr(str, strLength) {
    return { str, strLength }
}
displayOccurrences(['lmn', 'ab', 'lmn', 'c', 'd', 'ab', 'a', 'a', 'lmn']);
/* lmn -> 3
    a -> 2
    ab -> 2
    c -> 1
    d -> 1 */
//mysolution

// function isAnagram( word, anagram){
//   return (word.toLowerCase().split("").sort().join() === anagram.toLowerCase().split("").sort().join())
// }


function isAnagram(word, anagram) {
    let res = false;
    if (word.length === anagram.length) {
        word = word.toLowerCase();
        const occurrences = getOccurrences(Array.from(word));
        res = Array.from(anagram).every(s => occurrences[s]-- > 0);
    }
    return res;
}


//будет 200 так как если в квадратных  скобках то ссылается на одно и тоже поле т.к. js по 
//умолчанию будет возверащать Object (toString)
//{a: 10, b: 20, '[objectObject]': 100 -> 200}
const a = { a: 'a', toString: function() {return 'a'} };
const b = { b: 'b', toString: function(){return 'kuku'} };
const d = { a: 10, b: 20 };
d[a] = 100;
d[b] = 200;

console.log(d);
console.log(d[a]);

const f = function(){};
const num = 2;
f.x = function(a,b){
    return a +b;
}
console.log(f.x(10, 20));

const ar = [2];
ar.x = 10;
console.log(ar.x);
console.log(Array.from({length: 2}));
console.log(Array.from({length: 5}).map((_, index) => index + 5));
console.log(Array.from({length: 26})
.map((_, index) => String.fromCharCode(index + 'a'.charCodeAt(0)))
.map((s) => `<div>${s}</div>`).join(''));